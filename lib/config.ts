import type { ChatKitOptions } from "@openai/chatkit";

const options: ChatKitOptions = {
  api: {
    // TODO: configure your ChatKit API integration (URL, auth, uploads).
  },

  theme: {
    colorScheme: 'light',
    radius: 'pill',
    density: 'spacious',
    color: {
      grayscale: {
        hue: 113,
        tint: 6
      },
      accent: {
        primary: '#126320',
        level: 1
      }
    },
    typography: {
      baseSize: 16,
      fontFamily: '"OpenAI Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif',
      fontFamilyMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
      fontSources: [
        {
          family: 'OpenAI Sans',
          src: 'https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Regular.woff2',
          weight: 400,
          style: 'normal',
          display: 'swap'
        }
      ]
    }
  },

  composer: {
    attachments: {
      enabled: true,
      maxCount: 5,
      maxSize: 10485760
    },
    tools: [],
  },

  startScreen: {
    greeting: '',
    prompts: [],        // REMOVE all default prompts
  },

  header: false,        // HIDE conversation title like “Eager to Learn More”
};

export default options;
