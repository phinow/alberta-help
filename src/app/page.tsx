import Link from 'next/link';
import { Accordion } from '@/components/ui/Accordion';
import { URLS, PHONE_NUMBERS } from '@/lib/constants';

const entryCards = [
  {
    title: 'Sign In to Alberta.ca',
    description: 'Step-by-step guide to sign in or create your Alberta.ca account',
    icon: '🔑',
    href: '/guide/sign-in-alberta',
    color: 'bg-blue-50 border-alberta-blue',
  },
  {
    title: 'Access MyHealth Records',
    description: 'Connect to your health records portal to view immunizations, medications, and lab results',
    icon: '🏥',
    href: '/guide/access-myhealth',
    color: 'bg-green-50 border-alberta-green',
  },
  {
    title: 'Access MyChart',
    description: 'Open your Connect Care patient portal for AHS health information',
    icon: '📋',
    href: '/guide/access-mychart',
    color: 'bg-purple-50 border-purple-400',
  },
  {
    title: 'Troubleshoot an Issue',
    description: 'Fix sign-in errors, lockouts, verification problems, and more',
    icon: '🔧',
    href: '/troubleshoot',
    color: 'bg-amber-50 border-alberta-gold',
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-alberta-navy to-alberta-dark-blue px-4 py-16 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Alberta.ca Sign-In Helper</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            Your interactive guide to signing in and resolving account issues with Alberta.ca, MyHealth Records, and MyChart.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
            <span>Alberta.ca Account</span>
            <span className="hidden md:inline">&middot;</span>
            <span>MyHealth Records</span>
            <span className="hidden md:inline">&middot;</span>
            <span>MyChart (Connect Care)</span>
          </div>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-alberta-navy">What do you need help with?</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {entryCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className={`group rounded-xl border-2 p-6 transition-all hover:shadow-lg ${card.color}`}
              >
                <div className="mb-3 text-4xl">{card.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-alberta-navy group-hover:text-alberta-blue">{card.title}</h3>
                <p className="text-sm text-alberta-med-gray">{card.description}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-alberta-blue">
                  Get started
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-alberta-navy">Quick Help</h2>
          <div className="space-y-3">
            <Accordion title="I'm locked out of my account">
              Your account locks after 5 incorrect password attempts within 30 minutes. It automatically unlocks after 15 minutes, or you can{' '}
              <a href={URLS.RESET_PASSWORD} target="_blank" rel="noopener noreferrer" className="font-medium text-alberta-blue underline">reset your password</a>{' '}
              to unlock immediately. <Link href="/troubleshoot/troubleshoot-lockout" className="font-medium text-alberta-blue underline">Full guide</Link>
            </Accordion>
            <Accordion title="I forgot my password">
              Visit the{' '}
              <a href={URLS.RESET_PASSWORD} target="_blank" rel="noopener noreferrer" className="font-medium text-alberta-blue underline">password reset page</a>{' '}
              and enter your email address. A reset link will be sent to your inbox. Check your spam folder if you don&apos;t see it.{' '}
              <Link href="/troubleshoot/troubleshoot-password" className="font-medium text-alberta-blue underline">Full guide</Link>
            </Accordion>
            <Accordion title="I need to verify my identity">
              To upgrade from a Basic to Verified account, you need a valid Alberta driver&apos;s licence or ID card. A verification code is sent by text (instant, if phone is registered at a Registry office) or mail (up to 10 business days).{' '}
              <Link href="/troubleshoot/troubleshoot-account-type" className="font-medium text-alberta-blue underline">Full guide</Link>
            </Accordion>
            <Accordion title="What's the difference between Basic and Verified?">
              Basic accounts only need a name and email, and provide limited service access. Verified accounts require an Alberta ID and grant full access to services like MyHealth Records, MyChart, Student Aid, and more.{' '}
              <Link href="/troubleshoot/troubleshoot-account-type" className="font-medium text-alberta-blue underline">Full guide</Link>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto max-w-3xl rounded-xl bg-alberta-light-blue p-8 text-center">
          <h2 className="mb-2 text-xl font-bold text-alberta-navy">Still need help?</h2>
          <p className="mb-4 text-alberta-med-gray">Contact Alberta.ca Account Support directly.</p>
          <a
            href={`tel:${PHONE_NUMBERS.ALBERTA_ACCOUNT.phone.replace(/[^0-9]/g, '')}`}
            className="inline-flex items-center gap-2 rounded-lg bg-alberta-blue px-6 py-3 font-semibold text-white hover:bg-alberta-dark-blue"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call {PHONE_NUMBERS.ALBERTA_ACCOUNT.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
