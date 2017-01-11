// npm install --save critical
//
// TODO rewrite snippet with getting html from URL
// try to use this.
// var afterLoad=require('after-load');
// afterLoad('https://google.com',function(html){
//     console.log(html);
// })
var critical = require('critical');

critical.generate({
    base: './',
    src: 'index.html',
    dest: 'critical.css',
    minify: true,
    width: 1300,
    height: 900
});