var search = document.querySelector(".button__hotel-search");
var modal = document.querySelector(".hotel__modal");
var formValidation = modal.querySelector(".hotel-search__form");
var arrival = modal.querySelector("[name=arrival]");
var departure = modal.querySelector("[name=departure]");
var adults = modal.querySelector("[name=adults]");



// появление/исчезновение формы поиска
  search.addEventListener("click", function(e) {
    e.preventDefault();

    modal.classList.toggle("hotel__modal-show");
  });

// валидация формы
  formValidation.addEventListener("submit", function(e) {

    if (!arrival.value || !departure.value || !adults.value) {
      e.preventDefault();

    }

  });


