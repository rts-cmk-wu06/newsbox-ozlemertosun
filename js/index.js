
let newsURL = window.location.search;

let params = new URLSearchParams(newsURL)

const newsSections = ['world', /* 'health', 'sports', 'business', 'travel' */];

const apiKey = '5zl50zE6rFMVoQGAhRBziVlfZlAeTPPc'

let url = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=yourkey' + apiKey;


newsSections.forEach(element => {
    if (localStorage.getItem(element) == "true"){
        createNewsSections(element);
    }})

    function createNewsSections(element){
        axios.get(`https://api.nytimes.com/svc/topstories/v2/${element}.json?api-key=5zl50zE6rFMVoQGAhRBziVlfZlAeTPPc`)
        .then((response) => {
            console.log(response); 
        });
    }

 





/* axios.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=5zl50zE6rFMVoQGAhRBziVlfZlAeTPPc').then( response => console.log(response)); */






