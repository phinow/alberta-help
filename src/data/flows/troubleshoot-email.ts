import { FlowDefinition } from '@/types/flow';
import { URLS, PHONE_NUMBERS } from '@/lib/constants';

export const troubleshootEmail: FlowDefinition = {
  id: 'troubleshoot-email',
  title: 'Lost Email Access',
  description: 'Recover your account when you\'ve lost access to your email',
  category: 'troubleshoot',
  icon: '📧',
  estimatedMinutes: 3,
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start',
      type: 'question',
      title: 'Do you remember your Alberta.ca account password?',
      content: 'If you\'ve lost access to the email linked to your Alberta.ca account, the recovery steps depend on whether you still know your password.',
      options: [
        { label: 'Yes, I remember my password', nextNodeId: 'have-password' },
        { label: 'No, I forgot my password too', nextNodeId: 'no-password' },
      ],
    },
    'have-password': {
      id: 'have-password',
      type: 'action',
      title: 'Sign in and update your email',
      content: 'Since you know your password, sign in to your Alberta.ca account. On the sign-in page, click "Having trouble signing in?" to access options for updating your email address.',
      externalUrl: URLS.SIGN_IN,
      tip: 'After signing in, go to your account settings to update your email to one you currently have access to.',
      nextNodeId: 'update-result',
    },
    'update-result': {
      id: 'update-result',
      type: 'question',
      title: 'Were you able to update your email?',
      content: 'Did you manage to sign in and change your email address?',
      options: [
        { label: 'Yes, email updated', nextNodeId: 'success' },
        { label: 'I couldn\'t sign in', nextNodeId: 'no-password' },
      ],
    },
    'no-password': {
      id: 'no-password',
      type: 'resolution',
      title: 'Contact Support for Help',
      content: 'If you\'ve lost access to your email AND forgotten your password, you\'ll need to contact Alberta.ca Account Support directly. They can verify your identity and help you regain access to your account. Have your Alberta driver\'s licence or ID card ready when you call.',
      phoneNumber: PHONE_NUMBERS.ALBERTA_ACCOUNT,
      alertType: 'warning',
    },
    success: {
      id: 'success',
      type: 'resolution',
      title: 'Email Updated Successfully',
      content: 'Your email address has been updated. Make sure to use this new email address when signing in going forward. Consider enabling a social login method (Google or Microsoft) as a backup sign-in option.',
      alertType: 'success',
    },
  },
};
