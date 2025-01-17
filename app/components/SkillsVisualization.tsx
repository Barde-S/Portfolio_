'use client'

import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const skills = [
  { name: "Machine Learning", value: 90 },
  { name: "Deep Learning", value: 85 },
  { name: "Natural Language Processing", value: 80 },
  { name: "Computer Vision", value: 75 },
  { name: "Data Visualization", value: 85 },
  { name: "Big Data Processing", value: 70 },
  { name: "Statistical Analysis", value: 80 },
  { name: "Python", value: 95 },
  { name: "TensorFlow", value: 85 },
  { name: "PyTorch", value: 80 }
]

export default function SkillsVisualization() {
  const svgRef = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)
    const width = 600
    const height = 400
    const radius = Math.min(width, height) / 2

    svg.attr('width', width).attr('height', height)

    const g = svg.append('g').attr('transform', `translate(${width / 2},${height / 2})`)

    const color = d3.scaleOrdinal(d3.schemeCategory10)

    const pie = d3.pie<any>().value((d: any) => d.value)

    const path = d3.arc<any>()
      .outerRadius(radius - 10)
      .innerRadius(0)

    const arc = g.selectAll('.arc')
      .data(pie(skills))
      .enter().append('g')
      .attr('class', 'arc')

    arc.append('path')
      .attr('d', path)
      .attr('fill', (d: any) => color(d.data.name))

    arc.append('text')
      .attr('transform', (d: any) => `translate(${path.centroid(d)})`)
      .attr('dy', '.35em')
      .text((d: any) => d.data.name)
      .style('text-anchor', 'middle')
      .style('font-size', '10px')
      .style('fill', 'white')

  }, [])

  return (
    <section id="skills" className="my-20">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex justify-center">
        <svg ref={svgRef}></svg>
      </div>
    </section>
  )
}

