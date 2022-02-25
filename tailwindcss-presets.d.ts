declare module "@anny.co/tailwindcss-presets" {
  
  interface AnnyLegacyThemeModel {
    /** @deprecated use AnnyThemeModel.neutral */
    neutralA: string;
    /** @deprecated use AnnyThemeModel.neutralMuted */
    neutralB: string;
  }

  interface AnnyThemeModel {
    anny: string;
    dark: string;
    neutral: string;
    neutralMuted: string;
    primary: string;
    primaryMuted: string;
    secondary: string;
    secondaryMuted: string;
  }

  type AnnyThemeModelCompat = AnnyThemeModel & AnnyLegacyThemeModel;

  const themeModel: AnnyThemeModel;
}
