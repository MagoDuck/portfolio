'use client'

interface Skill {
  name: string;
  color: string;
  hoverColor: string;
  icon: string;
}

export default function SkillsCarousel() {
  const skills: Skill[] = [
    { name: "HTML5", color: "text-orange-500", hoverColor: "hover:border-orange-500/50", icon: "M12 2L2 4l1.5 15L12 22l8.5-3L22 4 12 2zm0 2.5l6.5 1.2-1 10.5L12 19.5l-5.5-1.8-1-10.5L12 4.5z" },
    { name: "CSS3", color: "text-blue-500", hoverColor: "hover:border-blue-500/50", icon: "M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H7.318l.179 1.913h7.523l-.227 2.54-3.287.888-3.108-.885-.188-2.008H5.828l.318 3.86 5.832 1.647 5.71-1.674.744-8.263z" },
    { name: "JavaScript", color: "text-yellow-400", hoverColor: "hover:border-yellow-500/50", icon: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.09-.35-.103-.532-.057-.735.143-.624.897-.833 1.485-.692.512.122.823.476.952.936.161-.111.715-.5.907-.667.326-.294.324-.475.162-.694-.448-.595-1.387-.916-2.358-.828-1.152.104-1.98.68-2.164 1.324-.259.9.09 1.626.73 2.159.975.812 2.016 1.028 2.387 1.629.267.432.254.865.037 1.125-.3.36-.86.46-1.483.376-.721-.1-1.127-.482-1.359-.953-.18-.37-.387-.563-.387-.563l-.947.61c.167.525.509.972.983 1.293 1.098.744 2.739.592 3.384-.14.584-.662.464-1.637-.2-2.28-.474-.457-1.21-.745-2.052-1.156-.555-.27-.835-.537-.933-.945-.092-.386.036-.722.182-.968.377-.632 1.208-.889 2.006-.729.527.106.883.353 1.096.71.106.18.245.425.216.757-.09.544-.631.812-1.192.812-.183 0-.363-.022-.54-.06z" },
    { name: "React", color: "text-cyan-400", hoverColor: "hover:border-cyan-500/50", icon: "M12 14.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm0-12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 16c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" },
    { name: "Node.js", color: "text-green-500", hoverColor: "hover:border-green-500/50", icon: "M11.998 1.5c-.497 0-.993.106-1.456.319L3.826 5.247c-.9.423-1.456 1.328-1.456 2.285v8.926c0 .957.556 1.862 1.456 2.285l6.716 3.428c.463.213.959.319 1.456.319.497 0 .993-.106 1.456-.319l6.716-3.428c.9-.423 1.456-1.328 1.456-2.285V7.532c0-.957-.556-1.862-1.456-2.285l-6.716-3.428c-.463-.213-.959-.319-1.456-.319z" },
    { name: "MySQL", color: "text-blue-600", hoverColor: "hover:border-blue-600/50", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" },
    { name: "Git", color: "text-red-500", hoverColor: "hover:border-red-500/50", icon: "M22.5 12.5L12.5 2.5c-.6-.6-1.5-.6-2 0l-2 2 2.5 2.5c.7-.2 1.5.1 2 .6.5.5.8 1.3.6 2l2.5 2.5c.7-.2 1.5.1 2 .6.9.9.9 2.3 0 3.2-.9.9-2.3.9-3.2 0-.5-.5-.8-1.2-.6-1.9l-2.5-2.5c-.4.1-.9.1-1.3 0L7.5 13.5c.2.7-.1 1.5-.6 2-.9.9-2.3.9-3.2 0-.9-.9-.9-2.3 0-3.2.5-.5 1.2-.8 1.9-.6l2-2c-.1-.5-.1-1 0-1.5L5.5 4.5l-3 3c-.6.6-.6 1.5 0 2l10 10c.6.6 1.5.6 2 0l8-8c.6-.6.6-1.5 0-2z" },
    { name: "Tailwind", color: "text-cyan-400", hoverColor: "hover:border-cyan-500/50", icon: "M12 6c-2.67 0-4.33 1.33-5 4 .67-1.33 1.5-1.83 2.5-1.5.54.18.93.59 1.36 1.04.7.74 1.51 1.59 3.14 1.59 2.67 0 4.33-1.33 5-4-.67 1.33-1.5 1.83-2.5 1.5-.54-.18-.93-.59-1.36-1.04-.7-.74-1.51-1.59-3.14-1.59z" },
    { name: "TypeScript", color: "text-blue-600", hoverColor: "hover:border-blue-500/50", icon: "M3 3h18v18H3V3zm10.5 14.5v-4.5H16v-2h-6v2h2.5v4.5H12V19h4v-2h-2.5zM9 9h6V7H9v2z" },
    { name: "MongoDB", color: "text-green-600", hoverColor: "hover:border-green-500/50", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h-2v-2h2v2zm4 0h-2v-2h2v2zm4-8h-2v6h-2V9h-2v6h-2V9H8v6H6V9H4V7h16v2z" },
  ]

  const SkillItem = ({ skill }: { skill: Skill }) => (
    <div className={`skill-item flex flex-col items-center gap-2 bg-gray-900/50 backdrop-blur-sm px-6 py-4 rounded-xl border border-gray-700 ${skill.hoverColor} transition-all duration-300 hover:scale-110 cursor-pointer group`}>
      <svg className={`w-12 h-12 ${skill.color} group-hover:brightness-110 transition-colors`} fill="currentColor" viewBox="0 0 24 24">
        <path d={skill.icon} />
      </svg>
      <span className="text-sm font-mono text-gray-300">{skill.name}</span>
    </div>
  )

  return (
    <div className="relative overflow-hidden py-8">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
      
      <div className="animate-scroll-right-to-left skills-track">
        {/* Primeira cópia */}
        <div className="flex gap-12 px-6">
          {skills.map((skill, index) => (
            <SkillItem key={`first-${index}`} skill={skill} />
          ))}
        </div>
        
        {/* Segunda cópia para loop infinito */}
        <div className="flex gap-12 px-6">
          {skills.map((skill, index) => (
            <SkillItem key={`second-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  )
}