export default function Briefcase({ number, isOpen, content, isWinner, isPick, onClick, disabled }) {
  return (
    <div
      className={`briefcase-wrap ${isOpen ? 'open' : ''} ${isWinner ? 'winner' : ''} ${isPick ? 'pick' : ''} ${disabled ? 'disabled' : ''}`}
      onClick={!disabled ? onClick : undefined}
    >
      <div className="briefcase-inner">
        <div className="briefcase-front">
          <svg viewBox="0 0 80 72" className="case-svg" aria-hidden="false">
            <rect x="2" y="18" width="76" height="50" rx="6" ry="6" className="case-body" />
            <rect x="24" y="10" width="32" height="14" rx="4" ry="4" className="case-handle" />
            <text
              x="40"
              y="50"
              textAnchor="middle"
              fontSize="22"
              fontWeight="900"
              fill="#c9a84c"
              fontFamily="system-ui, sans-serif"
            >{number}</text>
          </svg>
        </div>
        <div className="briefcase-back">
          <span className="case-content">{content}</span>
        </div>
      </div>
    </div>
  );
}
