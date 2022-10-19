let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme_button');
themeButton.onclick = function() {
    page.classList.toggle('Ltheme');
    page.classList.toggle('Dtheme');
  };
  