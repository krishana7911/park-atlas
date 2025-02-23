import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        offWhite: 'var(--off-white)',
        forestGreen: 'var(--forest-green)',
        slateBlue: 'var(--slate-blue)',
        softOlive: 'var(--soft-olive)',
        dustyGray: 'var(--dusty-gray)',
        warmSand: 'var(--warm-sand)',
        mutedTeal: 'var(--muted-teal)',
      },
    },
  },
  plugins: [],
} satisfies Config;
