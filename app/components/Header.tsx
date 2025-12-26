import Image from "next/image"
import { Navbar } from "./Navbar"

const Header = () => {
  return (
    <header className="relative h-screen overflow-hidden text-white">
      <Navbar />
      
      {/* Fondo base nocturno */}
      <div className="absolute inset-0 -z-30 bg-linear-to-br 
        from-[#0b1026] via-[#14183a] to-[#231633]" />
      
      {/* Overlay para unificar tonos */}
      <div className="absolute inset-0 bg-indigo-900/20 mix-blend-soft-light -z-20" />
      
      {/* Nube 1 - Movimiento lento */}
      <Image
        src="/clouds/cloud-1.png"
        alt="Cloud layer"
        fill
        className="object-cover opacity-30 blur-sm mix-blend-screen -z-10 animate-cloud-slow"
        priority
      />
      
      {/* Nube 2 - Movimiento inverso */}
      <Image
        src="/clouds/cloud-2.png"
        alt="Cloud layer"
        fill
        className="object-cover opacity-20 blur-md mix-blend-lighten -z-10 animate-cloud-reverse"
      />
      
      {/* Contenido */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl md:text-8xl tracking-wide">
            ETHEREAL ENGINE
        </h1>
        <p className="mt-4 text-lg tracking-widest text-white/80">
            Create your dreams in a game
        </p>

        <div className="flex-col md:flex-row gap-4">
            <button className="mt-12 cursor-pointer rounded-full bg-white/90 px-10 py-3 mr-2 md:mb-0
                text-sm uppercase tracking-widest text-black
                transition hover:bg-white hover:shadow-lg hover:shadow-white/50">
                Explore dreams
            </button>
            <button className="mt-12 relative inline-flex h-12 overflow-hidden rounded-full p-0.5 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-10 py-3  bg-slate-950  text-sm font-medium text-white backdrop-blur-3xl">
                    What is Ethereal?
                </span>
            </button>
        </div>
      </div>
    </header>
  )
}

export default Header