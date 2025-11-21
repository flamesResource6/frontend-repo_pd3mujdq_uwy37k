import { useEffect, useState } from 'react'

export default function LessonList({ grade, subject, onSelect }) {
  const [lessons, setLessons] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const url = new URL(`${baseUrl}/lessons`)
        if (grade) url.searchParams.set('grade', grade)
        if (subject) url.searchParams.set('subject', subject)
        const res = await fetch(url)
        const data = await res.json()
        setLessons(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [grade, subject])

  if (loading) return <p className="text-blue-200/80">Loading lessons...</p>
  if (!lessons.length) return <p className="text-blue-200/80">No lessons yet. Try another subject or grade.</p>

  return (
    <ul className="space-y-3">
      {lessons.map(l => (
        <li key={l.id} className="bg-slate-800/50 border border-white/10 rounded-xl p-4 hover:bg-slate-800 cursor-pointer" onClick={() => onSelect?.(l)}>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-white font-semibold">{l.title}</h4>
              <p className="text-blue-200/70 text-sm">Grade {l.grade} • {l.subject}</p>
            </div>
            <span className="text-xs text-blue-200/60">Open</span>
          </div>
        </li>
      ))}
    </ul>
  )
}
