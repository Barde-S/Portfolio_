'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    title: "Crop Yield Prediction",
    description: "Developed a machine learning pipeline for predicting crop yield with robust evaluation.",
    tags: ["Python", "Scikit-learn", "LightGBM", "XGBoost", "Pandas"]
  },
  {
    title: "Automated Trading Bot",
    description: "Built a bot integrating OANDA and Alpaca APIs for automated forex and stock trading.",
    tags: ["Python", "OANDA API", "Alpaca API", "APScheduler", "RESTful API"]
  },
  {
    "Loan Default Prediction",
    description: "Built predictive models to assess loan default risks using machine learning.",
    tags: ["Python", "Jupyter Notebook", "Machine Learning"]
  }
]

export default function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState(0)

  return (
    <section id="projects" className="my-20">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-lg cursor-pointer ${
              selectedProject === index ? 'bg-blue-600' : 'bg-gray-700'
            }`}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedProject(index)}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <AnimatePresence>
              {selectedProject === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-gray-800 rounded text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

