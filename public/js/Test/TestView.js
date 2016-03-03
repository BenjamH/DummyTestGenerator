function renderInitialTests(tests) {
  $tests = $("#tests");
  for (var i = 0; i < tests.length; i++) {
    var num = i + 1;
    $tests.append("<li id='test" + num + "' + class='not-started'>" + tests[i].status + ": " + tests[i].description + "</li>");
  };
};

function renderProcessingTests(tests) {
  for (var i = 0; i < tests.length; i++) {
    var num = i + 1;
    $test = $("#test" + num);
    $test.removeClass('not-started');
    $test.addClass('processing');
    $test.text(tests[i].status + ": " + tests[i].description);
  }
}

function renderTestResult(i) {
    var num = i + 1;
    $test = $("#test" + num);
    $test.removeClass('processing');
    $test.addClass(tests[i].status);
    $test.text(tests[i].status + ": " + tests[i].description);
}



// promises easier to follow then callbacks. callbacks need to go back and forth to spot where data is flowing, for promises the data is flowing one-way. don't access the global tests object, can just take in the string, so function can be used elsewhere.