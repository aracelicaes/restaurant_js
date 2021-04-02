function home() {
  const homeMiddle = document.createElement('div');
  homeMiddle.innerHTML = ` <h1 class="logo">LUNA30</h1>
                            <div class="text_circle">
                            </div>
                            <p class="text">Where great food and great drinks meet once a month, every full moon.</p> `;
  homeMiddle.className = 'middle bkg-img-home';
  return homeMiddle;
}

export default home;