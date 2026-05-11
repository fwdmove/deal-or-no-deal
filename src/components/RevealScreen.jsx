import Briefcase from './Briefcase.jsx';

export default function RevealScreen({ topic, round, caseOrder, winnerIdx, roundIndex, totalRounds, onNext }) {
  const missed = caseOrder.filter((_, i) => i !== winnerIdx);

  return (
    <div className="screen reveal-screen" style={{ '--accent': topic.accent }}>
      <div className="round-header">
        <span className="round-pill">Round {roundIndex + 1} of {totalRounds}</span>
        <h2 className="round-category">Here's what was in the other cases</h2>
        <p className="round-winner-line">
          Your pick: <strong className="accent-text">{caseOrder[winnerIdx]}</strong>
        </p>
      </div>

      <div className="cases-grid reveal-grid">
        {caseOrder.map((item, idx) => (
          <Briefcase
            key={idx}
            number={idx + 1}
            isOpen={true}
            content={item}
            isWinner={idx === winnerIdx}
            disabled={true}
          />
        ))}
      </div>

      <p className="missed-line">
        You missed: {missed.join(', ')}
      </p>

      <button className="btn btn-primary" onClick={onNext}>
        {roundIndex + 1 < totalRounds ? 'Next Round →' : 'See My Results →'}
      </button>
    </div>
  );
}
