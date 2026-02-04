import { useState, useEffect } from 'react'
import './App.css'
import verbs from './data/verbs.json'

function App() {
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
    perfekt: '3. alak (Perfekt)'
  }

  useEffect(() => {
    loadNewVerb()
  }, [questionType, answerType])

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

    if (userAnswerNormalized === correctAnswer) {
      setFeedback('✅ Helyes!')
      setScore({ correct: score.correct + 1, total: score.total + 1 })
      setTimeout(() => {
        loadNewVerb()
      }, 1500)
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
      <h1>🇩🇪 Német Igék Memorizálása 🚀</h1>

      <div className="stats">
        <p>Helyes válaszok: {score.correct} / {score.total}</p>
        {score.total > 0 && (
          <p>Pontosság: {Math.round((score.correct / score.total) * 100)}%</p>
        )}
      </div>

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

      {currentVerb && questionType !== answerType && (
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

          {feedback && (
            <button className="next-btn" onClick={loadNewVerb}>
              Következő ige →
            </button>
          )}
        </div>
      )}

      {questionType === answerType && (
        <div className="error-message">
          ⚠️ A kérdés és a válasz típusa nem lehet ugyanaz!
        </div>
      )}
    </div>
  )
}

export default App
