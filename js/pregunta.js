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
    end: "100% -300%",
    scrub: 0.5,
  },
  yPercent: 100,
});

const enviarBtn = document.querySelector("#boton-enviar");
const cerrarCorrectoBtn = document.querySelector("#boton-cerrar-correcto");
const cerrarIncorrectoBtn = document.querySelector("#boton-cerrar-incorrecto");
const inputRespuesta = document.querySelector("#input-respuesta");
const modal = document.querySelector("#modal");

const respuestaBien = document.querySelector("#modal-dialog-bien");
const respuestaMal = document.querySelector("#modal-dialog-mal");

const cerrarModal = () => {
  modal.classList.remove("modal-show");
  inputRespuesta.value = "";

}

cerrarCorrectoBtn.addEventListener("click", () => {
  cerrarModal();
})

cerrarIncorrectoBtn.addEventListener("click", () => {
  cerrarModal();
})

enviarBtn.addEventListener("click", () => {
  respuestaBien.classList.remove("respuesta-show");
  respuestaMal.classList.remove("respuesta-show");
  modal.classList.add("modal-show");
  if (inputRespuesta.value != 2018) {
    respuestaBien.classList.add("respuesta-show");
  } else {
    respuestaMal.classList.add("respuesta-show");
  }
})
