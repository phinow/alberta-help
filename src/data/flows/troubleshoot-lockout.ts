import { FlowDefinition } from '@/types/flow';
import { URLS, PHONE_NUMBERS } from '@/lib/constants';

export const troubleshootLockout: FlowDefinition = {
  id: 'troubleshoot-lockout',
  title: 'Account Locked Out',
  description: 'Regain access when your Alberta.ca account is locked',
  category: 'troubleshoot',
  icon: '🔒',
  estimatedMinutes: 2,
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start',
      type: 'info',
      title: 'Account Lockout Information',
      content: 'Your Alberta.ca account locks after 5 incorrect password attempts within 30 minutes. When locked, you\'ll see "The email or password you entered is invalid" — no explicit lockout message is shown.',
      nextNodeId: 'options',
    },
    options: {
      id: 'options',
      type: 'question',
      title: 'How would you like to proceed?',
      content: 'You have two options to regain access:',
      options: [
        { label: 'Wait 15 minutes (lock auto-lifts)', nextNodeId: 'wait' },
        { label: 'Reset my password now', nextNodeId: 'reset' },
      ],
    },
    wait: {
      id: 'wait',
      type: 'resolution',
      title: 'Wait for Auto-Unlock',
      content: 'Your account will automatically unlock after 15 minutes. After the lock lifts, try signing in again with the correct password. If you\'re unsure of your password, consider resetting it instead.',
      tip: 'While waiting, double-check that you\'re using the correct email address and that Caps Lock is off.',
      alertType: 'info',
    },
    reset: {
      id: 'reset',
      type: 'action',
      title: 'Reset Your Password',
      content: 'Resetting your password will immediately unlock your account. Click below to open the password reset page.',
      externalUrl: URLS.RESET_PASSWORD,
      nextNodeId: 'reset-result',
    },
    'reset-result': {
      id: 'reset-result',
      type: 'question',
      title: 'Were you able to reset your password?',
      content: 'Did you receive the reset email and set a new password?',
      options: [
        { label: 'Yes, password reset and signed in', nextNodeId: 'success' },
        { label: 'I didn\'t get the reset email', nextNodeId: 'no-email' },
        { label: 'I can\'t access my email', nextNodeId: 'no-access' },
      ],
    },
    'no-email': {
      id: 'no-email',
      type: 'resolution',
      title: 'Reset Email Not Received',
      content: 'Check your spam/junk folder. Make sure you entered the correct email address. Wait a few minutes and try again. If you still don\'t receive it, contact support.',
      phoneNumber: PHONE_NUMBERS.ALBERTA_ACCOUNT,
      alertType: 'warning',
    },
    'no-access': {
      id: 'no-access',
      type: 'resolution',
      title: 'Cannot Access Email',
      content: 'If you can\'t access the email linked to your Alberta.ca account, contact support directly. They can help verify your identity and update your email address.',
      phoneNumber: PHONE_NUMBERS.ALBERTA_ACCOUNT,
      alertType: 'warning',
    },
    success: {
      id: 'success',
      type: 'resolution',
      title: 'Account Unlocked',
      content: 'Your account has been unlocked and you should be able to sign in now. To avoid future lockouts, consider writing down your password in a safe place or using a password manager.',
      alertType: 'success',
    },
  },
};
