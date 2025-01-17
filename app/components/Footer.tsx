export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <p className="mb-2">Email: mallamsz74@gmail.com</p>
        <p className="mb-2">LinkedIn: linkedin.com/in/shuaibu-sani-barde-21b835227</p>
        <p className="mb-2">GitHub: github.com/barde-s</p>
        <p className="mt-8 text-sm text-gray-400">
          © {new Date().getFullYear()} [Your Name]. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

