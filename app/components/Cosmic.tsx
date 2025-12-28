const CosmicBackground = () => {
  return (
    <>
      {/* Gradiente base */}
      <div className="fixed inset-0 -z-50 bg-linear-to-br 
        from-[#0b1026] via-[#14183a] to-[#231633]" />

      {/* Overlay de cohesión cromática */}
      <div className="fixed inset-0 -z-40 bg-indigo-900/20 mix-blend-soft-light" />

      {/* Estrellas */}
      <div className="fixed inset-0 -z-30 bg-stars opacity-60" />
      <div className="fixed inset-0 -z-20 bg-stars-large opacity-35 animate-stars-drift" />
    </>
  )
}

export default CosmicBackground
