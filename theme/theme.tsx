import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "380px",
  md: "426px",
  lg: "575px",
  xl: "767px",
  "2xl": "991",
  "3xl": "1199px",
});

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontSize: "18px",
        bg: "#fff",
        h: "100%",
      },
      html: {
        height: "100%",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        bg: "#fff",
        color: "#458FF6",
        borderRadius: "55px",
        fontSize: "18px",
        fontWeight: "700",
        border: "1.4px solid #458FF6",
      },
      sizes: {
        xl: {
          height: "56px",
          w: "200px",
        },
        point: {
          height: "10px",
          w: "10px",
        },
      },
      variants: {
        blue: {
          bg: "#458FF6",
          color: "#fff",
        },
        arrow: {
          border: "none",
        },
        point: {
          borderRadius: "50%",
          border: "none",
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: "700",
        lineHeight: "120%",
      },
      variants: {
        h1: {
          fontSize: "48px",
        },
        h2: {
          fontSize: "36px",
        },
        h3: {
          fontSize: "24px",
        },
        h4: {
          fontSize: "21px",
        },
        footerNav: {
          color: "#fff",
          fontSize: "20px",
          lineHeight: "200%",
        },
      },
    },
    Link: {
      baseStyle: {
        color: "white",
        _hover: {
          textDecoration: "none",
        },
      },
    },
    Text: {
      baseStyle: {
        lineHeight: "1.6",
        color: "#7D7987",
        fontWeight: "300",
      },
      variants: {
        mainText: {
          fontSize: "21px",
        },
        sliderText: {
          fontSize: "19px",
          fontWeight: "400",
          color: "#fff",
        },
        caption: {
          fontSize: "16px",
          lineHeight: "1.7",
        },
      },
    },
  },
  textStyles: {
    line: {
      width: "56px",
      height: "2px",
      bg: "#000",
      borderRadius: "10px",
    },
  },
  fonts: {
    body: "'Mulish', sans-serif;",
  },
  breakpoints: breakpoints,
});

export default theme;
