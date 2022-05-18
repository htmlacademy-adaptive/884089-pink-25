let tel = document.querySelector('.person-data__input--third--tel');
let mail = document.querySelector('.person-data__input--third--mail');
let visibled = document.querySelector ('.modal--visibled');
let failModal = document.querySelector('.modal--invalid');
let form = document.querySelector('.form');
let allOk = document.querySelector('.modal--success');
let modal = document.querySelector('.modal');
let modalOne = document.querySelector('.modal__button-form--first--js');
let modalTwo = document.querySelector('.modal__button-form--second--js');

form.onsubmit = function(evt) {
  evt.preventDefault();


  if ( mail.value == 'Введите почту *' || tel.value == 'Номер, пожалуйста') {
    allOk.classList.remove('modal--visibled');
    failModal.classList.add('modal--visibled');
  } else {
    failModal.classList.remove('modal--visibled');
    allOk.classList.add('modal--visibled');
  }

};

modalOne.onclick = function() {
  failModal.classList.remove('modal--visibled');
};

modalTwo.onclick = function() {
  allOk.classList.remove('modal--visibled');
};
