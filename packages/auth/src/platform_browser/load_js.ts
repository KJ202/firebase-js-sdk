/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { TrustedResourceUrl } from 'safevalues';

interface ExternalJSProvider {
  loadJS(url: TrustedResourceUrl): Promise<Event>;
  recaptchaV2Script: TrustedResourceUrl;
  recaptchaEnterpriseScript: TrustedResourceUrl;
  gapiScript: TrustedResourceUrl;
}

// externalJSProvider is set in index.ts
let externalJSProvider: ExternalJSProvider;

export function _setExternalJSProvider(p: ExternalJSProvider): void {
  externalJSProvider = p;
}

export function _loadJS(url: TrustedResourceUrl): Promise<Event> {
  // externalJSProvider is not defined during initialization.
  if (!externalJSProvider) {
    throw new Error('ExternalJSProvider not set.');
  }
  return externalJSProvider.loadJS(url);
}

export function _recaptchaV2ScriptUrl(): TrustedResourceUrl {
  // externalJSProvider is not defined during initialization.
  if (!externalJSProvider) {
    throw new Error('ExternalJSProvider not set.');
  }
  return externalJSProvider.recaptchaV2Script;
}

export function _recaptchaEnterpriseScriptUrl(): TrustedResourceUrl {
  // externalJSProvider is not defined during initialization.
  if (!externalJSProvider) {
    throw new Error('ExternalJSProvider not set.');
  }
  return externalJSProvider.recaptchaEnterpriseScript;
}

export function _gapiScriptUrl(): TrustedResourceUrl {
  // externalJSProvider is not defined during initialization.
  if (!externalJSProvider) {
    throw new Error('ExternalJSProvider not set.');
  }
  return externalJSProvider.gapiScript;
}

export function _generateCallbackName(prefix: string): string {
  return `__${prefix}${Math.floor(Math.random() * 1000000)}`;
}
