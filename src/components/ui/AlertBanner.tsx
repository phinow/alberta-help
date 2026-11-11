interface AlertBannerProps {
  type: 'info' | 'warning' | 'success' | 'error';
  children: React.ReactNode;
}

const styles = {
  info: 'border-alberta-blue bg-alberta-light-blue text-alberta-navy',
  warning: 'border-alberta-gold bg-amber-50 text-amber-900',
  success: 'border-alberta-green bg-green-50 text-green-900',
  error: 'border-alberta-red bg-red-50 text-red-900',
};

const icons = {
  info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  warning: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z',
  success: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  error: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
};

export function AlertBanner({ type, children }: AlertBannerProps) {
  return (
    <div className={`flex items-start gap-3 rounded-lg border-l-4 p-4 ${styles[type]}`}>
      <svg className="mt-0.5 h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icons[type]} />
      </svg>
      <div className="text-sm">{children}</div>
    </div>
  );
}
