
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

export function homeContent() {
  const element = document.createElement('div');
  const title = document.createElement('h3');
  const text = document.createElement('p');
  const img = document.createElement('IMG');
  title.innerText = 'Welcome';
  text.innerText = 'Nulla pharetra diam sit amet nisl. Convallis convallis tellus id interdum velit. Et malesuada fames ac turpis egestas. Vitae elementum curabitur vitae nunc sed. Et tortor at risus viverra adipiscing at in. In dictum non consectetur a. At erat pellentesque adipiscing commodo elit at.'
  img.src = 'food.jpg';
  element.append(title, text, img);
  element.classList.add('tabContent');

  return element;
}