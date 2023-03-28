function showModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';

  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
}

function hideModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerId) {
  // Modal
  const modal = document.querySelector(modalSelector);
  const btnModalCall = document.querySelectorAll(triggerSelector);

  function modalTrigger() {
    btnModalCall.forEach((btn) => {
      btn.addEventListener('click', () => {
        showModal(modalSelector, modalTimerId);
      });
    });
  }
  modalTrigger();

  //кликаем на саму страницу
  modal.addEventListener('click', (event) => {
    if (
      event.target === modal ||
      event.target.getAttribute('data-close') == ''
    ) {
      hideModal(modalSelector);
    }
  });

  //escape close the modal
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape' && modal.classList.contains('show')) {
      hideModal(modalSelector);
    }
  });

  function modalShowInterval() {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      showModal(modalSelector, modalTimerId);
      // удаляем eventListener, чтобы при долистовании до конца страницы, модальное окно появилось только один разу
      window.removeEventListener('scroll', showModalByScroll);
    }
  }
  window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export { hideModal };
export { showModal };
