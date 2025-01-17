import React, { useRef } from 'react';
import dynamic from 'next/dynamic'
import Header from './components/Header'
import IntroSection from './components/IntroSection'
import ProjectsShowcase from './components/ProjectsShowcase'
import SkillsVisualization from './components/SkillsVisualization'
import Footer from './components/Footer'

const InteractiveMLDemo = dynamic(() => import('./components/InteractiveMLDemo'), { ssr: false })

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <IntroSection />
        <InteractiveMLDemo />
        <ProjectsShowcase />
        <SkillsVisualization />
      </main>
      <Footer />
    </div>
  )
}

