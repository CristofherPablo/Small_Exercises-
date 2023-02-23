const buttonElement = document.querySelector("button");

function addCSS() {
  const textAreaElement = document.querySelector("textarea");
  const css = textAreaElement.value;
  const foreFront = document.querySelector('#foreFront');
  foreFront.style.cssText = css;
}
buttonElement.addEventListener('click', addCSS);
