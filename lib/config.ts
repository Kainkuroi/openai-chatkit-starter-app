import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// No starter prompts (removes “What can you do?” etc.)
export const STARTER_PROMPTS: StartScreenPrompt[] = [];

// Texts for the UI
export const PLACEHOLDER_INPUT = "Ask anything...";
export const GREETING = "How can I help you today?";

// Theme config (you can tweak these values)
export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 140,  // your greenish tone
      tint: 7,
      shade: 1,
    },
    accent: {
      primary: "#1b5f1c", // your ECON green
      level: 1,
    },
  },
  radius: "pill",
  density: "spacious",

  // Try to hide header/title via theme (some versions respect this)
  header: {
    visible: false,
  },

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
    ],
  },
});
