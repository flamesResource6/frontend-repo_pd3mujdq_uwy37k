import { useEffect, useState } from 'react'

export default function LessonViewer({ lesson, onBack }) {
  const [quiz, setQuiz] = useState([])

  useEffect(() => {
    const loadQuiz = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const url = new URL(`${baseUrl}/quizzes`)
        url.searchParams.set('lesson_id', lesson.id)
        const res = await fetch(url)
        const data = await res.json()
        setQuiz(data)
      } catch (e) {}
    }
    if (lesson?.id) loadQuiz()
  }, [lesson])

  return (
    <div className="space-y-6">
      <button onClick={onBack} className="text-blue-300 hover:text-white text-sm">← Back to lessons</button>
      <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-white mb-2">{lesson.title}</h2>
        <p className="text-blue-200/80 mb-4">Grade {lesson.grade} • {lesson.subject}</p>
        <article className="prose prose-invert max-w-none">
          <p className="text-blue-100/90 whitespace-pre-wrap">{lesson.content}</p>
        </article>
        {lesson.video_url && (
          <div className="mt-4">
            <a href={lesson.video_url} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-white underline">Watch video</a>
          </div>
        )}
      </div>

      <div id="practice" className="bg-slate-800/60 border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Quick Quiz</h3>
        {quiz.length === 0 ? (
          <p className="text-blue-200/80">No quiz questions yet.</p>
        ) : (
          <ul className="space-y-4">
            {quiz.map((q, idx) => (
              <li key={q.id} className="bg-slate-900/40 rounded-xl p-4 border border-white/10">
                <p className="text-white mb-2">{idx+1}. {q.question}</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {q.options.map((opt, i) => (
                    <label key={i} className="bg-slate-900/60 hover:bg-slate-900 rounded-lg px-3 py-2 text-blue-200/90 cursor-pointer border border-white/10">
                      <input type="radio" name={`q-${q.id}`} className="mr-2" />
                      {opt}
                    </label>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
