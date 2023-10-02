export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#E6FBFF",
    100: "#CCF7FE",
    200: "#99EEFD",
    300: "#66E6FC",
    400: "#33DDFB",
    500: "#00D5FA",
    600: "#00A0BC",
    700: "#006B7D",
    800: "#006B7D",
    900: "#001519",
  },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,

      // ... = spread operator used to create the
      // duplicate array / dictionary / etc

      // but here we are creating a new object
      // that is having the
      // primary, neutral and background values.
      ...(mode === "dark"
        ? {
            primary: {
              dark: colorTokens.primary[200],
              main: colorTokens.primary[500],
              light: colorTokens.primary[800],
            },
            neutral: {
              dark: colorTokens.grey[100],
              main: colorTokens.grey[200],
              mediumMain: colorTokens.grey[300],
              medium: colorTokens.grey[400],
              light: colorTokens.grey[800],
            },
            background: {
              default: colorTokens.grey[900],
              alt: colorTokens.grey[800],
            },
          }
        : {
            primary: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[500],
              light: colorTokens.primary[50],
            },
            neutral: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[500],
              mediumMain: colorTokens.primary[400],
              medium: colorTokens.primary[300],
              light: colorTokens.primary[50],
            },
            background: {
              default: colorTokens.grey[10],
              alt: colorTokens.grey[0],
            },
          }),
    },

    typography: {
      fontFamily: ["sans-serif"],
      fontSize: 12,
      h1: {
        fontFamily: ["sans-serif"],
        fontSize: 40,
      },
      h2: {
        fontFamily: ["sans-serif"],
        fontSize: 32,
      },
      h3: {
        fontFamily: ["sans-serif"],
        fontSize: 24,
      },
      h4: {
        fontFamily: ["sans-serif"],
        fontSize: 20,
      },
      h5: {
        fontFamily: ["sans-serif"],
        fontSize: 15,
      },
      h6: {
        fontFamily: ["sans-serif"],
        fontSize: 14,
      },
    },
  };
};
