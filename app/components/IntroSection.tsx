import { TypeAnimation } from 'react-type-animation'

export default function IntroSection() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Shuaibu Sani Barde</h1>
      <TypeAnimation
        sequence={[
          'Machine Learning Engineer',
          2000,
          'Data Scientist',
          2000,
          'AI Enthusiast',
          2000
        ]}
        wrapper="h2"
        repeat={Infinity}
        className="text-3xl text-blue-400"
      />
      <p className="mt-6 text-xl max-w-2xl mx-auto">
        Welcome to my interactive portfolio. Explore my projects, skills, and even try out a live ML demo below!
      </p>
    </section>
  )
}

