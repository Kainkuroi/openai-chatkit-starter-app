import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// REMOVE starter prompts completely
export const STARTER_PROMPTS: StartScreenPrompt[] = [];

// Keep greeting or set your own
export const GREETING = "How can I help you today?";

export const PLACEHOLDER_INPUT = "Ask anything...";

// HIDE conversation header/title bar
export const HEADER = false;

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#0f172a",
      level: 1,
    },
  },
  radius: "round",

  // Add header override to remove title
  header: {
    visible: false,
  },
});
