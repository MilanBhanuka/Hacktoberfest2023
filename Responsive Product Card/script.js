var popupViews = document.querySelectorAll('.popup-view');
var popupBtns = document.querySelectorAll('.popup-btn');
var closeBtns = document.querySelectorAll('.close-btn');
//javascript for quick view button
var popup = function(popupClick) {
      popupViews[popupClick].classList.add('active');
}
popupBtns.forEach((popupBtn, i) => {
      popupBtn.addEventListener("click", () => {
            popup(i);
      });
});
//javascript for close button
closeBtns.forEach((closeBtn) => {
      closeBtn.addEventListener("click", () => {
            popupViews.forEach((popupView) => {
                  popupView.classList.remove('active');
            });
      });
});