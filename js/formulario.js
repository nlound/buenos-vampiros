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
    end: "100% -200%",
    scrub: 0.5,
  },
  yPercent: 100,
});

gsap.from('#envelope-card', {
  scrollTrigger: {
    immediateRender: false,
    trigger: 'section',
    start: "0% 50%",
    end: "100% 100%",
    scrub: 0.5,
  },
  y: 300,
});


gsap.to('#envelope-2', {
  scrollTrigger: {
    immediateRender: false,
    trigger: 'section',
    start: "0% 50%",
    end: "100% 50%",
    scrub: 0.5,
  },
  x: -100,
  y: -10,
  rotation: -10,
});

gsap.to('#envelope-3', {
  scrollTrigger: {
    immediateRender: false,
    trigger: 'section',
    start: "0% 50%",
    end: "100% 50%",
    scrub: 0.5,
  },
  x: 100,
  y: 0,
  rotation: 10,
});


const enviarBtn = document.querySelector("#boton-enviar");
const cerrarBtn = document.querySelector("#boton-cerrar");
const nombreInput = document.querySelector("#nombre-vb");
const emailInput = document.querySelector("#email-vb");

const modal = document.querySelector("#modal");

cerrarBtn.addEventListener("click", () => {
  modal.classList.remove("modal-show");
  window.location.href = "ubicacion.html";
})

enviarBtn.addEventListener("click", (event) => {
  const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  if (nombreInput.value !== "" && regex.test(emailInput.value)) {
    event.preventDefault();
    modal.classList.add("modal-show");
  }
})
