import { useState, useEffect } from 'react'
import './App.css'
import verbs from './data/verbs.json'

function App() {
  const [mode, setMode] = useState('practice') // 'practice' vagy 'study'
  const [questionType, setQuestionType] = useState('hungarian')
  const [answerType, setAnswerType] = useState('prateritum')
  const [currentVerb, setCurrentVerb] = useState(null)
  const [userAnswer, setUserAnswer] = useState('')
  const [feedback, setFeedback] = useState('')
  const [score, setScore] = useState({ correct: 0, total: 0 })

  const typeLabels = {
    hungarian: 'Magyar jelentés',
    infinitiv: '1. alak (Infinitiv)',
    prateritum: '2. alak (Präteritum)',
    perfekt: '3. alak (Perfekt - segédige + Partizip)'
  }

  // Levenshtein distance - karakterek közötti különbség számítása
  const getEditDistance = (str1, str2) => {
    const s1 = str1.toLowerCase().trim()
    const s2 = str2.toLowerCase().trim()
    const len1 = s1.length
    const len2 = s2.length
    const matrix = []

    if (len1 === 0) return len2
    if (len2 === 0) return len1

    for (let i = 0; i <= len2; i++) {
      matrix[i] = [i]
    }
    for (let j = 0; j <= len1; j++) {
      matrix[0][j] = j
    }

    for (let i = 1; i <= len2; i++) {
      for (let j = 1; j <= len1; j++) {
        if (s2.charAt(i - 1) === s1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1]
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          )
        }
      }
    }
    return matrix[len2][len1]
  }

  useEffect(() => {
    loadNewVerb()
  }, [])

  useEffect(() => {
    if (mode === 'practice') {
      loadNewVerb()
    }
  }, [questionType, answerType])

  const handleModeChange = (newMode) => {
    setMode(newMode)
    setFeedback('')
    setUserAnswer('')
  }

  const loadNewVerb = () => {
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)]
    setCurrentVerb(randomVerb)
    setUserAnswer('')
    setFeedback('')
  }

  const checkAnswer = () => {
    if (!userAnswer.trim()) return

    const correctAnswer = currentVerb[answerType].toLowerCase().trim()
    const userAnswerNormalized = userAnswer.toLowerCase().trim()
    const distance = getEditDistance(userAnswerNormalized, correctAnswer)

    // Tűréshatár: max 2 karakter eltérés rövid szavaknál (< 6 betű), különben max 2
    const maxDistance = correctAnswer.length <= 5 ? 1 : 2

    if (userAnswerNormalized === correctAnswer) {
      setFeedback('✅ Helyes!')
      setScore({ correct: score.correct + 1, total: score.total + 1 })
    } else if (distance <= maxDistance) {
      setFeedback(`✅ Majdnem! (${userAnswer} → ${currentVerb[answerType]}) Elfogadom!`)
      setScore({ correct: score.correct + 1, total: score.total + 1 })
    } else {
      setFeedback(`❌ Helytelen! A helyes válasz: ${currentVerb[answerType]}`)
      setScore({ ...score, total: score.total + 1 })
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      checkAnswer()
    }
  }

  return (
    <div className="app">
      <h1>🥨 Német Igék Memorizálása 🚀</h1>

      <div className="mode-selector">
        <button 
          className={mode === 'practice' ? 'active' : ''}
          onClick={() => handleModeChange('practice')}
        >
          ✍️ Gyakorlás
        </button>
        <button 
          className={mode === 'study' ? 'active' : ''}
          onClick={() => handleModeChange('study')}
        >
          📖 Tanulás
        </button>
      </div>

      {mode === 'practice' && (
        <div className="stats">
          <p>Helyes válaszok: {score.correct} / {score.total}</p>
          {score.total > 0 && (
            <p>Pontosság: {Math.round((score.correct / score.total) * 100)}%</p>
          )}
        </div>
      )}

      {mode === 'practice' && (
        <div className="settings">
          <div className="setting-group">
            <label>Mit mutatok?</label>
            <select 
              value={questionType} 
              onChange={(e) => setQuestionType(e.target.value)}
            >
              <option value="hungarian">Magyar jelentés</option>
              <option value="infinitiv">1. alak (Infinitiv)</option>
              <option value="prateritum">2. alak (Präteritum)</option>
              <option value="perfekt">3. alak (Perfekt)</option>
            </select>
          </div>

          <div className="setting-group">
            <label>Mit kérdezek?</label>
            <select 
              value={answerType} 
              onChange={(e) => setAnswerType(e.target.value)}
            >
              <option value="hungarian">Magyar jelentés</option>
              <option value="infinitiv">1. alak (Infinitiv)</option>
              <option value="prateritum">2. alak (Präteritum)</option>
              <option value="perfekt">3. alak (Perfekt)</option>
            </select>
          </div>
        </div>
      )}

      {mode === 'study' && currentVerb && (
        <div className="card study-card">
          <h2>📚 Tanulj belőle!</h2>
          <div className="study-verb-details">
            <div className="study-verb-form">
              <span className="form-label">🇭🇺 Magyar:</span>
              <span className="form-value">{currentVerb.hungarian}</span>
            </div>
            <div className="study-verb-form">
              <span className="form-label">1️⃣ Infinitiv:</span>
              <span className="form-value highlight">{currentVerb.infinitiv}</span>
            </div>
            <div className="study-verb-form">
              <span className="form-label">2️⃣ Präteritum:</span>
              <span className="form-value highlight">{currentVerb.prateritum}</span>
            </div>
            <div className="study-verb-form">
              <span className="form-label">3️⃣ Perfekt:</span>
              <span className="form-value highlight">{currentVerb.perfekt}</span>
            </div>
          </div>
          <button className="next-btn" onClick={loadNewVerb}>
            Következő ige →
          </button>
        </div>
      )}

      {mode === 'practice' && currentVerb && questionType !== answerType && (
        <div className="card">
          <div className="question">
            <h2>{typeLabels[questionType]}</h2>
            <div className="verb-display">{currentVerb[questionType]}</div>
          </div>

          <div className="answer-section">
            <h3>{typeLabels[answerType]}</h3>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Írd be a választ..."
              autoFocus
              disabled={feedback !== ''}
            />
            <button onClick={checkAnswer} disabled={feedback !== ''}>
              Ellenőrzés
            </button>
          </div>

          {feedback && (
            <div className={`feedback ${feedback.includes('✅') ? 'correct' : 'incorrect'}`}>
              {feedback}
            </div>
          )}

          {feedback && currentVerb && (
            <div className="verb-details">
              <h3>📚 Összes alak:</h3>
              <div className="verb-forms">
                <div className="verb-form">
                  <span className="form-label">Magyar:</span>
                  <span className="form-value">{currentVerb.hungarian}</span>
                </div>
                <div className="verb-form">
                  <span className="form-label">Infinitiv:</span>
                  <span className="form-value">{currentVerb.infinitiv}</span>
                </div>
                <div className="verb-form">
                  <span className="form-label">Präteritum:</span>
                  <span className="form-value">{currentVerb.prateritum}</span>
                </div>
                <div className="verb-form">
                  <span className="form-label">Perfekt:</span>
                  <span className="form-value">{currentVerb.perfekt}</span>
                </div>
              </div>
            </div>
          )}

          {feedback && (
            <button className="next-btn" onClick={loadNewVerb}>
              Következő ige →
            </button>
          )}
        </div>
      )}

      {mode === 'practice' && questionType === answerType && (
        <div className="error-message">
          ⚠️ A kérdés és a válasz típusa nem lehet ugyanaz!
        </div>
      )}
    </div>
  )
}

export default App
