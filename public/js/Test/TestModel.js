function generateDummyTest() {
  var delay = 7000 + Math.random() * 7000;
  var testPassed = Math.random() > 0.5;

  return function(callback) {
    setTimeout(function() {
      callback(testPassed);
    }, delay);
  };
}

var tests = [
  { description: "commas are rotated properly",          run: generateDummyTest(), status: 'Not Started Yet' },
  { description: "exclamation points stand up straight", run: generateDummyTest(), status: 'Not Started Yet' },
  { description: "run-on sentences don't run forever",   run: generateDummyTest(), status: 'Not Started Yet' },
  { description: "question marks curl down, not up",     run: generateDummyTest(), status: 'Not Started Yet' },
  { description: "semicolons are adequately waterproof", run: generateDummyTest(), status: 'Not Started Yet' },
  { description: "capital letters can do yoga",          run: generateDummyTest(), status: 'Not Started Yet' }
];

// wrapper function to take in the index position of the specific test
// sort of coupled here because we need to data-bind, render the test result when the time is up. can be solved using js frameworks like React or Angular.

function returnResult(i) {
    function logResult(testPassed) {
      if (testPassed === true) {
        tests[i].status = 'Passed';
        console.log(tests[i].status + ': ' + tests[i].description);
        renderTestResult(i);
      } else {
        tests[i].status = 'Failed';
        console.log(tests[i].status + ': ' + tests[i].description);
        renderTestResult(i);
      }
    }
    return logResult;
};

function runTests(tests) {
  console.log('Test Running...');
  for (var i = 0; i < tests.length; i++) {
    var runTest = tests[i].run;
    tests[i].status = 'Running';
    runTest(returnResult(i));
  }
};