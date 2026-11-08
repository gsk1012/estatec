import type { Config } from "tailwindcss";

/*
 * ESTATEC — wereld "Maatvoering": NEN 2580-meetrapporten en architecten-
 * plattegronden. Inkt op calque, haarlijnen en maatlijnen, blauwdrukblauw als
 * enige kleur met een taak (beschikbaar, actie, maatvoering).
 */
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        inkt: {
          DEFAULT: "#15181B",
          800: "#22272C",
          600: "#3E454C",
          500: "#59616A",
        },
        calque: {
          DEFAULT: "#EDEFEC",
          50: "#F7F8F6",
          200: "#E2E5E1",
          300: "#D3D8D3",
        },
        lijn: "#C3C9C3",
        blauw: {
          DEFAULT: "#24476B",
          700: "#1B3753",
          300: "#9DB4CC",
          100: "#DCE5EE",
        },
        taupe: "#BDAAA5",
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        blad: "1440px",
      },
      transitionTimingFunction: {
        uit: "cubic-bezier(0.23, 1, 0.32, 1)",
        "in-uit": "cubic-bezier(0.77, 0, 0.175, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
