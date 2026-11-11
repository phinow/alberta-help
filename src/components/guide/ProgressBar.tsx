interface ProgressBarProps {
  progress: number;
  stepNumber: number;
}

export function ProgressBar({ progress, stepNumber }: ProgressBarProps) {
  return (
    <div className="mb-6">
      <div className="mb-1 flex items-center justify-between text-sm text-alberta-med-gray">
        <span>Step {stepNumber}</span>
        <span>{progress}% complete</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-alberta-blue transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
