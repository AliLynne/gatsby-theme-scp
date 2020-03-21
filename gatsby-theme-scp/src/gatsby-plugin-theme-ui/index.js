export default {
  colors: {
    text: "#000",
    background: "#f4f4f4",
    primary: "#673D3D",
    black: "#000",
    card: "#F3F4F2",
    modes: {
      dark: {
        text: "#f4f4f4",
        background: "#000",
        primary: "#673D3D",
        card: "#F3F4F2"
      }
    }
  },
  gradients: {
    header: t => `linear-gradient(${t.colors.black}, ${t.colors.primary})`
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
      boxShadow:
        "0 2px 6px rgba(0,0,0,0.5), inset 0 1px rgba(255,255,255,0.3), inset 0 10px rgba(255,255,255,0.2), inset 0 10px 20px rgba(255,255,255,0.25), inset 0 -15px 30px rgba(0,0,0,0.1)",
      border: "solid 1px #888880"
    }
  },
  styles: {
    root: {
      margin: 0
    },
    header: {
      backgroundImage: t => t.gradients.header
    }
  }
};
