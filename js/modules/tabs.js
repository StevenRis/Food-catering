function tabs(
  tabsSelector,
  tabsContentSelector,
  tabsParentSelector,
  activeClass
) {
  //tabs
  const tabs = document.querySelectorAll(tabsSelector);
  const tabsContent = document.querySelectorAll(tabsContentSelector);
  const tabsParent = document.querySelector(tabsParentSelector);

  function hideTabContent() {
    //перебираем табы
    tabsContent.forEach((item) => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
    tabs.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }

  // item = 0 - выбор по умолчанию первого таба
  function showtabContent(item = 0) {
    tabsContent[item].classList.add('show', 'fade');
    tabsContent[item].classList.remove('hide');
    tabs[item].classList.add(activeClass);
  }

  hideTabContent();
  showtabContent();

  // делегирование события
  tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showtabContent(i);
        }
      });
    }
  });
}

export default tabs;
