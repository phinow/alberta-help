import { FlowDefinition } from '@/types/flow';
import { signInAlberta } from './flows/sign-in-alberta';
import { accessMyhealth } from './flows/access-myhealth';
import { accessMychart } from './flows/access-mychart';
import { troubleshootLockout } from './flows/troubleshoot-lockout';
import { troubleshootPassword } from './flows/troubleshoot-password';
import { troubleshootEmail } from './flows/troubleshoot-email';
import { troubleshootVerification } from './flows/troubleshoot-verification';
import { troubleshootAccountType } from './flows/troubleshoot-account-type';
import { troubleshootBlankScreen } from './flows/troubleshoot-blank-screen';
import { troubleshootAuthError } from './flows/troubleshoot-auth-error';
import { troubleshootReverification } from './flows/troubleshoot-reverification';
import { troubleshootRedirects } from './flows/troubleshoot-redirects';
import { troubleshoot30Day } from './flows/troubleshoot-30day';
import { troubleshootM365 } from './flows/troubleshoot-m365';
import { troubleshootExpiredId } from './flows/troubleshoot-expired-id';

export const flowRegistry: Record<string, FlowDefinition> = {
  'sign-in-alberta': signInAlberta,
  'access-myhealth': accessMyhealth,
  'access-mychart': accessMychart,
  'troubleshoot-lockout': troubleshootLockout,
  'troubleshoot-password': troubleshootPassword,
  'troubleshoot-email': troubleshootEmail,
  'troubleshoot-verification': troubleshootVerification,
  'troubleshoot-account-type': troubleshootAccountType,
  'troubleshoot-blank-screen': troubleshootBlankScreen,
  'troubleshoot-auth-error': troubleshootAuthError,
  'troubleshoot-reverification': troubleshootReverification,
  'troubleshoot-redirects': troubleshootRedirects,
  'troubleshoot-30day': troubleshoot30Day,
  'troubleshoot-m365': troubleshootM365,
  'troubleshoot-expired-id': troubleshootExpiredId,
};

export function getFlow(id: string): FlowDefinition | undefined {
  return flowRegistry[id];
}

export function getGuideFlows(): FlowDefinition[] {
  return Object.values(flowRegistry).filter(f => f.category === 'guide');
}

export function getTroubleshootFlows(): FlowDefinition[] {
  return Object.values(flowRegistry).filter(f => f.category === 'troubleshoot');
}
