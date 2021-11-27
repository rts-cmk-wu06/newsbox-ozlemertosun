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
      settingsListItem.appendChild(settingListItemCategoryName); // inde i li'en oprettes der en label, som skal blive til checkbox

      var checkboxWrap = createElement('label', {
        className: 'settingList__item-checkbox-wrap'
      });
      settingsListItem.appendChild(checkboxWrap); //checkboxen skal indeholde et input, sæt attribute til checkbox

      var checkboxInput = createElement('input', {
        className: 'settingsList__item-checkbox-input'
      });
      checkboxInput.setAttribute('type', 'checkbox');
      checkboxWrap.appendChild(checkboxInput); //checkboxen skal indeholde et span

      var checkboxSwitch = createElement('span', {
        className: 'settingsList__item-checkbox-switch'
      });
      checkboxWrap.appendChild(checkboxSwitch);
    });
  });
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('settingsList__item-checkbox-input')) {
      if (!e.target.hasAttribute('checked')) {
        console.log('checked');
        e.target.setAttribute('checked', 'checked');
      } else {
        e.target.removeAttribute('checked');
        console.log('unchecked');
      }
    }
  });
});