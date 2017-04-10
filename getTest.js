const request = require('request');
const fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
	.on('error' , function (err) {
	  throw err;
	 })

	.on('response', function (response) {
	  console.log('Response Status Code: ', response.statusMessage, 'Response content ', response.headers['content-type']);
	 })
  .on('data', () => console.log('downloading file'))
  .on('end', () =>  console.log('File downloaded'))
	.pipe(fs.createWriteStream('./future.jpg'))
  .on('close', () => console.log('File written'));