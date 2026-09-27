import { Cousine, Inika, Oxanium } from "next/font/google";
import localFont from "next/font/local";

export const oxanium = Oxanium({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const inika = Inika({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const cousine = Cousine({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

/**
 * Personal/brand font — not tied to any theme's --font-sans/--font-serif/
 * --font-mono slots. Mounted globally (see styles.config.ts's
 * PERSONAL_FONTS) and exposed as the `font-brilliant` utility class via
 * StyleTheme.css, so it's usable anywhere regardless of the active theme.
 * File: src/assets/fonts/brilliant-performer.otf ("Brilliant Performer",
 * Regular, single static weight).
 */

/**
 * Personal/brand font — not tied to any theme's --font-sans/--font-serif/
 * --font-mono slots. Mounted globally (see styles.config.ts's
 * PERSONAL_FONTS) and exposed as the `font-brilliant` utility class via
 * StyleTheme.css, so it's usable anywhere regardless of the active theme.
 * File: src/assets/fonts/brilliant-performer.otf ("Brilliant Performer",
 * Regular, single static weight).
 */

// custom fonts
export const brilliantPerformer = localFont({
  src: "../../assets/fonts/brilliant-performer.otf",
  variable: "--font-brilliant-performer",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const georgia = localFont({
  src: "../../assets/fonts/georgia.ttf",
  variable: "--font-georgia",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const consolasligaturizedv2 = localFont({
  src: "../../assets/fonts/consolas-ligaturized-v2.ttf",
  variable: "--font-consolas-ligaturized-v2",
  weight: "400",
  style: "normal",
  display: "swap",
});

const CustomFont = localFont({
  src: "../../assets/fonts/custom.ttf",
  variable: "--font-custom",
  weight: "400",
  style: "normal",
  display: "swap",
});

export default {
  sans: oxanium,
  serif: inika,
  mono: cousine,
  custom: CustomFont,
};
