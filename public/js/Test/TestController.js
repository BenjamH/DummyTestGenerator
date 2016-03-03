$(document).ready(function() {

  renderInitialTests(tests);
  initiateTesting(tests);

});

function initiateTesting(tests) {
  $button = $('button');
  $button.on('click', function(e) {
    e.preventDefault();
    processTest(tests);
  })
};

function processTest(tests) {
  runTests(tests);
  renderProcessingTests(tests);
};