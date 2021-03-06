const topNav = () => {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  nav.innerHTML = ` <a href="#" id="home">Home</a>
                    <a href="#" id="menu">Menu</a>
                    <a href="#" id="about">About</a>`;

  header.className = 'theHeader';
  nav.className = 'fixed_nav d-flex align-items-center justify-content-center';
  header.appendChild(nav);
  return header;
};

export default topNav;
