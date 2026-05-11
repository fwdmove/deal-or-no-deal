import { useState } from 'react';
import { topics } from './data/topics.js';
import TopicSelect from './components/TopicSelect.jsx';
import RoundScreen from './components/RoundScreen.jsx';
import RevealScreen from './components/RevealScreen.jsx';
import FinalScreen from './components/FinalScreen.jsx';
import './App.css';

const initialState = {
  screen: 'topic',
  topic: null,
  roundIndex: 0,
  picks: [],
  lastCaseOrder: null,
  lastWinnerIdx: null,
};

export default function App() {
  const [state, setState] = useState(initialState);

  function selectTopic(topic) {
    setState({ ...initialState, screen: 'round', topic });
  }

  function handleRoundDone(pick, caseOrder, winnerIdx) {
    setState((s) => ({
      ...s,
      screen: 'reveal',
      picks: [...s.picks, pick],
      lastCaseOrder: caseOrder,
      lastWinnerIdx: winnerIdx,
    }));
  }

  function handleRevealNext() {
    setState((s) => {
      const nextRound = s.roundIndex + 1;
      if (nextRound >= s.topic.rounds.length) {
        return { ...s, screen: 'final' };
      }
      return { ...s, screen: 'round', roundIndex: nextRound };
    });
  }

  function handlePlayAgain() {
    setState({ ...initialState, screen: 'round', topic: state.topic, roundIndex: 0, picks: [] });
  }

  function handleChangeTopic() {
    setState(initialState);
  }

  const { screen, topic, roundIndex, picks, lastCaseOrder, lastWinnerIdx } = state;

  return (
    <div className="app">
      {screen === 'topic' && (
        <TopicSelect topics={topics} onSelect={selectTopic} />
      )}
      {screen === 'round' && topic && (
        <RoundScreen
          key={`${topic.id}-${roundIndex}`}
          topic={topic}
          round={topic.rounds[roundIndex]}
          roundIndex={roundIndex}
          totalRounds={topic.rounds.length}
          onRoundDone={handleRoundDone}
        />
      )}
      {screen === 'reveal' && topic && (
        <RevealScreen
          topic={topic}
          round={topic.rounds[roundIndex]}
          caseOrder={lastCaseOrder}
          winnerIdx={lastWinnerIdx}
          roundIndex={roundIndex}
          totalRounds={topic.rounds.length}
          onNext={handleRevealNext}
        />
      )}
      {screen === 'final' && topic && (
        <FinalScreen
          topic={topic}
          picks={picks}
          onPlayAgain={handlePlayAgain}
          onChangeTopic={handleChangeTopic}
        />
      )}
    </div>
  );
}
