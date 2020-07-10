var reporter = require("jasmine-json-reporter");
jasmine.getEnv().addReporter(reporter);
global.FILL_ME_IN = "Fill this value in";

describe("Bare Minimum Requirements", function() {
  require("../koans/AboutExpects.js");
  require("../koans/AboutArrays.js");
  require("../koans/AboutFunctions.js");
  require("../koans/AboutObjects.js");
  require("../koans/AboutArrayMethods.js");
});

/*
xdescribe('Advanced Content', function() {
  require('../koans/Advanced-AboutMutability.js');
    require('../koans/Advanced-AboutInheritance.js');
  require('../koans/Advanced-AboutApplyingWhatWeHaveLearnt.js');
});
*/
