function InfoPanel({ role, onClose }) {
  if (!role) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-6">
      <div className="w-full max-w-md rounded-2xl bg-[#FFFDF7] p-6 shadow-2xl">

        <div className="mb-4 flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-[#B89B5E]">
              {role.category}
            </p>

            <h2 className="mt-1 font-serif text-3xl font-bold text-[#242424]">
              {role.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="rounded-full px-3 py-1 text-xl text-[#666] hover:bg-[#F1EBDD]"
          >
            ×
          </button>
        </div>

        <p className="leading-7 text-[#555]">
          {role.description}
        </p>

        <div className="mt-5 rounded-xl bg-[#F7F3EA] p-4">
          <h3 className="font-semibold text-[#242424]">
            Key responsibilities
          </h3>

          <ul className="mt-3 space-y-2 text-sm leading-6 text-[#555]">
            {role.responsibilities.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )
}

export default InfoPanel