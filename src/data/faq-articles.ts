import { FaqArticle } from '@/types/faq';

export const faqArticles: FaqArticle[] = [
  {
    slug: 'what-is-alberta-ca-account',
    title: 'What is an Alberta.ca account?',
    summary: 'Learn about Alberta\'s single sign-on digital identity for accessing government services.',
    category: 'account',
    tags: ['account', 'MADI', 'digital ID', 'sign-in'],
    content: 'An Alberta.ca account (formerly known as MyAlberta Digital ID or MADI) is a free digital identity issued by the Government of Alberta. It allows residents to prove who they are online and access a wide range of provincial government services without paper documents or in-person visits.\n\nThere are two account types:\n\n**Basic Account**: Available to anyone regardless of residency. Only requires a first name, last name, and email address. Provides access to limited services.\n\n**Verified Account**: Available to Alberta residents only. Requires a valid Alberta driver\'s licence or identification card. Provides full access to all services including MyHealth Records, MyChart, Student Aid, and CRA access.\n\nYou can sign in using your email and password, or through Google or Microsoft accounts.',
  },
  {
    slug: 'basic-vs-verified',
    title: 'Basic vs Verified account — what\'s the difference?',
    summary: 'Understand the two account tiers and which one you need.',
    category: 'account',
    tags: ['basic', 'verified', 'account type', 'upgrade'],
    content: '**Basic Account**\n- Available to anyone\n- Requires only name and email\n- Access to limited services\n- Can hold multiple Basic accounts\n\n**Verified Account**\n- Alberta residents only\n- Requires valid Alberta driver\'s licence or ID card\n- Full access to all services (MyHealth Records, MyChart, Student Aid, AISH, eServices, CRA)\n- Only one Verified account per person\n- No longer requires annual re-verification\n\nTo upgrade from Basic to Verified, sign in to your account and follow the verification prompts. You\'ll need your Alberta ID card information and will receive a verification code by text or mail.',
  },
  {
    slug: 'what-is-myhealth-records',
    title: 'What is MyHealth Records?',
    summary: 'Overview of Alberta\'s online health records portal.',
    category: 'myhealth',
    tags: ['MyHealth Records', 'health', 'Netcare', 'immunizations', 'lab results'],
    content: 'MyHealth Records is an online tool that allows Albertans aged 14 and older to view their personal health information sourced from Alberta Netcare. This includes:\n\n- Immunization records\n- Dispensed medication history\n- Diagnostic reports\n- Most lab test results\n\nTo access MyHealth Records, you need a Verified Alberta.ca account and your Personal Health Number (PHN), found on your Alberta Health Care card.\n\nMyHealth Records contains two tools:\n- **My Personal Records**: Immunizations, medications, and lab results from Alberta Netcare\n- **MyChart**: Interactive tool for AHS health information and communicating with your care team\n\nAvailable as both a web portal (myhealth.alberta.ca/myhealthrecords) and a mobile app.',
  },
  {
    slug: 'what-is-mychart',
    title: 'What is MyChart (Connect Care)?',
    summary: 'Learn about Alberta\'s patient portal for AHS health information.',
    category: 'mychart',
    tags: ['MyChart', 'Connect Care', 'MyAHS Connect', 'AHS', 'patient portal'],
    content: 'MyChart (formerly MyAHS Connect) is Alberta\'s Connect Care patient portal, powered by Epic Systems. It was rebranded to MyChart in September 2025 to align with the mobile app name.\n\nMyChart is accessed through MyHealth Records and allows you to:\n- View test results with doctor\'s comments\n- Manage appointments\n- Send messages to your healthcare team\n- Coordinate care across providers\n\nAs of October 2024, MyChart is available to all Albertans with a MyHealth Records account, regardless of whether they\'ve visited a Connect Care facility. Over 1.3 million Albertans have active accounts.\n\nFor MyChart support, call 1-844-401-4016.',
  },
  {
    slug: 'account-lockout',
    title: 'What happens when my account gets locked?',
    summary: 'How account lockouts work and how to unlock your account.',
    category: 'account',
    tags: ['lockout', 'locked', 'password', 'attempts'],
    content: 'Your Alberta.ca account locks after 5 incorrect password attempts within 30 minutes. When locked, you\'ll see "The email or password you entered is invalid" — no explicit lockout message is shown.\n\nTo unlock your account:\n1. **Wait 15 minutes**: The lock automatically lifts\n2. **Reset your password**: This immediately unlocks the account\n\nTips to avoid lockouts:\n- Use a password manager\n- Check that Caps Lock is off\n- Make sure you\'re using the correct email address\n- Try the "Having trouble signing in?" link',
  },
  {
    slug: 'sign-in-methods',
    title: 'What sign-in methods are available?',
    summary: 'The three ways you can sign in to your Alberta.ca account.',
    category: 'account',
    tags: ['sign-in', 'Google', 'Microsoft', 'password', 'login'],
    content: 'Alberta.ca accounts support three sign-in methods:\n\n1. **Email and password**: Traditional credentials created during registration\n2. **Continue with Google**: Sign in using your Gmail/Google account\n3. **Continue with Microsoft**: Sign in using Outlook, Hotmail, or Microsoft 365\n\nYou can use social login (Google/Microsoft) for both creating and signing in to accounts. These methods can serve as backups if you forget your password.\n\n**Note**: Some Microsoft 365 organizational (work) accounts may have issues. Your organization\'s IT department may need to enable external authentication.',
  },
  {
    slug: 'verification-process',
    title: 'How does account verification work?',
    summary: 'Steps to verify your Alberta.ca account for full service access.',
    category: 'verification',
    tags: ['verification', 'verify', 'driver licence', 'ID card', 'code'],
    content: 'To verify your Alberta.ca account:\n\n1. Sign in to your account at account.alberta.ca\n2. Enter your Alberta driver\'s licence or ID card number\n3. Your information is checked against government records\n4. Receive a verification code:\n   - **By text**: Instant, but requires your phone number registered at an Alberta Registry office (free, in-person visit)\n   - **By mail**: Takes up to 10 business days\n5. Enter the code to complete verification\n\nVerified accounts no longer require annual re-verification. You only need to update when you get a new ID card (within 6 months of the old one expiring).',
  },
  {
    slug: 'phn-info',
    title: 'Where do I find my Personal Health Number (PHN)?',
    summary: 'How to find the PHN you need for MyHealth Records.',
    category: 'myhealth',
    tags: ['PHN', 'Personal Health Number', 'health card', 'Alberta Health Care'],
    content: 'Your Personal Health Number (PHN) is a 9-digit number on your Alberta Health Care card. You need it to register for MyHealth Records.\n\nIf you don\'t have your card:\n- Call Health Link at **811** to find your PHN\n- Visit any Alberta Registry office\n- Check old medical documents or prescriptions (your PHN may be printed on them)',
  },
  {
    slug: 'browser-recommendations',
    title: 'Which browser works best?',
    summary: 'Recommended browsers and settings for Alberta.ca services.',
    category: 'technical',
    tags: ['browser', 'Chrome', 'Edge', 'Safari', 'Firefox', 'technical'],
    content: 'For the best experience with Alberta.ca, MyHealth Records, and MyChart:\n\n**Recommended browsers**:\n- Google Chrome (latest version)\n- Microsoft Edge (latest version)\n\n**Also works**:\n- Mozilla Firefox\n- Safari (macOS/iOS)\n\n**Tips**:\n- Keep your browser updated to the latest version\n- Enable cookies for alberta.ca domains\n- Disable ad blockers when signing in\n- If experiencing issues, try a private/incognito window\n- Clear cache and cookies for alberta.ca if you encounter errors',
  },
  {
    slug: 'mobile-app-info',
    title: 'Is there a mobile app?',
    summary: 'Information about the MyHealth Records mobile app.',
    category: 'technical',
    tags: ['mobile', 'app', 'iPhone', 'Android', 'download'],
    content: 'MyHealth Records is available as a mobile app on both iOS (App Store) and Android (Google Play). The app provides the same functionality as the web version.\n\nIf you experience a blank or white screen in the mobile app:\n1. Force close and reopen the app\n2. Clear the app cache\n3. Uninstall and reinstall\n4. Restart your phone\n5. Use the web version (myhealth.alberta.ca/myhealthrecords) as an alternative',
  },
  {
    slug: 'parent-guardian-access',
    title: 'Parent/guardian access to MyHealth Records',
    summary: 'Age policies for accessing children\'s health records.',
    category: 'myhealth',
    tags: ['parent', 'guardian', 'child', 'minor', 'age'],
    content: 'MyHealth Records has specific age policies:\n\n- **Age 14**: Children can register for their own MyHealth Records account\n- **Age 16**: Children may remove parent/guardian access\n- **Age 18**: Parent/guardian access ends automatically\n\nParents can view their children\'s records through proxy access until these age thresholds.',
  },
  {
    slug: '30-day-deadline',
    title: 'What is the 30-day verification deadline?',
    summary: 'Why you need to verify within 30 days of signing up for MyHealth Records.',
    category: 'myhealth',
    tags: ['30 days', 'deadline', 'verification', 'MyHealth Records'],
    content: 'When you sign up for MyHealth Records, you have 30 days to complete full verification of your Alberta.ca account. If you don\'t complete verification within this period, you may lose access to your most recent health information.\n\nThis means:\n- You can sign up with a partially verified account\n- But full verification must be completed within 30 days\n- After the deadline, some records may not be accessible until verification is complete\n\nTo avoid issues, complete your account verification as soon as possible after signing up.',
  },
  {
    slug: 'support-contacts',
    title: 'Who do I contact for support?',
    summary: 'Phone numbers and resources for getting help.',
    category: 'general',
    tags: ['support', 'contact', 'phone', 'help'],
    content: '**Alberta.ca Account Support**: 1-844-643-2789\nFor help with account creation, sign-in issues, verification, and general account problems.\n\n**MyChart Support**: 1-844-401-4016\nFor help with MyChart/Connect Care, health record access, and portal features.\n\n**Health Link**: 811\nFor general health inquiries, finding your PHN, and health advice.\n\n**Online Resources**:\n- Alberta.ca Account info: alberta.ca/alberta-ca-account-for-personal-use\n- MyHealth Records help: myhealth.alberta.ca/help/KB/technical-problems\n- Connect Care info: albertahealthservices.ca/cis/page15448.aspx',
  },
];

export function getArticleBySlug(slug: string): FaqArticle | undefined {
  return faqArticles.find(a => a.slug === slug);
}

export function getArticlesByCategory(category: string): FaqArticle[] {
  if (category === 'all') return faqArticles;
  return faqArticles.filter(a => a.category === category);
}
