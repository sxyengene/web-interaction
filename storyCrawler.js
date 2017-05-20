const cheerio = require('cheerio');
const http = require('http');
const fs = require('file');

var host = 'http://m.wukongks.com';
var path = '/book/read?bkid=56983105&crid=188027&_reader=1';

var url = host+path;
http.get(url, function(res) {
    var html = '';
    res.on('data', function(data) {
        html += data;
    });
    res.on('end', function() {
        var  $ = cheerio.load(html)
        handleHtml($);
    });
});


function handleHtml($){
	var title = $('.title').text();
	var text = $('.text').html();
	// console.log(title)
	console.log(text)
	// file.
}