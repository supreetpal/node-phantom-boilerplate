var page = require('webpage').create(),
    fs = require('fs');

// To support logging of phantomjs
page.onConsoleMessage = function (msg, lineNum, sourceId) {
    console.log(msg);
};

// Open the link
page.open(phantom.args, function () {
    var pageOutput = page.evaluate(function () {
        return document.getElementsByClassName("content-area")[0].innerText;
    });
    fs.write('hasgeek.txt', pageOutput, {});
    console.log('done');
});