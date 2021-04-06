const footer = () => {
  const footer = document.createElement('footer');
  const insideFooter = document.createElement('p');
  insideFooter.innerText = 'Coded with ♡ by Ara CE';

  footer.className = 'theFooter d-flex align-items-center justify-content-center';
  footer.appendChild(insideFooter);

  return footer;
};

export default footer;