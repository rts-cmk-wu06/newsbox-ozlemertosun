
window.addEventListener('DOMContentLoaded', () => {
    const sections = ['world', 'health', 'sports', 'business', 'travel']
    const apiKey = '5zl50zE6rFMVoQGAhRBziVlfZlAeTPPc'

const createElement = (tag, options) => {
    return Object.assign(document.createElement(tag), options)
}

    sections.forEach((section) => {
        axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`)
        .then((response) =>  {
            console.log(response)

            //vælger først ul'en i settings.html
            const settingsList = document.querySelector('.SettingsList')

            //derefter indsættes li i ul med
            const settingsListItem = createElement('li', {
                className: 'settingsList__item'})
                settingsList.appendChild(settingsListItem)

            //li'en skal indeholde et p-tag
            const settingListItemCategoryName = createElement('p', {
                className: 'settingsList__item-category-name'})
                settingsListItem.appendChild(settingListItemCategoryName)
            
            // inde i li'en oprettes der en label, som skal blive til checkbox
            const checkboxWrap = createElement('label', {
                className: 'settingList__item-checkbox-wrap'
            })
            settingsListItem.appendChild(checkboxWrap)

            //checkboxen skal indeholde et input, sæt attribute til checkbox
            const checkboxInput = createElement('input', {
                className: 'settingsList__item-checkbox-input'
            })
            checkboxInput.setAttribute('type', 'checkbox')
            checkboxWrap.appendChild(checkboxInput)

            //checkboxen skal indeholde et span
            const checkboxSwitch = createElement('span', {
                className: 'settingsList__item-checkbox-switch'})
                checkboxWrap.appendChild(checkboxSwitch)
            })
    })
})


