import React from 'react';

interface CrossButtonProps {
  onClick: () => void;
}

const CrossButton: React.FC<CrossButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} style={styles.button}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={styles.icon}
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  );
};

const styles = {
  button: {
    background: 'none',
    border: 'none',
    padding: '8px',
    cursor: 'pointer',
    backgroundColor: '#A0A7C6',
    color: '#fff',
    borderRadius: '12px',
    marginTop: '9px'
  },
  icon: {
    width: '24px',
    height: '24px',
  },
};

export default CrossButton;