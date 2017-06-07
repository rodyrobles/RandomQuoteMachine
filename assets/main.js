$(document).ready(function() {
	function getNewQuote() {
		$.ajax({
			data: {
			method: 'getQuote',
			format: 'json',
			lang: 'en'
			},
			success: function(response) {
				console.log(response/*.quoteText*/)
			}
		});
		}
	getNewQuote();
});


/*
Website
https://forismatic.com/en/api/

url to get the quote
https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en


*/