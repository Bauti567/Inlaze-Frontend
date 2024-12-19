interface RatioProps {
  voteAverage: number;
  size: number;
}

const Ratio = ({ voteAverage, size }: RatioProps) => {
  const validVoteAverage =
    !isNaN(voteAverage) && voteAverage !== null ? voteAverage : 0;
  const rating = Math.round((validVoteAverage / 10) * 100);

  let borderColor = '#4CAF50';
  if (rating >= 50 && rating < 75) {
    borderColor = '#FFEB3B';
  } else if (rating < 50) {
    borderColor = '#F44336';
  }
  const strokeDashoffset = 340 - 340 * (rating / 100);
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        position: 'relative',
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="60"
          cy="60"
          r="54"
          stroke="#e6e6e6"
          strokeWidth="12"
          fill="none"
        />
        <circle
          cx="60"
          cy="60"
          r="54"
          stroke={borderColor}
          strokeWidth="12"
          fill="none"
          strokeDasharray="340"
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 60 60)"
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#fff',
          fontSize: '14px',
          fontWeight: 'bold',
        }}
      >
        {`${rating}%`}
      </div>
    </div>
  );
};

export default Ratio;
