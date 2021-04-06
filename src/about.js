const about = () => {
  const theAbout = document.createElement('div');
  theAbout.innerHTML = ` <div class="about_content">
                          <h2 class="about_title">LUNA30</h2>
                          <p class="about_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue.</p>
                        </div> `;
  theAbout.className = 'middle bkg-img-about';

  return theAbout;
};

export default about;