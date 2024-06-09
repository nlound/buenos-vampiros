const heightY = 130;
const offsetY = 30;
const revolution = 10;

const animateThirdNumber = () => {
  gsap.set("#number3", {
    y: -heightY * 9 + offsetY,
  });

  gsap.to("#number3", {
    y: heightY + offsetY,
    duration: revolution,
    ease: "linear",
  });
}

const animateSecondNumber = () => {
  gsap.set("#number2", {
    y: -heightY * 9 + offsetY,
  });

  gsap.to("#number2", {
    y: heightY + offsetY,
    duration: revolution * 10,
    ease: "linear",
  });
}

const animateFirstNumber = () => {
  gsap.set("#number1", {
    y: -heightY * 9 + offsetY,
  });

  gsap.to("#number1", {
    y: heightY + offsetY,
    duration: revolution * 10 * 10,
    ease: "linear",
    onComplete: () => window.location.href = "formulario.html",
  });
};

animateFirstNumber();
animateThirdNumber();
animateSecondNumber();

