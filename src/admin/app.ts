import type { StrapiApp } from "@strapi/strapi/admin";
import AuthLogo from "../extensions/favicon.png";

export default {
  config: {
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { releases: false },
    auth: {
      // Replace the Strapi logo in auth (login) views
      logo: AuthLogo,
    },
    menu: {
      // Replace the Strapi logo in the main navigation
      logo: AuthLogo,
    },
    theme: {
      light: {
        colors: {
          primary600: "orange",
          buttonPrimary500: "orange",
          buttonPrimary600: "orange",
        },
      },
      dark: {
        colors: {
          primary100: "black",
          primary200: "grey",
          primary600: "orange",
          primary700: "orange",
          neutral0: "#1f1f1f",
          neutral100: "#1f1f1f",
          neutral200: "grey",
          neutral150: "black",
          neutral400: "#FFF",
          neutral700: "#FFF",
          neutral600: "#FFF",
          buttonPrimary500: "orange",
          buttonPrimary600: "orange",
        },
      },
    },
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      "es",
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
