import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [player1Score, setPlayer1Score] = useState(0)
  const [player2Score, setPlayer2Score] = useState(0)
  const [activePlayer, setActivePlayer] = useState(0)
  const [hand1, setHand1] = useState(0)
  const [hand2, setHand2] = useState(0)
  const [winnerMessage, setWinnerMessage] = useState('')
  const [isGameOver, setIsGameOver] = useState(false)

  const init = () => {
    setPlayer1Score(0)
    setPlayer2Score(0)
    setActivePlayer(0)
    setHand1(0)
    setHand2(0)
    setWinnerMessage('')
    setIsGameOver(false)
  }

  useEffect(() => {
    init()
  }, [])

  const play = () => {
    if (isGameOver) return

    const newHand1 = Math.floor(Math.random() * 6) + 1
    const newHand2 = Math.floor(Math.random() * 6) + 1

    setHand1(newHand1)
    setHand2(newHand2)

    if (newHand1 !== newHand2) {
      if (activePlayer === 0) {
        setPlayer1Score(prev => prev + newHand1)
      } else {
        // Need to update score first then check, but functional updates are async.
        // Better to calculate new score locally for comparison
        const newScore = player2Score + newHand2
        setPlayer2Score(newScore)

        if (player1Score < newScore) {
          // Player 2 wins immediately if they surpass player 1? 
          // Original logic:
          // if (player1Score<player2Score) { ... winner ... }
          // Wait, original logic checked THIS inside the else block of activePlayer===0?
          // Actually original logic was:
          // if (activePlayer === 0) { player1Score += hand1 }
          // else { player2Score += hand2; if (player1Score < player2Score) { ... winner ... } }

          // This implies Player 2 chases Player 1's score.
          setWinnerMessage('Player 2')
          setIsGameOver(true)
        }
      }
    } else {
      // OUT
      if (activePlayer === 0) {
        setActivePlayer(1)
      } else {
        // Game Over
        if (player1Score === player2Score) { // This comparison uses old state, but effectively valid since we just added and they likely matched? 
          // Wait, if hand1 == hand2, NO score is added. So scores are unchanged from previous turn.
          // So we compare current scores.
          if (player1Score === player2Score) {
            setWinnerMessage('MATCH DRAWS')
          } else {
            setWinnerMessage('Player 1')
          }
        } else {
          // If player1Score !== player2Score
          // Original logic:
          // if (player1Score===player2Score) { DRAW } else { Player 1 WINNER }
          // This logic seems to assume Player 1 set a target and Player 2 failed to chase it?
          // Yes.
          if (player1Score === player2Score) {
            setWinnerMessage('MATCH DRAWS')
          } else {
            setWinnerMessage('Player 1')
          }
        }
        setIsGameOver(true)
      }
    }
  }

  return (
    <div className="wrapper clearfix">
      <div className={`player-0-panel ${activePlayer === 0 && !isGameOver ? 'active' : ''} ${winnerMessage === 'Player 1' || winnerMessage === 'MATCH DRAWS' ? 'winner' : ''}`}>
        <div className="player-name" id="name-0">
          {winnerMessage === 'Player 1' ? 'WINNER' : winnerMessage === 'MATCH DRAWS' ? 'MATCH DRAWS' : 'Player 1'}
        </div>
        <img src={`/Fingure-${hand1}.png`} id="Player-0" alt="Player 1 Hand" />
        <div className="player-current-box">
          <div className="player-current-label">SCORE</div>
          <div className="player-current-score" id="current-0">{player1Score}</div>
        </div>
      </div>

      <div className={`player-1-panel ${activePlayer === 1 && !isGameOver ? 'active' : ''} ${winnerMessage === 'Player 2' || winnerMessage === 'MATCH DRAWS' ? 'winner' : ''}`}>
        <div className="player-name" id="name-1">
          {winnerMessage === 'Player 2' ? 'WINNER' : winnerMessage === 'MATCH DRAWS' ? 'MATCH DRAWS' : 'Player 2'}
        </div>
        <img src={`/Fingure-${hand2}.png`} id="Player-1" alt="Player 2 Hand" />
        <div className="player-current-box">
          <div className="player-current-label">SCORE</div>
          <div className="player-current-score" id="current-1">{player2Score}</div>
        </div>
      </div>

      <button className="btn-new" onClick={init}>
        <i className="ion-ios-plus-outline"></i>New game
      </button>
      <button className="btn-roll" onClick={play} disabled={isGameOver}>
        <i className="ion-ios-loop"></i>PLAY
      </button>
    </div>
  )
}

export default App
