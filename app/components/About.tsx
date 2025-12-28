import Image from "next/image"

const About = () => {

  const cards = [
    {
      title: "No-Code Platform",
      subtitle:
        "You don’t need to know how to program. Shape ideas, logic and worlds as if you were dreaming them into existence.",
      icon: "🌙",
    },
    {
      title: "Dream-Like Worlds",
      subtitle:
        "Design atmospheres, physics and narratives with a visual workflow inspired by imagination, not syntax.",
      icon: "✨",
    },
    {
      title: "Export & Control",
      subtitle:
        "Turn your dream into reality. Export projects, tweak behaviors and grow from no-code to full control.",
      icon: "🜂",
    },
  ]

  return (
    <section className="relative z-10 py-24">
      {/* Velo sutil para diferenciar sección */}

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h3 className="text-4xl md:text-6xl font-semibold text-white">
            Create your games as if it were a dream
          </h3>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Ethereal Engine is designed to let imagination flow freely, without
            barriers between ideas and creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="
                relative rounded-2xl p-6
                bg-white/5 backdrop-blur-xl
                border border-white/10
                shadow-lg shadow-indigo-900/20
                transition
                hover:bg-white/10
                hover:shadow-indigo-500/30
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br 
                from-indigo-500/10 via-transparent to-purple-500/10 opacity-0 
                hover:opacity-100 transition" />

              <div className="relative z-10">
                <div className="text-3xl mb-4">{card.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {card.title}
                </h4>
                <p className="text-sm text-white/70 leading-relaxed">
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
