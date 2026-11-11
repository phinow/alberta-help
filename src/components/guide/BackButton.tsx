'use client';

interface BackButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export function BackButton({ onClick, disabled }: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-alberta-blue hover:text-alberta-dark-blue disabled:text-gray-300"
    >
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      Back
    </button>
  );
}
