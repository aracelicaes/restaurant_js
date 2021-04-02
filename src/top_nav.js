function topNav() {
  const nav = document.createElement('nav');
  nav.innerHTML = ` <a href="#">Home</a>
                    <a href="#">Menu</a>
                    <a href="#">About</a>`;

  nav.className = 'fixed_nav d-flex align-items-center justify-content-center';
  return nav;
}

export default topNav;
