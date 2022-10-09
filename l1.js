const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://bloomberg-market-and-financial-news.p.rapidapi.com/market/auto-complete',
  params: {query: '<REQUIRED>'},
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'bloomberg-market-and-financial-news.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
