import { useEffect, useState } from 'react'
import courtroom from '../assets/courtroom.svg'
import courtroomData from '../data/courtroomData'
import InfoPanel from '../components/InfoPanel'
import CourtroomHotspot from '../components/CourtroomHotspot'
import QuizModal from '../components/QuizModal'

function NyaayDarshan() {
  const [selectedRole, setSelectedRole] = useState(null)
  const [language, setLanguage] = useState('en')
  const [exploredRoles, setExploredRoles] = useState([])
  const [showCompletion, setShowCompletion] = useState(false)
  const [completionDismissed, setCompletionDismissed] = useState(false)
  const [showQuiz, setShowQuiz] = useState(false)

  const totalElements = Object.keys(courtroomData).length
  const progress = Math.round((exploredRoles.length / totalElements) * 100)

  function handleExplore(roleKey) {
    setSelectedRole(roleKey)
    setExploredRoles((prev) => (prev.includes(roleKey) ? prev : [...prev, roleKey]))
  }

  useEffect(() => {
    if (
      exploredRoles.length === totalElements &&
      selectedRole === null &&
      !completionDismissed &&
      !showQuiz
    ) {
      setShowCompletion(true)
    }
  }, [exploredRoles.length, totalElements, selectedRole, completionDismissed, showQuiz])

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] px-4 py-8 md:px-8">
      {/* Container Wrap */}
      <div className="mx-auto max-w-7xl">
        
        {/* Header Section */}
        <header className="mb-8 flex flex-col items-center justify-between gap-4 border-b border-[#E7E2D8] pb-6 sm:flex-row sm:text-left">
          <div>
            
            <h1 className="mt-1 font-serif text-3xl font-extrabold tracking-tight text-[#1E293B] md:text-4xl">
              NyaayDarshan <span className="font-sans text-xl font-normal text-[#64748B]">(न्याय दर्शन)</span>
            </h1>
            <p className="mt-1 text-sm text-[#525252]">
              Explore elements and personnel inside an Indian Courtroom
            </p>
          </div>

          {/* Language Switcher & Actions */}
          <div className="flex items-center gap-3">
            <div className="inline-flex rounded-xl border border-[#E2D8C3] bg-[#FFFDF9] p-1 shadow-xs">
              <button
                onClick={() => setLanguage('en')}
                className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition-all ${
                  language === 'en'
                    ? 'bg-[#1E293B] text-white shadow-sm'
                    : 'text-[#64748B] hover:text-[#1E293B]'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition-all ${
                  language === 'hi'
                    ? 'bg-[#1E293B] text-white shadow-sm'
                    : 'text-[#64748B] hover:text-[#1E293B]'
                }`}
              >
                हिन्दी
              </button>
            </div>

            {/* Quiz Quick Trigger */}
            <button
              onClick={() => setShowQuiz(true)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#D97706] bg-[#FEF3C7] px-3.5 py-2 text-xs font-bold text-[#92400E] transition hover:bg-[#FDE68A] shadow-xs"
            >
               Test yourself
            </button>
          </div>
        </header>

        {/* Progress & Status Card */}
        <div className="mb-6 rounded-2xl border border-[#E7E2D8] bg-[#FFFDF9] p-5 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <h2 className="font-serif text-lg font-bold text-[#1E293B]">
                Courtroom Exploration Progress
              </h2>
              <p className="text-xs text-[#64748B]">
                Click hotspots on the diagram below to learn about each legal entity.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[#FEF3C7] px-3 py-1 text-xs font-bold text-[#854D0E]">
                {exploredRoles.length} / {totalElements} Roles Discovered
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-[#E7E2D8]">
            <div
              className="h-full rounded-full bg-[#854D0E] transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <div className="mt-1.5 flex justify-end">
            <span className="text-xs font-medium text-[#78350F]">{progress}% Complete</span>
          </div>
        </div>

        {/* Interactive Courtroom Diagram Viewport */}
        <div className="relative overflow-hidden rounded-2xl border border-[#E7E2D8] bg-white shadow-md">
          <div className="relative w-full select-none">
            <img
              src={courtroom}
              alt="Interactive Indian courtroom layout"
              className="block h-auto w-full object-cover"
            />

            {/* Interactive Hotspots */}
            <CourtroomHotspot
              position="left-[46%] top-[30%] h-[16%] w-[8%]"
              label="Presiding Judge"
              onClick={() => handleExplore('judge')}
            />
            <CourtroomHotspot
              position="left-[30%] top-[36%] h-[14%] w-[6%]"
              label="Bench Clerk / Reader"
              onClick={() => handleExplore('clerk')}
            />
            <CourtroomHotspot
              position="left-[65%] top-[36%] h-[14%] w-[6%]"
              label="Stenographer / Court Typist"
              onClick={() => handleExplore('stenographer')}
            />
            <CourtroomHotspot
              position="left-[27%] top-[57%] h-[16%] w-[6%]"
              label="Public Prosecutor"
              onClick={() => handleExplore('prosecutor')}
            />
            <CourtroomHotspot
              position="left-[54%] top-[57%] h-[16%] w-[6%]"
              label="Defence Counsel"
              onClick={() => handleExplore('defence')}
            />
            <CourtroomHotspot
              position="left-[39%] top-[57%] h-[16%] w-[6%]"
              label="Legal Intern / Junior"
              onClick={() => handleExplore('junior')}
            />
            <CourtroomHotspot
              position="left-[66%] top-[57%] h-[16%] w-[6%]"
              label="Legal Intern / Junior"
              onClick={() => handleExplore('junior')}
            />
            <CourtroomHotspot
              position="left-[83%] top-[40%] h-[15%] w-[6%]"
              label="Accused"
              onClick={() => handleExplore('accused')}
            />
            <CourtroomHotspot
              position="left-[13%] top-[40%] h-[15%] w-[6%]"
              label="Witness"
              onClick={() => handleExplore('witness')}
            />
            <CourtroomHotspot
              position="left-[10%] top-[62%] h-[13%] w-[14%]"
              label="Complainant / Victim"
              onClick={() => handleExplore('complainant')}
            />
            <CourtroomHotspot
              position="left-[77%] top-[70%] h-[15%] w-[6%]"
              label="Investigating Officer"
              onClick={() => handleExplore('investigatingOfficer')}
            />
            <CourtroomHotspot
              position="left-[85%] top-[70%] h-[15%] w-[11%]"
              label="Police Escort Team"
              onClick={() => handleExplore('policeEscort')}
            />
            <CourtroomHotspot
              position="left-[92%] top-[48%] h-[18%] w-[6%]"
              label="Court Security"
              onClick={() => handleExplore('courtSecurity')}
            />
            <CourtroomHotspot
              position="left-[17%] top-[77%] h-[15%] w-[6%]"
              label="Court Reporter / Journalist"
              onClick={() => handleExplore('courtReporter')}
            />
            <CourtroomHotspot
              position="left-[30%] top-[77%] h-[15%] w-[39%]"
              label="Public Gallery"
              onClick={() => handleExplore('publicGallery')}
            />
            <CourtroomHotspot
              position="left-[37%] top-[44%] h-[12%] w-[26%]"
              label="Judge's Bench / Dais"
              onClick={() => handleExplore('judgeBench')}
            />
            <CourtroomHotspot
              position="left-[80%] top-[49%] h-[10%] w-[12%]"
              label="Accused Dock / Kathehra"
              onClick={() => handleExplore('accusedDock')}
            />
            <CourtroomHotspot
              position="left-[10%] top-[49%] h-[10%] w-[13%]"
              label="Witness Box / Enclosure"
              onClick={() => handleExplore('witnessBlock')}
            />
            <CourtroomHotspot
              position="left-[4%] top-[54%] h-[14%] w-[6%]"
              label="Bailiff / Chobdar"
              onClick={() => handleExplore('bailiff')}
            />
          </div>
        </div>

        {/* Selected Role Modal / Panel */}
        <InfoPanel
          role={selectedRole ? courtroomData[selectedRole]?.[language] : null}
          onClose={() => setSelectedRole(null)}
        />

        {/* Completion Modal */}
        {showCompletion && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
            <div className="w-full max-w-md rounded-2xl border border-[#E7E2D8] bg-[#FFFDF9] p-7 text-center shadow-2xl transition-all">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#FEF3C7] text-3xl">
                🏆
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                Exploration Complete
              </span>

              <h3 className="mt-1 font-serif text-2xl font-extrabold text-[#1E293B]">
                Courtroom Mastered!
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#525252]">
                You have explored all the roles and key locations in the courtroom. Ready to test your knowledge with a brief quiz?
              </p>

              <div className="mt-6 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setShowCompletion(false)
                    setCompletionDismissed(true)
                    setShowQuiz(true)
                  }}
                  className="rounded-xl bg-[#D97706] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#B45309]"
                >
                  Start Quiz Now
                </button>

                <button
                  onClick={() => {
                    setShowCompletion(false)
                    setCompletionDismissed(true)
                  }}
                  className="rounded-xl border border-[#E7E2D8] bg-white px-5 py-2.5 text-sm font-medium text-[#64748B] transition hover:bg-[#F3EFE6]"
                >
                  Continue Reviewing
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Quiz Modal */}
        {showQuiz && (
          <QuizModal
            onClose={() => {
              setShowQuiz(false)
              setCompletionDismissed(true)
            }}
          />
        )}
      </div>
    </div>
  )
}

export default NyaayDarshan