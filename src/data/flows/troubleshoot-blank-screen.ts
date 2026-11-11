import { FlowDefinition } from '@/types/flow';
import { URLS, PHONE_NUMBERS } from '@/lib/constants';

export const troubleshootBlankScreen: FlowDefinition = {
  id: 'troubleshoot-blank-screen',
  title: 'Blank Screen on Mobile',
  description: 'Fix blank or white screen issues with MyHealth Records on mobile devices',
  category: 'troubleshoot',
  icon: '📱',
  estimatedMinutes: 4,
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start',
      type: 'info',
      title: 'Blank Screen on MyHealth Records Mobile',
      content: 'A blank or white screen when using MyHealth Records on your phone is usually caused by a cached data issue, an outdated app, or a browser compatibility problem. Let\'s walk through the fixes.',
      nextNodeId: 'clear-cache',
    },
    'clear-cache': {
      id: 'clear-cache',
      type: 'action',
      title: 'Step 1: Clear App Cache',
      content: 'On your phone, go to Settings, find the MyHealth Records app (or your browser app if using the web version), and clear its cache and stored data. On iPhone: Settings > General > iPhone Storage > [App] > Offload App. On Android: Settings > Apps > [App] > Storage > Clear Cache.',
      tip: 'Clearing cache will not delete your health records. Your data is stored securely on the server.',
      nextNodeId: 'cache-result',
    },
    'cache-result': {
      id: 'cache-result',
      type: 'question',
      title: 'Did clearing the cache fix it?',
      content: 'Try opening MyHealth Records again after clearing the cache.',
      options: [
        { label: 'Yes, it\'s working now', nextNodeId: 'success' },
        { label: 'Still showing a blank screen', nextNodeId: 'reinstall' },
      ],
    },
    reinstall: {
      id: 'reinstall',
      type: 'action',
      title: 'Step 2: Reinstall the App',
      content: 'Delete the MyHealth Records app from your phone and reinstall it from the App Store (iPhone) or Google Play Store (Android). This ensures you have the latest version with all bug fixes.',
      nextNodeId: 'reinstall-result',
    },
    'reinstall-result': {
      id: 'reinstall-result',
      type: 'question',
      title: 'Did reinstalling fix the issue?',
      content: 'Try opening the app again after reinstalling.',
      options: [
        { label: 'Yes, it works now', nextNodeId: 'success' },
        { label: 'Still blank', nextNodeId: 'try-web' },
      ],
    },
    'try-web': {
      id: 'try-web',
      type: 'action',
      title: 'Step 3: Try the Web Version',
      content: 'Instead of the app, try accessing MyHealth Records through your mobile web browser. Open the link below in Safari (iPhone) or Chrome (Android). If one browser doesn\'t work, try a different one.',
      externalUrl: URLS.MYHEALTH_RECORDS,
      tip: 'Chrome, Safari, Firefox, and Edge are all supported. If one shows a blank screen, try another.',
      nextNodeId: 'web-result',
    },
    'web-result': {
      id: 'web-result',
      type: 'question',
      title: 'Did the web version work?',
      content: 'Were you able to access MyHealth Records through your browser?',
      options: [
        { label: 'Yes, the web version works', nextNodeId: 'web-success' },
        { label: 'Still blank in the browser too', nextNodeId: 'contact-support' },
      ],
    },
    'web-success': {
      id: 'web-success',
      type: 'resolution',
      title: 'Use the Web Version for Now',
      content: 'The web version of MyHealth Records is working for you. You can continue using it through your browser. The app issue may be resolved in a future update. You can bookmark the MyHealth Records page for easy access.',
      externalUrl: URLS.MYHEALTH_RECORDS,
      alertType: 'success',
    },
    'contact-support': {
      id: 'contact-support',
      type: 'resolution',
      title: 'Contact Support',
      content: 'If MyHealth Records is showing a blank screen in both the app and the web browser, there may be a temporary service issue or a problem with your account. Contact support for further help. You can also check the MyHealth Records help page for known issues.',
      phoneNumber: PHONE_NUMBERS.HEALTH_LINK,
      externalUrl: URLS.MYHEALTH_HELP,
      alertType: 'warning',
    },
    success: {
      id: 'success',
      type: 'resolution',
      title: 'Issue Resolved',
      content: 'MyHealth Records is now loading correctly on your mobile device. If the blank screen happens again in the future, clearing the app cache is usually the quickest fix.',
      alertType: 'success',
    },
  },
};
