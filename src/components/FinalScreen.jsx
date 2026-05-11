export default function FinalScreen({ topic, picks, onPlayAgain, onChangeTopic }) {
  return (
    <div className="screen final-screen" style={{ '--accent': topic.accent }}>
      <div className="final-header">
        <span className="topic-emoji large">{topic.emoji}</span>
        <h2>Your {topic.name}</h2>
        <p className="final-subtitle">Here's what you ended up with.</p>
      </div>

      <div className="final-cards">
        {topic.rounds.map((round, i) => (
          <div key={i} className="final-card">
            <span className="final-card-label">{round.category}</span>
            <span className="final-card-pick">{picks[i]}</span>
          </div>
        ))}
      </div>

      <div className="final-actions">
        <button className="btn btn-primary" onClick={onPlayAgain}>Play Again</button>
        <button className="btn btn-secondary" onClick={onChangeTopic}>Try Another Topic</button>
      </div>
    </div>
  );
}
