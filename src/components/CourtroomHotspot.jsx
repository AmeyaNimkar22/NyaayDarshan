function CourtroomHotspot({ position, onClick, label }) {
  return (
    <button
      className={`
        absolute rounded-md
        border-2 border-dashed border-[#D4A72C]
        bg-[#FFD84D]/10
        transition-all duration-200 ease-out

        hover:bg-[#FFD84D]/45
        hover:border-[#FFD84D]
        hover:shadow-[0_0_25px_rgba(255,216,77,0.9)]
        hover:scale-[1.03]

        focus:outline-none
        focus:ring-2
        focus:ring-[#FFD84D]/70

        ${position}
      `}
      onClick={onClick}
      aria-label={label}
    >
      <span className="sr-only">{label}</span>
    </button>
  )
}

export default CourtroomHotspot