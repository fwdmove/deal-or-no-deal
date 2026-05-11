import { useState, useEffect } from 'react';
import Briefcase from './Briefcase.jsx';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function drawPool(good, bad) {
  const g = shuffle([...good]).slice(0, 4);
  const b = shuffle([...bad]).slice(0, 2);
  return shuffle([...g, ...b]);
}

export default function RoundScreen({ topic, round, roundIndex, totalRounds, onRoundDone }) {
  const [caseOrder] = useState(() => drawPool(round.good, round.bad));
  const [firstPick, setFirstPick] = useState(null);
  const [swapPick, setSwapPick] = useState(null);
  const [phase, setPhase] = useState('picking'); // picking | decide | swapping | done

  const finalPick = swapPick !== null ? swapPick : firstPick;

  function handleCaseClick(idx) {
    if (phase === 'picking') {
      setFirstPick(idx);
      setPhase('decide');
    } else if (phase === 'swapping' && idx !== firstPick) {
      setSwapPick(idx);
      setPhase('done');
    }
  }

  function handleKeep() {
    setPhase('done');
  }

  function handleSwap() {
    setPhase('swapping');
  }

  function handleNext() {
    onRoundDone(caseOrder[finalPick], caseOrder, finalPick);
  }

  const isPickable = (idx) => {
    if (phase === 'picking') return true;
    if (phase === 'swapping') return idx !== firstPick;
    return false;
  };

  const isOpen = (idx) => {
    if (idx === firstPick) return true;
    if (idx === swapPick) return true;
    return false;
  };

  return (
    <div className="screen round-screen" style={{ '--accent': topic.accent }}>
      <div className="round-header">
        <span className="round-pill">Round {roundIndex + 1} of {totalRounds}</span>
        <h2 className="round-category">Pick your <strong>{round.category}</strong></h2>
        <p className="round-hint">
          {phase === 'picking' && 'Choose a briefcase to reveal what\'s inside.'}
          {phase === 'decide' && 'You revealed your pick. Keep it or swap?'}
          {phase === 'swapping' && 'Pick any other briefcase to swap.'}
          {phase === 'done' && `You're going with: ${caseOrder[finalPick]}!`}
        </p>
      </div>

      <div className="cases-grid">
        {caseOrder.map((item, idx) => (
          <Briefcase
            key={idx}
            number={idx + 1}
            isOpen={isOpen(idx)}
            content={item}
            isWinner={phase === 'done' && idx === finalPick}
            onClick={() => handleCaseClick(idx)}
            disabled={!isPickable(idx)}
          />
        ))}
      </div>

      <div className="round-actions">
        {phase === 'decide' && (
          <>
            <button className="btn btn-primary" onClick={handleKeep}>Keep it ✓</button>
            <button className="btn btn-secondary" onClick={handleSwap}>Swap it ↔</button>
          </>
        )}
        {phase === 'done' && (
          <button className="btn btn-primary" onClick={handleNext}>
            {roundIndex + 1 < totalRounds ? 'Next Round →' : 'See My Results →'}
          </button>
        )}
      </div>
    </div>
  );
}
