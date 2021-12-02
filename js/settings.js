window.addEventListener('DOMContentLoaded', () => {
    const sections = ['world'];
    // const sections = ['world', 'health', 'sports', 'business', 'travel']
    const apiKey = '5zl50zE6rFMVoQGAhRBziVlfZlAeTPPc'

const createElement = (tag, options) => {
    return Object.assign(document.createElement(tag), options)
}

    sections.forEach((section) => {
        axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`)
        .then((response) =>  {

            //vælger først ul'en i settings.html
            const settingsList = document.querySelector('.SettingsList')

            //derefter indsættes li i ul med
            const settingsListItem = createElement('li', {
                className: 'settingsList__item'})
                settingsList.appendChild(settingsListItem)

            //li'en skal indeholde et p-tag
            const settingListItemCategoryName = createElement('p', {
                className: 'settingsList__item-category-name',
                textContent: response.data.section
            })
            settingsListItem.appendChild(settingListItemCategoryName)
                

            const toggleButton = createElement('button', {
                className: 'settingList__button settingList-button-active',
               /*  id: 'button-${element}',  */
            })
            settingsListItem.appendChild(toggleButton)
               
            const toggleButtonIcon = createElement('i', {
                className: 'fas fa-circle settingsList__button-icon',
            })
            toggleButton.appendChild(toggleButtonIcon)
    })
   
   });

});


if (localStorage.getItem(eSwitch.id.replace('settingList__button', '')) == 'true') {

    eSwitch.classList.add('settingList__button-active')
    
    } else {
    
    eSwitch.classList.remove('settingList__button')
    
    }
