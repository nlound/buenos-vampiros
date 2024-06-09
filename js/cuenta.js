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
    end: "100% -500%",
    scrub: 0.5,
  },
  yPercent: 100,
});

gsap.to('#envelope-1', {
  scrollTrigger: {
    immediateRender: false,
    trigger: 'section',
    start: "0% 50%",
    end: "100% 50%",
    scrub: 0.5,
  },
  x: -10,
  y: 10,
  rotation: -20,
});

gsap.to('#envelope-2', {
  scrollTrigger: {
    immediateRender: false,
    trigger: 'section',
    start: "0% 50%",
    end: "100% 50%",
    scrub: 0.5,
  },
  x: 100,
  y: -10,
  rotation: 10,
});

gsap.to('#envelope-3', {
  scrollTrigger: {
    immediateRender: false,
    trigger: 'section',
    start: "0% 50%",
    end: "100% 50%",
    scrub: 0.5,
  },
  x: -100,
  y: 0,
  rotation: -10,
});

gsap.to('#envelope-4', {
  scrollTrigger: {
    immediateRender: false,
    trigger: 'section',
    start: "0% 50%",
    end: "100% 50%",
    scrub: 0.5,
  },
  x: 150,
  y: 50,
  rotation: 15,
});



