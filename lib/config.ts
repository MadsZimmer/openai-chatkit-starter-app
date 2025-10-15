// lib/config.ts
import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// Startskærm
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  { label: "What can you do?", prompt: "What can you do?", icon: "circle-question" },
  // ...tilføj flere hvis du vil
];

export const PLACEHOLDER_INPUT = "Skriv til AI";
export const GREETING = "Hvad kan jeg hjælpe dig med i dag?";

// Tema (din fulde kontrol)
export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: { hue: 112, tint: 9, shade: -1 },
    surface:   { background: "#ffffff", foreground: "#c7c7c7" },
    // (valgfrit) accentfarve:
    // accent: { primary: theme === "dark" ? "#f1f5f9" : "#0f172a", level: 1 },
  },
  radius: "pill",      // none | small | medium | large | pill
  density: "normal",   // compact | normal | spacious
  typography: {
    baseSize: 16,
    fontFamily:
      '"OpenAI Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif',
    fontFamilyMono:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
    fontSources: [
      {
        family: "OpenAI Sans",
        src: "https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Regular.woff2",
        weight: 400,
        style: "normal",
        display: "swap",
      },
      // ...tilføj de øvrige font-kilder her hvis ønsket
    ],
  },
});
