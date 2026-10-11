
import { useState } from 'react'

const questions = [
  {
    type: 'mcq',
    question: 'Who presides over court proceedings?',
    options: ['Public Prosecutor', 'Presiding Judge', 'Bench Clerk', 'Witness'],
    answer: 'Presiding Judge',
  },
  {
    type: 'tf',
    question: 'A person is automatically guilty just because they have been accused.',
    options: ['True', 'False'],
    answer: 'False',
  },
  {
    type: 'mcq',
    question: 'Who represents the State in criminal proceedings?',
    options: ['Defence Counsel', 'Court Reporter', 'Public Prosecutor', 'Bailiff'],
    answer: 'Public Prosecutor',
  },
  {
    type: 'mcq',
    question: 'Where does a witness give evidence when directed by the court?',
    options: ['Public Gallery', 'Judge’s Bench', 'Witness Box', 'Accused Dock'],
    answer: 'Witness Box',
  },
  {
    type: 'tf',
    question: 'The Defence Counsel represents the legal interests of the accused.',
    options: ['True', 'False'],
    answer: 'True',
  },
  {
    type: 'mcq',
    question: 'Who assists the Judge by organizing case files and calling out cases?',
    options: ['Bench Clerk / Reader', 'Investigating Officer', 'Witness', 'Journalist'],
    answer: 'Bench Clerk / Reader',
  },
]

function QuizModal({ onClose }) {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({})
  const [finished, setFinished] = useState(false)

  const question = questions[current]
  const score = questions.filter(
    (q, index) => answers[index] === q.answer
  ).length

  function restartQuiz() {
    setCurrent(0)
    setAnswers({})
    setFinished(false)
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-xl rounded-2xl bg-[#FFFDF7] p-6 shadow-2xl sm:p-8">

        {!finished ? (
          <>
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-[#B89B5E]">
                  NYAAYDARSHAN · COURTROOM QUIZ
                </p>
                <h2 className="mt-2 font-serif text-2xl font-bold text-[#242424]">
                  Test Your Knowledge
                </h2>
              </div>

              <button
                onClick={onClose}
                aria-label="Close quiz"
                className="rounded-full px-3 py-1 text-xl text-[#666] hover:bg-[#F1EBDD]"
              >
                ×
              </button>
            </div>

            <div className="mb-6">
              <div className="mb-2 flex justify-between text-sm text-[#666]">
                <span>Question {current + 1} of {questions.length}</span>
                <span>{Math.round(((current + 1) / questions.length) * 100)}%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-[#EAE3D5]">
                <div
                  className="h-full rounded-full bg-[#F4C542] transition-all"
                  style={{
                    width: `${((current + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            <span className="rounded-full bg-[#F7F0D8] px-3 py-1 text-xs font-semibold text-[#856819]">
              {question.type === 'mcq' ? 'MULTIPLE CHOICE' : 'TRUE OR FALSE'}
            </span>

            <h3 className="my-5 text-lg font-semibold leading-7 text-[#242424]">
              {question.question}
            </h3>

            <div className="space-y-3">
              {question.options.map((option) => {
                const selected = answers[current] === option

                return (
                  <button
                    key={option}
                    onClick={() =>
                      setAnswers((previous) => ({
                        ...previous,
                        [current]: option,
                      }))
                    }
                    className={`w-full rounded-xl border p-4 text-left transition ${
                      selected
                        ? 'border-[#D4A72C] bg-[#FFF0A8] text-[#242424]'
                        : 'border-[#E5DDCE] bg-white text-[#444] hover:border-[#D4A72C] hover:bg-[#FFF9E5]'
                    }`}
                  >
                    {option}
                  </button>
                )
              })}
            </div>

            <div className="mt-7 flex justify-end">
              <button
                disabled={answers[current] === undefined}
                onClick={() => {
                  if (current === questions.length - 1) {
                    setFinished(true)
                  } else {
                    setCurrent((previous) => previous + 1)
                  }
                }}
                className="rounded-xl bg-[#B89B5E] px-6 py-3 font-semibold text-white transition hover:bg-[#9E8248] disabled:cursor-not-allowed disabled:opacity-40"
              >
                {current === questions.length - 1 ? 'See My Score' : 'Next Question'}
              </button>
            </div>
          </>
        ) : (
          <div className="py-5 text-center">
            <div className="mb-4 text-5xl">
              {score >= 5 ? '🏆' : '📚'}
            </div>

            <p className="text-sm font-semibold tracking-wide text-[#B89B5E]">
              QUIZ COMPLETED
            </p>

            <h2 className="mt-2 font-serif text-3xl font-bold text-[#242424]">
              {score >= 5 ? 'Excellent Work!' : 'Keep Learning!'}
            </h2>

            <p className="mt-4 text-[#555]">
              You scored
            </p>

            <p className="my-2 text-5xl font-bold text-[#B89B5E]">
              {score}/{questions.length}
            </p>

            <p className="mb-7 text-sm text-[#666]">
              {score === questions.length
                ? 'Perfect score! You know your courtroom roles well.'
                : 'Review the courtroom roles and try again to improve your score.'}
            </p>

            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <button
                onClick={restartQuiz}
                className="rounded-xl border border-[#D8CCB5] px-5 py-3 font-semibold text-[#444] hover:bg-[#F1EBDD]"
              >
                Try Again
              </button>

              <button
                onClick={onClose}
                className="rounded-xl bg-[#B89B5E] px-5 py-3 font-semibold text-white hover:bg-[#9E8248]"
              >
                Return to Courtroom
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default QuizModal
