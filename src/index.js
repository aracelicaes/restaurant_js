import topNav from './top_nav';
import footer from './footer';
import home from './home';
import menu from './menu';
import about from './about';


function component() {
  return 'IM WORKING JUST FINE BEAUTIFULLY!';
}

console.log(component());

const topNavigation = document.getElementsByClassName('theHeader')[0];
console.log(topNavigation);
topNavigation.appendChild(topNav());

const theFooter = document.getElementsByClassName('theFooter')[0];
console.log(theFooter);
theFooter.appendChild(footer());

const theContent = document.getElementsByClassName('theContent')[0];
console.log(theContent);
theContent.innerHTML = '';
theContent.appendChild(home());

const homeLink = document.querySelector('#home');
homeLink.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('helloooo home');
  theContent.innerHTML = '';
  theContent.appendChild(home());
});

const menuLink = document.querySelector('#menu');
menuLink.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('helloooo beautiful');
  theContent.innerHTML = '';
  theContent.appendChild(menu());
});

const aboutLink = document.querySelector('#about');
aboutLink.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('sarh smiles');
  theContent.innerHTML = '';
  theContent.appendChild(about());
})