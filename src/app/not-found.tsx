import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-16">
      <div className="text-center">
        <h1 className="mb-2 text-6xl font-bold text-alberta-navy">404</h1>
        <p className="mb-6 text-lg text-alberta-med-gray">Page not found</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-alberta-blue px-6 py-3 font-semibold text-white hover:bg-alberta-dark-blue"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
