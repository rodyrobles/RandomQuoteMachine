$(document).ready(function() {
    var quote;
    var author;

    function getNewQuote() {
        $.ajax({
            url: 'https://api.forismatic.com/api/1.0/',
            jsonp: 'jsonp', // added to request data from a different domain
            dataType: 'jsonp', // added to request data from a different domain
            data: {
                method: 'getQuote',
                format: 'jsonp', //instead of json
                lang: 'en'
            },
            success: function(response) {
                quote = response.quoteText;
                author = response.quoteAuthor;
                $('#quote').text(quote);
                if (author) {
                    $('#author').text('said by ' + author);
                } else {
                    $('#author').text('unknown');
                }
            }
        });
    }
    $('.getQuote').on('click', function(event) {
    		event.preventDefault();
        getNewQuote();

    $('.shareQuote').on('click', function(event) {
    		event.preventDefault();
    		window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote+'-'+author))}); 


    });
});


// console.log(response.quoteText) //commented to see all data


/*
Website
https://forismatic.com/en/api/

url to get the quote
https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en


*/
