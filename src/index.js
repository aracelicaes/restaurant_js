import topNav from './top_nav';
import footer from './footer';
import home from './home';

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

const homeMiddle = document.getElementsByClassName('theContent')[0];
console.log(homeMiddle);
homeMiddle.appendChild(home());
