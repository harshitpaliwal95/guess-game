'use strict';
const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

// use queryselectorall becouse useing all the classes in same name
const btnCloseModal = document.querySelectorAll('.close-modal');

const btnOpenModel = document.querySelectorAll('.show-modal');

const openModel = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// console.log(btnOpenModel);

for (let i = 0; i < btnOpenModel.length; i++) {
  btnOpenModel[i].addEventListener('click', openModel);
}

btnCloseModal[0].addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

// e in function is a parameter
document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
  // if (e.key === 'Escape') {
  // if does not contan hidden class

  // if (!modal.classList.contains('hidden')) {
  //   closeModel();
  // }
  // }
});
