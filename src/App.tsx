import './App.css'

import { useEffect, useState } from 'react'

function App() {
  const [flag, setFlag] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [displayedCount, setDisplayedCount] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    fetch('https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/636172')
      .then((res) => res.text())
      .then((data) => {
        setFlag(data)
        setLoading(false)
      })
      .catch(() => {
        setFlag('Error loading flag')
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    // Typewriter effect
    if (!loading && flag && displayedCount < flag.length) {
      const timeout = setTimeout(() => {
        setDisplayedCount((prev) => prev + 1)
      }, 500)
      return () => clearTimeout(timeout)
    }
  }, [loading, flag, displayedCount])

  useEffect(() => {
    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 400)
    return () => clearInterval(cursorInterval)
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!flag) {
    return <div>No flag loaded.</div>
  }

  return (
    <div style={{ fontFamily: 'monospace', fontSize: '1.5rem', whiteSpace: 'pre' }}>
      {flag.slice(0, displayedCount)}
      {displayedCount < flag.length && showCursor ? '_' : ''}
    </div>
  )
}

// Bonus: Add as a comment the script you used to to get the URL in step 2
// const refs = document.querySelectorAll(
//   'section[data-id^="92"] article[data-class$="45"] div[data-tag*="78"] b.ref'
// );

// const result = Array.from(refs)
//   .map(el => el.getAttribute("value"))
//   .join("");

export default App
