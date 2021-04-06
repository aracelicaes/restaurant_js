import topNav from './top_nav';
import footer from './footer';
import home from './home';
import menu from './menu';
import about from './about';

const topNavigation = document.getElementsByClassName('theHeader')[0];
topNavigation.appendChild(topNav());

const theFooter = document.getElementsByClassName('theFooter')[0];
theFooter.appendChild(footer());

const theContent = document.getElementsByClassName('theContent')[0];
theContent.innerHTML = '';
theContent.appendChild(home());

const homeLink = document.querySelector('#home');
homeLink.addEventListener('click', (e) => {
  e.preventDefault();
  theContent.innerHTML = '';
  theContent.appendChild(home());
});

const menuLink = document.querySelector('#menu');
menuLink.addEventListener('click', (e) => {
  e.preventDefault();
  theContent.innerHTML = '';
  theContent.appendChild(menu());
});

const aboutLink = document.querySelector('#about');
aboutLink.addEventListener('click', (e) => {
  e.preventDefault();
  theContent.innerHTML = '';
  theContent.appendChild(about());
});