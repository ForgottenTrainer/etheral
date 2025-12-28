import Image from "next/image"
import creator from "./../../public/creator.png"

const Editor = () => {
  return (
    <section className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Texto */}
          <div className="space-y-6">
            <h3 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              Create characters <br />
              <span className="text-white/70">
                as easily as imagining them
              </span>
            </h3>

            <p className="text-white/70 max-w-md">
              No complex tools. No technical knowledge. Just ideas, shapes and
              creativity flowing naturally into playable characters.
            </p>

            <button className="
              inline-flex items-center gap-2
              rounded-full px-8 py-3
              bg-white/90 text-black text-sm uppercase tracking-widest
              transition
              hover:bg-white hover:shadow-lg hover:shadow-white/40
              cursor-pointer
            ">
              Start creating
            </button>
          </div>

          {/* Imagen */}
          <div className="relative">
            {/* Glow */}
            <div className="
              absolute inset-0 rounded-2xl
              bg-indigo-500/20 blur-2xl
              opacity-60
            " />

            {/* Card */}
            <div className="
              relative rounded-2xl overflow-hidden
              bg-white/5 backdrop-blur-xl
              border border-white/10
              shadow-xl shadow-indigo-900/30
            ">
              <Image
                src={creator}
                alt="Character creator"
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Editor
