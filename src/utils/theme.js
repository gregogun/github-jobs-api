import { theme, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  ...theme,
  styles: {
    global: (props) => ({
      "html, body": {
        bg: props.colorMode === "light" ? "#f5f5f5" : "#232323",
        overflowX: "hidden",
      },
    }),
  },
  colors: {
    ...theme.colors,
    default: {
      light: "#fcfcfc",
      dark: "#232323",
      lightGray: "#C9C9C9",
      darkGray: "#353535",
    },
    brand: {
      primary: "#1e86f7",
    },
    neutral: {
      100: "#f5f5f5",
    },
  },
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
  global: {
    body: {
      bg: "gray.400",
    },
  },
});

export default customTheme;
