import { envAppConfig } from "../env/app.env";
import { envClientConfig } from "../env/client.env";
import { envPublicConfig } from "../env/public.env";
import { createRoutes } from "../utils/endpoint";
import { themeConfig } from "./theme.config";

const api = `${envClientConfig.CLIENT_ORIGIN}/${envClientConfig.CLIENT_PREFIX}`;

export const appConfig = Object.freeze({
  app: {
    name: envPublicConfig.APP_NAME,
    version: envPublicConfig.APP_VERSION,
    environment: envAppConfig.NODE_ENV,
    locale: "en",
    timezone: "UTC",
  },

  site: {
    url: envPublicConfig.SITE_URL,
    title: envPublicConfig.SITE_TITLE,
    description: envPublicConfig.APP_DESCRIPTION,
    logo: envPublicConfig.LOGO_URL,
    ogImage: envPublicConfig.OG_IMAGE_URL,
    style: envPublicConfig.ACTIVE_STYLE,
    theme: envPublicConfig.ACTIVE_THEME,
    titleTemplate: "%s | Vivek's Portfolio",
  },

  author: {
    name: envPublicConfig.AUTHOR_NAME,
    email: envPublicConfig.AUTHOR_EMAIL,
  },

  // Social Profiles
  social: {
    twitter: {
      name: "Twitter",
      handle: envPublicConfig.TWITTER,
      cardType: "summary_large_image",
      icon: "",
    },

    linkedin: {
      name: "LinkedIn",
      handle: envPublicConfig.LINKEDIN,
      cardType: "summary_large_image",
      icon: "",
    },

    github: {
      name: "GitHub",
      handle: envPublicConfig.GITHUB,
      cardType: "summary_large_image",
      icon: "",
    },
  },

  // Repository / Git
  repository: {
    reopsitoryName: envPublicConfig.AUTHOR_NAME,
    repositoryUrl: `https://github.com/${envPublicConfig.AUTHOR_NAME}/portfolio/`,
    imageUrl: `https://raw.githubusercontent.com/${envPublicConfig.AUTHOR_NAME}/portfolio/refs/heads/main/public/`,
  },

  // Search Engine Verification
  verification: {
    google: envPublicConfig.GOOGLE_VERIFICATION,
  },

  logging: {
    enabled: envAppConfig.NODE_ENV !== "production",
    stackTrace: envAppConfig.NODE_ENV !== "production",
  },

  headers: {
    requestId: "X-Request-Id",
    traceId: "X-Trace-Id",
    poweredBy: "X-Powered-By",
  },

  pagination: {
    defaultPage: 1,
    defaultLimit: 20,
    maxLimit: 100,
  },

  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
  },

  // Theme
  theme: themeConfig,

  motion_duration: {
    instant: 100,
    fast: 150,
    base: 250,
    slow: 400,
  },

  routes: {
    // Primary Pages
    home: "/",
    about: "/about",
    notFound: "/404",

    projects: "/projects",
    docs: "/documentation",
    openapi: "/openapi",
    dashboard: "/dashboard",
    profile: "/profile",

    // Legal / Company
    legal: {
      careers: "/careers",
      contact: "/contact",
      privacy: "/privacy",
      terms: "/terms",
    },

    // System / SEO Assets
    system: {
      favicon: "/favicon.ico",
      logo: "/logo.png",
      robots: "/robots.txt",
      sitemap: "/sitemap.xml",
    },

    auth: {
      signup: "/signup",
      signin: "/signin",
      signout: "/signout",
      forgotPassword: "/forgot-password",
    },
  },

  api: {
    auth: {
      email: createRoutes(`${api}/auth/email`, {
        signin: "/signin",
        signup: "/signup",
        signout: "/signout",
        refresh: "/refresh",
        me: "/me",
        verifyEmail: "/verify-email",
        forgotPassword: "/forgot-password",
        resetPassword: "/reset-password",
      }),

      phone: createRoutes(`${api}/auth/phone`, {
        signin: "/signin",
        signup: "/signup",
        sendOtp: "/send-otp",
        verifyOtp: "/verify-otp",
      }),
    },
  },

  keywords: ["next.js", "react", "typescript", "frontend", "template"],
});

export type AppConfig = typeof appConfig;
