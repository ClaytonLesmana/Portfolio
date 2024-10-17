const particlesConfig = {
  background: {
    color: {
      value: "#0F172A",
    },
  },
  fpsLimit: 60,
  particles: {
    color: {
      value: "#34D399",
    },
    links: {
      enable: true,
      color: "#ffffff",
      distance: 150,
    },
    move: {
      enable: true,
      speed: 1,
    },
    number: {
      value: 100,
    },
    size: {
      value: 1,
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      repulse: {
        distance: 200,
      },
      push: {
        quantity: 4,
      },
    },
  },
};

export default particlesConfig;
