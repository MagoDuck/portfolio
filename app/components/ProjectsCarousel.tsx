'use client'

import { useState, useEffect } from 'react'

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  image: string
  link: string
  color: string
}

interface ProjectsCarouselProps {
  projects: Project[]
}

export default function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)
  
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
                      Ver
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
  )
}