export default {
  colors: {
    text: "#000",
    background: "#f4f4f4",
    primary: "#660000",
    faded: "#734646",
    black: "#000",
    card: "#F3F4F2",
    modes: {
      dark: {
        text: "#f4f4f4",
        background: "#000",
        primary: "#660000",
        card: "#F3F4F2"
      }
    }
  },
  fonts: {
    logo: '"Baumans", Arial, sans-serif',
    heading: 'verdana, arial, helvetica, sans-serif',
    text: 'verdana, arial, helvetica, sans-serif'
  },
  fontSizes: [
    12,
    14,
    16,
    20,
    24,
    32,
    48,
    64,
    96
  ],
  radii: [0, 5, 10, 20, 40, 9999],
  gradients: {
    header: t => `linear-gradient(${t.colors.black}, ${t.colors.faded})`
  },
  shadows: {
    default: "0 2px 6px rgba(0,0,0,0.5), inset 0 1px rgba(255,255,255,0.3), inset 0 10px rgba(255,255,255,0.2), inset 0 10px 20px rgba(255,255,255,0.25), inset 0 -15px 30px rgba(0,0,0,0.1)",
    red: "0 2px 6px rgba(102,0,0,.5)"
  },
  text: {
    heading: {
      fontSize: 7
    },
    logo: {
      fontFamily: 'logo',
      color: 'white',
      fontWeight: 'logo',
      fontSize: 6
    }
  },
  buttons: {
    primary: {
      background: "#fff",
      border: "1px solid black",
      color: "black"
    }
  },
  cards: {
    primary: {
      backgroundColor: "card",
      color: "black",
      boxShadow: "default",
      border: "solid 1px #888880",
      borderRadius: 2
    },
    red: {
      backgroundColor: "card",
      color: "black",
      boxShadow: "red",
      border: "solid 1px #888880",
      borderRadius: 2
    }
  },
  layout: {
    main: {
      flexGrow: 2,
      py: 4
    },
    page: {
      justifyContent: 'space-between'
    },
    sidebar: {
      maxWidth: '300px'
    }
  },
  styles: {
    root: {
      margin: 0
    },
    hr: {
      boxShadow: "default",
      border: "solid 1px #888880",
      margin: 2
    }
  }
};
