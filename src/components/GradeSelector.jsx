import { useState } from 'react'

const GRADES = [5,6,7,8,9]
const SUBJECTS = ['Math', 'Science', 'English', 'Social Studies']

export default function GradeSelector({ onChange }) {
  const [grade, setGrade] = useState(7)
  const [subject, setSubject] = useState('Math')

  const update = (g, s) => {
    onChange?.({ grade: g ?? grade, subject: s ?? subject })
  }

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm text-blue-200/80 mb-1">Select Grade</label>
        <select value={grade} onChange={e=>{const v=parseInt(e.target.value); setGrade(v); update(v, null)}} className="w-full bg-slate-800/70 border border-white/10 rounded-lg px-3 py-2 text-white">
          {GRADES.map(g => <option key={g} value={g}>Grade {g}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm text-blue-200/80 mb-1">Select Subject</label>
        <select value={subject} onChange={e=>{const v=e.target.value; setSubject(v); update(null, v)}} className="w-full bg-slate-800/70 border border-white/10 rounded-lg px-3 py-2 text-white">
          {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
    </div>
  )
}
