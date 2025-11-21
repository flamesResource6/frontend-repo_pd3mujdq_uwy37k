export default function Header() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur border-b border-white/10 bg-slate-900/60">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/flame-icon.svg" className="w-8 h-8" alt="logo" />
          <div>
            <h1 className="text-white font-semibold leading-tight">Study Hub</h1>
            <p className="text-xs text-blue-200/70">Grades 5 to 9</p>
          </div>
        </div>
        <nav className="text-sm text-blue-200/80 hidden sm:flex gap-6">
          <a href="#learn" className="hover:text-white">Learn</a>
          <a href="#practice" className="hover:text-white">Practice</a>
          <a href="/test" className="hover:text-white">System Test</a>
        </nav>
      </div>
    </header>
  )
}
