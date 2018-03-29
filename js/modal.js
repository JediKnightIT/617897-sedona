var search = document.querySelector(".button__hotel-search");
var modal = document.querySelector(".hotel__modal");

  search.addEventListener("click", function(e) {
    e.preventDefault();

    modal.classList.toggle("hotel__modal-show");
  });
