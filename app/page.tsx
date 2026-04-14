export default function Home() {
  return (
    <main className="bg-gradient-to-b from-black via-black to-blue-950/20 min-h-screen">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 min-h-[calc(100vh-80px)]">
          
          {/* Coluna da esquerda - Texto */}
          <div className="space-y-8 flex-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-blue-400 font-mono font-semibold">
                Disponível para trabalho
              </span>
            </div>

            {/* Título principal */}
            <div className="space-y-3">
              <h3 className="text-sm uppercase tracking-[0.3em] text-gray-400 font-mono">
                DESENVOLVEDOR FULL STACK
              </h3>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
                João Gabriel
              </h1>
            </div>
            
            {/* Descrição */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Construo produtos web do zero — 
              desde a API até a interface. 
              Foco em código limpo, 
              UX que faz sentido e entregas que não travam.
            </p>
            
            {/* Botões CTA */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-300 font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105">
                Ver projetos →
              </button>
              <button className="px-8 py-3 border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white rounded-lg transition-all duration-300 font-medium hover:bg-blue-500/10">
                Entre em contato
              </button>
            </div>

            {/* Stats/Info adicional */}
            <div className="flex gap-8 pt-8 border-t border-gray-800">
              <div>
                <div className="text-2xl font-bold text-white">0+</div>
                <div className="text-xs text-gray-500">anos de experiência</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">1+</div>
                <div className="text-xs text-gray-500">projetos concluídos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-gray-500">satisfação dos clientes</div>
              </div>
            </div>
          </div>

          {/* Coluna da direita - Avatar com foto */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative group">
              {/* Anéis decorativos */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              
              {/* Círculo externo com animação */}
              <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-pulse"></div>
              
              {/* Avatar container com imagem */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-blue-950/50 to-black border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20">
                <img 
                  src="/foto.jpeg"
                  alt="foto de perfil - Full Stack Developer"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Ícone decorativo flutuante */}
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-blue-600/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-500/30 animate-bounce">
                <span className="text-blue-400 text-xl">⚡</span>
              </div>
            </div>
          </div>
          
        </div>

        {/* Seção de Redes Sociais - Rodapé */}
        <div className="py-12 border-t border-gray-800 mt-12">
          <div className="flex justify-center gap-8 md:gap-12">
            {/* GitHub */}
            <a
              href="https://github.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-gray-400 hover:text-blue-400 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gray-900/50 group-hover:bg-blue-500/10 flex items-center justify-center border border-gray-700 group-hover:border-blue-500/50 transition-all duration-300 group-hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs font-mono">GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-gray-400 hover:text-blue-400 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gray-900/50 group-hover:bg-blue-500/10 flex items-center justify-center border border-gray-700 group-hover:border-blue-500/50 transition-all duration-300 group-hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.203 0 22.225 0z" />
                </svg>
              </div>
              <span className="text-xs font-mono">LinkedIn</span>
            </a>

            {/* Email */}
            <a
              href="mailto:seuemail@exemplo.com"
              className="group flex flex-col items-center gap-2 text-gray-400 hover:text-blue-400 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gray-900/50 group-hover:bg-blue-500/10 flex items-center justify-center border border-gray-700 group-hover:border-blue-500/50 transition-all duration-300 group-hover:scale-110">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-xs font-mono">Email</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/5511999999999?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-gray-400 hover:text-green-400 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gray-900/50 group-hover:bg-green-500/10 flex items-center justify-center border border-gray-700 group-hover:border-green-500/50 transition-all duration-300 group-hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.032 2.5c-5.252 0-9.524 4.27-9.526 9.52 0 1.68.44 3.326 1.273 4.77L2.5 21.5l4.976-1.296a9.488 9.488 0 004.556 1.156c5.252 0 9.525-4.27 9.526-9.52 0-5.25-4.274-9.52-9.526-9.52zm0 17.51c-1.463 0-2.898-.395-4.145-1.142l-.297-.177-2.955.77.79-2.877-.193-.31a7.566 7.566 0 01-1.23-4.063c.002-4.18 3.403-7.58 7.585-7.58 4.18 0 7.58 3.4 7.582 7.58-.002 4.18-3.403 7.58-7.582 7.58zm4.156-5.676c-.227-.113-1.346-.664-1.555-.74-.208-.076-.36-.113-.51.113-.152.226-.587.74-.72.892-.133.15-.266.17-.493.057-.227-.113-.957-.353-1.823-1.125-.674-.6-1.13-1.34-1.262-1.567-.133-.226-.014-.35.1-.463.102-.102.227-.265.34-.398.114-.133.152-.227.227-.378.076-.15.038-.284-.02-.398-.057-.113-.51-1.228-.698-1.68-.184-.44-.37-.38-.51-.386l-.44-.006c-.15 0-.393.056-.598.284-.205.227-.78.763-.78 1.86 0 1.098.8 2.16.91 2.31.11.15 1.57 2.398 3.803 3.362.53.228.945.364 1.268.466.533.17 1.018.146 1.402.088.428-.064 1.32-.54 1.506-1.06.186-.52.186-.966.13-1.06-.056-.094-.207-.15-.434-.264z" />
                </svg>
              </div>
              <span className="text-xs font-mono">WhatsApp</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8">
            <p className="text-xs text-gray-600 font-mono">
              © 2026 João Gabriel. Todos os direitos reservados.
            </p>
          </div>
        </div>

      </div>
    </main>
  )
}