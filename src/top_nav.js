const topNav = () => {
  const nav = document.createElement('nav');
  nav.innerHTML = ` <a href="#" id="home">Home</a>
                    <a href="#" id="menu">Menu</a>
                    <a href="#" id="about">About</a>`;

  nav.className = 'fixed_nav d-flex align-items-center justify-content-center';
  return nav;
};

export default topNav;
