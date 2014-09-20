var path = require('path'),
    childProcess = require('child_process'),
    phantomjs = require('phantomjs');

// Link to run in phantomjs
var href = "https://scrollback.io/hasgeek?tab=people";

// Arguments for child process of node
var childArgs = [
    path.join(__dirname, 'phantom.js'),
    href
];

// Run the child process
var proc = childProcess.execFile(phantomjs.path, childArgs, function (err, stdout, stderr) {});

// Log the phantom output on the console
proc.stdout.on('data', function (data) {
    console.log(data);
});