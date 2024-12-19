import React from 'react';

interface PageButtonProps {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
}

function PageButton({ onClick, disabled, children }: PageButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 bg-[#F0B90B] rounded disabled:opacity-50"
    >
      {children}
    </button>
  );
}

export default PageButton;
