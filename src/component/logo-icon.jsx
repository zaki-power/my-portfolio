import { Code } from 'lucide-react'
import { motion } from "motion/react"
// Simple Logo Icon
export  function LogoIcon({ size = "w-10 h-10", onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${size} rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-0.5 cursor-pointer`}
      onClick={onClick}
    >
      <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
        <Code className="w-5 h-5 text-white" />
      </div>
    </motion.div>
  )
}


export function AnimatedLogoIcon({ size = "w-12 h-12", onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative cursor-pointer group"
      onClick={onClick}
    >
      <div className={`${size} rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 p-0.5 group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300`}>
        <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
          <Code className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
      {/* Glow effect */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-30 blur transition-opacity duration-300"></div>
    </motion.div>
  )
}

// Logo Icon with Rotating Rings
export function LogoIconWithRings({ size = "w-16 h-16", onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="relative cursor-pointer"
      onClick={onClick}
    >

      <motion.div
        className="absolute inset-0 rounded-full border-2 border-purple-500/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      

      <motion.div
        className="absolute inset-2 rounded-full border-2 border-cyan-500/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      

      <div className={`${size} rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-0.5 relative z-10`}>
        <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
          <Code className="w-8 h-8 text-white" />
        </div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500/20 via-cyan-400/20 to-purple-500/20 blur-xl animate-pulse" />
    </motion.div>
  )
}


export function CompleteLogo({ showText = true, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-3 cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 p-0.5 group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
            <Code className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-30 blur transition-opacity duration-300"></div>
      </div>
      
      {showText && (
        <div className="hidden sm:block">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Portfolio
          </div>
          <div className="text-xs text-white/60 -mt-1">Full Stack Developer</div>
        </div>
      )}
    </motion.div>
  )
}