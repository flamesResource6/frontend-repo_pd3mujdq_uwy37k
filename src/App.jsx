import { useState } from 'react'
import Header from './components/Header'
import GradeSelector from './components/GradeSelector'
import LessonList from './components/LessonList'
import LessonViewer from './components/LessonViewer'

function App() {
  const [selection, setSelection] = useState({ grade: 7, subject: 'Math' })
  const [activeLesson, setActiveLesson] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-blue-100">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-10">
        {!activeLesson ? (
          <div className="grid lg:grid-cols-3 gap-8">
            <section className="lg:col-span-1 bg-slate-800/50 border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Start Learning</h2>
              <GradeSelector onChange={setSelection} />
              <p className="text-sm text-blue-200/70 mt-3">Pick a grade and subject to see lessons.</p>
            </section>

            <section id="learn" className="lg:col-span-2 bg-slate-800/50 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Lessons</h3>
              <LessonList grade={selection.grade} subject={selection.subject} onSelect={setActiveLesson} />
            </section>
          </div>
        ) : (
          <LessonViewer lesson={activeLesson} onBack={() => setActiveLesson(null)} />
        )}

        <footer className="mt-12 text-center text-sm text-blue-300/60">
          Built for easy learning • Practice and track progress
        </footer>
      </main>
    </div>
  )
}

export default App
