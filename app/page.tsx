'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)
  
  // Dados dos projetos
  const projects = [
    {
      id: 1,
      title: "E-commerce Moderno",
      description: "Plataforma de vendas completa com Next.js e Stripe",
      tech: ["Next.js", "Tailwind", "Stripe", "Prisma"],
      image: "/projeto1.jpg",
      link: "https://github.com/seu-usuario/projeto1",
      color: "from-blue-600 to-blue-400"
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Painel administrativo com gráficos em tempo real",
      tech: ["React", "Chart.js", "Node.js", "Socket.io"],
      image: "/projeto2.jpg",
      link: "https://github.com/seu-usuario/projeto2",
      color: "from-purple-600 to-blue-500"
    },
    {
      id: 3,
      title: "App de Tarefas",
      description: "Gerenciador de tarefas com drag and drop",
      tech: ["React", "DND Kit", "LocalStorage"],
      image: "/projeto3.jpg",
      link: "https://github.com/seu-usuario/projeto3",
      color: "from-cyan-600 to-blue-500"
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "CMS completo para blogs com markdown",
      tech: ["Next.js", "MDX", "MongoDB", "Auth.js"],
      image: "/projeto4.jpg",
      link: "https://github.com/seu-usuario/projeto4",
      color: "from-emerald-600 to-blue-500"
    },
    {
      id: 5,
      title: "API RESTful",
      description: "API escalável com Node.js e TypeScript",
      tech: ["Node.js", "Express", "TypeScript", "PostgreSQL"],
      image: "/projeto5.jpg",
      link: "https://github.com/seu-usuario/projeto5",
      color: "from-red-600 to-orange-500"
    }
  ]

  // Duplicar projetos para criar efeito infinito (triplicado para transição mais suave)
  const extendedProjects = [...projects, ...projects, ...projects]
  const totalSlides = projects.length

  // Carrossel infinito sem reset visível
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1
        
        // Quando chegar perto do final da lista estendida
        if (nextIndex >= totalSlides * 2) {
          // Desabilita transição temporariamente
          setIsTransitioning(false)
          
          // Reseta para a posição equivalente no início
          setTimeout(() => {
            setCurrentIndex(totalSlides)
            // Reabilita transição após o reset
            setTimeout(() => {
              setIsTransitioning(true)
            }, 50)
          }, 0)
          
          return totalSlides
        }
        
        return nextIndex
      })
    }, 9000)
    
    return () => clearInterval(interval)
  }, [totalSlides])

  // Inicializar no meio da lista estendida
  useEffect(() => {
    setCurrentIndex(totalSlides)
  }, [totalSlides])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1
      
      if (nextIndex >= totalSlides * 2) {
        setIsTransitioning(false)
        setTimeout(() => {
          setCurrentIndex(totalSlides)
          setTimeout(() => {
            setIsTransitioning(true)
          }, 50)
        }, 0)
        return totalSlides
      }
      
      return nextIndex
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexCalc = prevIndex - 1
      
      if (prevIndexCalc < 0) {
        setIsTransitioning(false)
        setTimeout(() => {
          setCurrentIndex(totalSlides * 2 - 1)
          setTimeout(() => {
            setIsTransitioning(true)
          }, 50)
        }, 0)
        return totalSlides * 2 - 1
      }
      
      return prevIndexCalc
    })
  }

  // Calcular qual projeto real está sendo exibido (para os indicadores)
  const getRealIndex = () => {
    if (currentIndex >= totalSlides * 2) {
      return currentIndex - totalSlides * 2
    }
    if (currentIndex >= totalSlides) {
      return currentIndex - totalSlides
    }
    return currentIndex
  }

  return (
    <main className="relative bg-gradient-to-b from-black via-black to-blue-950/20 min-h-screen overflow-hidden">
      {/* Luzes decorativas */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/10 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blue-600/20 to-transparent transform -skew-x-12"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/15 to-transparent transform -skew-y-6"></div>
      
      <div className="relative max-w-[900px] mx-auto px-6 z-10">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 min-h-[calc(100vh-80px)]">
          {/* Coluna da esquerda - Texto */}
          <div className="space-y-8 flex-1">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-blue-400 font-mono font-semibold">
                Disponível para trabalho
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm uppercase tracking-[0.3em] text-gray-400 font-mono">
                DESENVOLVEDOR FULL STACK
              </h3>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
                João Gabriel
              </h1>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Construo produtos web do zero — 
              desde a API até a interface. 
              Foco em código limpo, 
              UX que faz sentido e entregas que não travam.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-300 font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105"
              >
                Ver projetos →
              </button>
              <button className="px-8 py-3 border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white rounded-lg transition-all duration-300 font-medium hover:bg-blue-500/10">
                Entre em contato
              </button>
            </div>

            <div className="flex gap-8 pt-8 border-t border-gray-800">
              <div>
                <div className="text-2xl font-bold text-white">0+</div>
                <div className="text-xs text-gray-500">anos de experiência</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{projects.length}+</div>
                <div className="text-xs text-gray-500">projetos concluídos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-gray-500">satisfação dos clientes</div>
              </div>
            </div>
          </div>

          {/* Coluna da direita - Avatar */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-pulse"></div>
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-blue-950/50 to-black border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20">
                <img 
                  src="/foto.jpeg"
                  alt="foto de perfil - Full Stack Developer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-blue-600/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-500/30 animate-bounce">
                <span className="text-blue-400 text-xl">⚡</span>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de Projetos - Carrossel Infinito */}
        <div id="projetos" className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meus <span className="text-blue-400">Projetos</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Carrossel Infinito */}
          <div className="relative">
            {/* Cards Container */}
            <div className="overflow-hidden">
              <div 
                className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-out' : ''}`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {extendedProjects.map((project, idx) => (
                  <div key={`${project.id}-${idx}`} className="w-full flex-shrink-0 px-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className={`bg-gradient-to-br ${project.color} p-[2px] rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30`}>
                        <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-6 h-full">
                          {/* Imagem do projeto */}
                          <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                            {project.image ? (
                              <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="text-center">
                                <span className="text-6xl mb-2 block">📱</span>
                                <span className="text-gray-500 text-sm">Preview em breve</span>
                              </div>
                            )}
                          </div>
                          
                          {/* Info do projeto */}
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-4">
                            {project.description}
                          </p>
                          
                          {/* Tecnologias */}
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, techIdx) => (
                              <span 
                                key={techIdx}
                                className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          {/* Link */}
                          <div className="mt-4 flex items-center gap-2 text-blue-400 text-sm group-hover:gap-3 transition-all">
                            Ver no GitHub
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Botões de navegação */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-600/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-20"
              aria-label="Projeto anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-600/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-20"
              aria-label="Próximo projeto"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicadores */}
            <div className="flex justify-center gap-2 mt-8">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsTransitioning(true)
                    setCurrentIndex(totalSlides + idx)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    getRealIndex() === idx 
                      ? 'w-8 bg-blue-500' 
                      : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Ir para projeto ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Rodapé com Redes Sociais */}
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
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
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
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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

            {/* WhatsApp - Ícone Oficial */}
            <a
              href="https://wa.me/5511999999999?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-gray-400 hover:text-green-400 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gray-900/50 group-hover:bg-green-500/10 flex items-center justify-center border border-gray-700 group-hover:border-green-500/50 transition-all duration-300 group-hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 2.5c-5.238 0-9.5 4.262-9.5 9.5 0 1.678.438 3.325 1.266 4.764l-1.297 4.736 4.86-1.273c1.384.78 2.957 1.192 4.671 1.192 5.238 0 9.5-4.262 9.5-9.5s-4.262-9.5-9.5-9.5zm5.844 13.588c-.165.468-.977.857-1.346.902-.32.037-.708.053-1.118-.045-.327-.078-.753-.191-1.292-.4-.883-.343-1.675-1.037-2.334-1.865-.325-.408-.731-.9-.797-1.438-.03-.24-.015-.462.04-.662.053-.195.144-.366.255-.513.119-.158.215-.281.309-.425.1-.156.133-.312.067-.504-.067-.192-.297-.845-.424-1.159-.12-.296-.241-.255-.334-.26-.086-.004-.186-.006-.286-.006-.216 0-.565.081-.86.406-.336.371-.882.861-.882 2.115 0 1.254.913 2.466 1.04 2.637.128.171 1.718 2.626 4.176 3.684.582.25 1.041.399 1.398.511.587.182 1.121.156 1.543.095.472-.07 1.456-.596 1.661-1.17.205-.574.205-1.066.144-1.168-.061-.102-.224-.165-.459-.288-.234-.123-1.385-.684-1.6-.763-.214-.079-.37-.123-.526.122-.156.245-.606.763-.743.92-.137.156-.274.176-.508.053-.234-.123-.988-.365-1.882-1.163-.696-.622-1.165-1.389-1.302-1.623-.137-.234-.015-.36.103-.477.105-.105.234-.273.351-.41.117-.137.156-.234.234-.39.078-.156.039-.293-.02-.41-.058-.117-.526-1.267-.721-1.734-.19-.454-.383-.393-.52-.4l-.447-.006c-.155 0-.405.058-.617.293-.212.235-.807.789-.807 1.926 0 1.137.828 2.236.944 2.39.116.156 1.592 2.438 3.862 3.415.54.232.962.371 1.291.463.798.226 1.525.195 2.098.112.637-.092 1.966-.805 2.244-1.582.278-.777.278-1.444.195-1.582-.083-.138-.306-.231-.648-.415z"/>
                </svg>
              </div>
              <span className="text-xs font-mono">WhatsApp</span>
            </a>
          </div>

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