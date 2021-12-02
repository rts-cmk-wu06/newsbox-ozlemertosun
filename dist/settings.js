"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var sections = ['world']; // const sections = ['world', 'health', 'sports', 'business', 'travel']

  var apiKey = '5zl50zE6rFMVoQGAhRBziVlfZlAeTPPc';

  var createElement = function createElement(tag, options) {
    return Object.assign(document.createElement(tag), options);
  };

  sections.forEach(function (section) {
    axios.get("https://api.nytimes.com/svc/topstories/v2/".concat(section, ".json?api-key=").concat(apiKey)).then(function (response) {
      //vælger først ul'en i settings.html
      var settingsList = document.querySelector('.SettingsList'); //derefter indsættes li i ul med

      var settingsListItem = createElement('li', {
        className: 'settingsList__item'
      });
      settingsList.appendChild(settingsListItem); //li'en skal indeholde et p-tag

      var settingListItemCategoryName = createElement('p', {
        className: 'settingsList__item-category-name',
        textContent: response.data.section
      });
      settingsListItem.appendChild(settingListItemCategoryName);
      var toggleButton = createElement('button', {
        className: 'settingList__button settingList-button-active'
        /*  id: 'button-${element}',  */

      });
      settingsListItem.appendChild(toggleButton);
      var toggleButtonIcon = createElement('i', {
        className: 'fas fa-circle settingsList__button-icon'
      });
      toggleButton.appendChild(toggleButtonIcon);
    });
  });
});

if (localStorage.getItem(eSwitch.id.replace('settingList__button', '')) == 'true') {
  eSwitch.classList.add('settingList__button-active');
} else {
  eSwitch.classList.remove('settingList__button');
}