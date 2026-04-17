import Link from "next/link"

export default function Navbar() {
  return (
    <header className="w-full border-b-2 border-blue-500/60 bg-[#0a0a0a] backdrop-blur-md sticky top-0 z-50">
      <nav className="max-w-[900px] mx-auto px-6 py-5 flex items-center justify-between">
    
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="font-mono text-[14px] tracking-wide text-blue-400 font-semibold hover:text-blue-300 transition-colors cursor-pointer">
            jg.dev
          </span>
        </div>

        <ul className="flex gap-8 text-[14px] font-sans tracking-wide">
          <li>
            <Link
              href="#projetos"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-medium hover:border-b-2 hover:border-blue-400 pb-1"
            >
              Projetos
            </Link>
          </li>

          <li>
            <Link
              href="#skills"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-medium hover:border-b-2 hover:border-blue-400 pb-1"
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              href="#experiencia"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-medium hover:border-b-2 hover:border-blue-400 pb-1"
            >
              Experiência
            </Link>
          </li>

          <li>
            <Link
              href="#contato"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-medium hover:border-b-2 hover:border-blue-400 pb-1"
            >
              Contato
            </Link>
          </li>
        </ul>

      </nav>
    </header>
  )
}