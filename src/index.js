import topNav from './top_nav';
import footer from './footer';
import home from './home';
import menu from './menu';
import about from './about';

const theContent = document.getElementById('content');
const insideContent = document.createElement('div');
insideContent.className = 'main-content';

const top = () => {
  theContent.appendChild(topNav());
};

const bottom = () => {
  theContent.appendChild(footer());
};

insideContent.innerHTML = '';
top();
theContent.appendChild(insideContent);
insideContent.appendChild(home());
bottom();

const homeLink = document.querySelector('#home');
homeLink.addEventListener('click', (e) => {
  e.preventDefault();
  insideContent.innerHTML = '';
  insideContent.appendChild(home());
});

const menuLink = document.querySelector('#menu');
menuLink.addEventListener('click', (e) => {
  e.preventDefault();
  insideContent.innerHTML = '';
  insideContent.appendChild(menu());
});

const aboutLink = document.querySelector('#about');
aboutLink.addEventListener('click', (e) => {
  e.preventDefault();
  insideContent.innerHTML = '';
  insideContent.appendChild(about());
});