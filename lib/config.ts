// lib/config.ts
import type { ChatKitOptions } from '@openai/chatkit';

// Hvis starter-appen bruger en anden route, behold navnet her:
export const CREATE_SESSION_ENDPOINT = '/api/create-session';

// Ét samlet sted for tema + tekster + token-flow:
export const CHATKIT_OPTIONS: ChatKitOptions = {
  api: {
    // ChatKit henter automatisk et kortlivet client_secret via din server
    async getClientSecret(currentClientSecret?: string) {
      // Starter-appen har allerede /api/create-session – det er nok at kalde den hver gang
      const res = await fetch(CREATE_SESSION_ENDPOINT, { method: 'POST' });
      const { client_secret } = await res.json();
      return client_secret;
    },
  },
  // === DESIGN / TEMA ===
  theme: {
    colorScheme: 'light',       // 'light' | 'dark'
    radius: 'pill',             // 'none' | 'small' | 'medium' | 'large' | 'pill'
    density: 'normal',          // 'compact' | 'normal' | 'spacious'
    color: {
      grayscale: { hue: 112, tint: 9, shade: -1 },
      surface:  { background: '#ffffff', foreground: '#c7c7c7' },
      // (valgfrit) accentfarver – uncomment og tilpas hvis du vil sætte primær farve:
      // accent: { primary: '#0f172a', level: 1 },
    },
    typography: {
      baseSize: 16,
      fontFamily:
        '"OpenAI Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif',
      fontFamilyMono:
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
      fontSources: [
        {
          family: 'OpenAI Sans',
          src: 'https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Regular.woff2',
          weight: 400,
          style: 'normal',
          display: 'swap',
        },
        // ...tilføj de øvrige fontkilder her, hvis du vil
      ],
    },
  },

  // === INPUTFELT / VEDHÆFTNINGER ===
  composer: {
    placeholder: 'Skriv til AI',
    attachments: {
      enabled: true,
      maxCount: 5,
      maxSize: 10_485_760, // 10 MB
    },
    disclaimer: 'Disse svar er genereret af AI og kan være misvisende',
  },

  // === STARTSKÆRM ===
  startScreen: {
    greeting: 'Hvad kan jeg hjælpe med i dag?',
    prompts: [
      { icon: 'circle-question', label: 'What is ChatKit?', prompt: 'What is ChatKit?' },
      // ...tilføj dine 4 øvrige prompts her
    ],
  },

  // (valgfrit) locale/header/widgets/entities osv. kan også sættes her
};
