import { PHONE_NUMBERS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-alberta-navy text-white">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 font-semibold">Support Contacts</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <span className="block text-gray-400">{PHONE_NUMBERS.ALBERTA_ACCOUNT.label}</span>
                <a href={`tel:${PHONE_NUMBERS.ALBERTA_ACCOUNT.phone.replace(/[^0-9]/g, '')}`} className="text-white hover:text-alberta-gold">
                  {PHONE_NUMBERS.ALBERTA_ACCOUNT.phone}
                </a>
              </li>
              <li>
                <span className="block text-gray-400">{PHONE_NUMBERS.MYCHART.label}</span>
                <a href={`tel:${PHONE_NUMBERS.MYCHART.phone.replace(/[^0-9]/g, '')}`} className="text-white hover:text-alberta-gold">
                  {PHONE_NUMBERS.MYCHART.phone}
                </a>
              </li>
              <li>
                <span className="block text-gray-400">{PHONE_NUMBERS.HEALTH_LINK.label}</span>
                <a href={`tel:${PHONE_NUMBERS.HEALTH_LINK.phone}`} className="text-white hover:text-alberta-gold">
                  {PHONE_NUMBERS.HEALTH_LINK.phone}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://account.alberta.ca" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Alberta.ca Account</a></li>
              <li><a href="https://myhealth.alberta.ca" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">MyHealth Alberta</a></li>
              <li><a href="https://www.albertahealthservices.ca/cis/page15448.aspx" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Connect Care / MyChart</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold">Disclaimer</h3>
            <p className="text-sm text-gray-400">
              This is not an official Government of Alberta website. This is an independent helper tool. For official support, contact Alberta.ca Account Support at {PHONE_NUMBERS.ALBERTA_ACCOUNT.phone}.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
          Alberta.ca Sign-In Helper &middot; Independent community tool &middot; Not affiliated with the Government of Alberta
        </div>
      </div>
    </footer>
  );
}
