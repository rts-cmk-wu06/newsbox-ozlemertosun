"use strict";

var newsURL = window.location.search;
var params = new URLSearchParams(newsURL);
var newsSections = ['world'
/* 'health', 'sports', 'business', 'travel' */
];
var apiKey = '5zl50zE6rFMVoQGAhRBziVlfZlAeTPPc';
var url = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=yourkey' + apiKey;
newsSections.forEach(function (element) {
  if (localStorage.getItem(element) == "true") {
    createNewsSections(element);
  }
});

function createNewsSections(element) {
  axios.get('https://api.nytimes.com/svc/topstories/v2/${element}.json?api-key=5zl50zE6rFMVoQGAhRBziVlfZlAeTPPc').then(function (response) {
    return console.log(response);
  });
}

;
/* axios.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=5zl50zE6rFMVoQGAhRBziVlfZlAeTPPc').then( response => console.log(response)); */