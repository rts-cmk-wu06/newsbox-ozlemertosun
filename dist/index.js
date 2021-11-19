"use strict";

//const URL = 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=yourkey';
axios.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=5zl50zE6rFMVoQGAhRBziVlfZlAeTPPc').then(function (response) {
  return console.log(response);
}); //response.result.data