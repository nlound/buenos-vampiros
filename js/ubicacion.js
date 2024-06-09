gsap.registerPlugin(ScrollTrigger);


gsap.to('.wrapper-head_up', {
  scrollTrigger: {
    immediateRender: false,
    trigger: 'section',
    start: "0% 100%",
    end: "100% 100%",
    scrub: 0.5,
  },
  yPercent: -100,
});

gsap.to('.wrapper-head_down', {
  scrollTrigger: {
    immediateRender: false,
    trigger: '.wrapper-head_down',
    start: "100% 100%",
    end: "100% -100%",
    scrub: 0.5,
  },
  yPercent: 100,
});


gsap.from('.ubicacion-wrapper', {
  scrollTrigger: {
    trigger: 'section',
    start: "0% 100%",
    end: "100% 100%",
    scrub: 0.1,
  },
  scale: 0,
});

