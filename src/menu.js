const menu = () => {
  const theMenu = document.createElement('div');
  theMenu.innerHTML = ` <div class="menu_element d-flex">
                        <div class="menu_img_container">
                          <img src="imgs/meat.png" alt="Luna Asada Restaurant Js" class="menu_img">
                        </div>
                        <div class="element_text">
                          <div class="inside_element">
                            <h3 class="menu_title">LUNA ASADA</h3>
                            <p class="menu_text">Deliciosa picaña, o rib eye asado al carbon. Incluye papas a elegir, chimichurri y una ensalada  de hojas con toppings de su eleccion.</p>
                            <p class="menu_price">$275</p>
                          </div>
                        </div>
                      </div>
                      <div class="menu_element d-flex">
                        <div class="menu_img_container">
                          <img src="imgs/burguer.png" alt="Luna Asada Restaurant Js" class="menu_img">
                        </div>
                        <div class="element_text">
                          <div class="inside_element">
                            <h3 class="menu_title">LUNA BURGUER</h3>
                            <p class="menu_text">Deliciosa picaña, o rib eye asado al carbon. Incluye papas a elegir, chimichurri y una ensalada  de hojas con toppings de su eleccion.</p>
                            <p class="menu_price">$250</p>
                          </div>
                        </div>
                      </div>
                      <div class="menu_element d-flex">
                        <div class="menu_img_container">
                          <img src="imgs/crisps.png" alt="Luna Asada Restaurant Js" class="menu_img">
                        </div>
                        <div class="element_text">
                          <div class="inside_element">
                            <h3 class="menu_title">LUNA CRISPS</h3>
                            <p class="menu_text">Deliciosa picaña, o rib eye asado al carbon. Incluye papas a elegir, chimichurri y una ensalada  de hojas con toppings de su eleccion.</p>
                            <p class="menu_price">$180</p>
                          </div>
                        </div>
                      </div>
                      <div class="menu_element d-flex">
                        <div class="menu_img_container">
                          <img src="imgs/brownies.png" alt="Luna Asada Restaurant Js" class="menu_img">
                        </div>
                        <div class="element_text">
                          <div class="inside_element">
                            <h3 class="menu_title">DATE BROWNY</h3>
                            <p class="menu_text">Deliciosa picaña, o rib eye asado al carbon. Incluye papas a elegir, chimichurri y una ensalada  de hojas con toppings de su eleccion.</p>
                            <p class="menu_price">$150</p>
                          </div>
                        </div>
                      </div>
                      <div class="menu_element d-flex">
                        <div class="menu_img_container">
                          <img src="imgs/cheesecake.png" alt="Luna Asada Restaurant Js" class="menu_img">
                        </div>
                        <div class="element_text">
                          <div class="inside_element">
                            <h3 class="menu_title">CHEESECAKE</h3>
                            <p class="menu_text">Deliciosa picaña, o rib eye asado al carbon. Incluye papas a elegir, chimichurri y una ensalada  de hojas con toppings de su eleccion.</p>
                            <p class="menu_price">$150</p>
                          </div>
                        </div>
                      </div>
                      <div class="menu_element d-flex">
                        <div class="menu_img_container">
                          <img src="imgs/blumonade.png" alt="Luna Asada Restaurant Js" class="menu_img">
                        </div>
                        <div class="element_text">
                          <div class="inside_element">
                            <h3 class="menu_title">BLUMONADE</h3>
                            <p class="menu_text">Deliciosa picaña, o rib eye asado al carbon. Incluye papas a elegir, chimichurri y una ensalada  de hojas con toppings de su eleccion.</p>
                            <p class="menu_price">$85</p>
                          </div>
                        </div>
                      </div> `;
  theMenu.className = 'middle_menu';

  return theMenu;
};

export default menu;
