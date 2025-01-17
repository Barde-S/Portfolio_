'use client'

import { useState, useEffect, useRef } from 'react'
import * as tf from '@tensorflow/tfjs'
import { Chart } from 'chart.js/auto'

export default function InteractiveMLDemo() {
  const [prediction, setPrediction] = useState<number | null>(null)
  const [model, setModel] = useState<tf.Sequential | null>(null)
  const chartRef = useRef<Chart | null>(null)

  useEffect(() => {
    // Create and train a simple model
    const createModel = async () => {
      const model = tf.sequential()
      model.add(tf.layers.dense({ units: 1, inputShape: [1] }))
      model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' })

      const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1])
      const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1])

      await model.fit(xs, ys, { epochs: 250 })
      setModel(model)
    }

    createModel()

    // Initialize chart
    const ctx = document.getElementById('predictionChart') as HTMLCanvasElement
    chartRef.current = new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Training Data',
          data: [
            { x: -1, y: -3 },
            { x: 0, y: -1 },
            { x: 1, y: 1 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 7 }
          ],
          backgroundColor: 'rgba(75, 192, 192, 0.6)'
        }, {
          label: 'Predictions',
          data: [],
          backgroundColor: 'rgba(255, 99, 132, 0.6)'
        }]
      },
      options: {
        scales: {
          x: { type: 'linear', position: 'bottom' },
          y: { type: 'linear' }
        }
      }
    })

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy()
      }
    }
  }, [])

  const handlePredict = (input: number) => {
    if (model) {
      const inputTensor = tf.tensor2d([input], [1, 1])
      const predictionTensor = model.predict(inputTensor) as tf.Tensor
      const predictionValue = predictionTensor.dataSync()[0]
      setPrediction(predictionValue)

      // Update chart
      if (chartRef.current) {
        chartRef.current.data.datasets[1].data.push({ x: input, y: predictionValue })
        chartRef.current.update()
      }
    }
  }

  return (
    <section className="my-20 p-6 bg-gray-700 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Interactive ML Demo</h2>
      <p className="mb-4">
        This demo uses a simple linear regression model trained on 6 data points.
        Enter a number to see the model's prediction!
      </p>
      <div className="flex items-center mb-4">
        <input
          type="number"
          className="mr-4 p-2 text-black rounded"
          placeholder="Enter a number"
          onChange={(e) => handlePredict(parseFloat(e.target.value))}
        />
        {prediction !== null && (
          <p className="text-xl">Prediction: {prediction.toFixed(2)}</p>
        )}
      </div>
      <canvas id="predictionChart" width="400" height="200"></canvas>
    </section>
  )
}

