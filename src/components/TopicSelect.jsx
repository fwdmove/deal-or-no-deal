export default function TopicSelect({ topics, onSelect }) {
  return (
    <div className="screen topic-screen">
      <h1 className="game-title">Deal or No Deal</h1>
      <p className="game-subtitle">Pick a topic to build your perfect collection.</p>
      <div className="topic-grid">
        {topics.map((t) => (
          <button
            key={t.id}
            className="topic-card"
            style={{ '--accent': t.accent }}
            onClick={() => onSelect(t)}
          >
            <span className="topic-emoji">{t.emoji}</span>
            <span className="topic-name">{t.name}</span>
            <span className="topic-rounds">{t.rounds.length} rounds</span>
          </button>
        ))}
      </div>
    </div>
  );
}
