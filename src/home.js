
export function home() {
  
  const button = document.createElement('button');
  button.classList.add('homeNavButton');
  button.innerText = "Home";

  return button;
}

export function homePage() {
  const element = document.createElement('h1');
  element.innerText = 'Erimeri';

  return element;
}