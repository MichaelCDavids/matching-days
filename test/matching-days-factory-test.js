describe('The getDay Function',function(){
   it("should return and index of the day it lands on",function(){
      var matchingDaysInstance = MatchingDays();
      assert.equal(matchingDaysInstance.indexOfDay("12-02-1992"),3);
   });
   it('should return and index of the day it lands on',function(){
      var matchingDaysInstance = MatchingDays();
      assert.equal(matchingDaysInstance.indexOfDay("02-29-1992"),6);
   });
});
describe('The dayOfWeek Function',function(){
   it('should return the day of the week a date lands on',function(){
      var matchingDaysInstance = MatchingDays();
      const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      assert.equal(weekdays[matchingDaysInstance.indexOfDay("12-02-1992")],"Wednesday");
   });
   it('should return the day of the week a date lands on',function(){
      var matchingDaysInstance = MatchingDays();
      const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      assert.equal(weekdays[matchingDaysInstance.indexOfDay("02-29-1992")],"Saturday");
   });
});
describe('The matchDay Function',function(){
   it('should return false if the days of two dates do not match ',function(){
      var matchingDaysInstance = MatchingDays();
      const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      assert.equal(matchingDaysInstance.match("12-02-1992","02-29-1992"),false);
   });
   it('should return true if both of the days of two dates match ',function(){
      var matchingDaysInstance = MatchingDays();
      const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      assert.equal(matchingDaysInstance.match("02-12-1992","02-12-1992"),true);
   });
});
describe('The highlightDays Function',function(){

   it('should assign firstDay and class to the day it lands on if first date has been entered', function() {
      var matchingDaysInstance = MatchingDays();
      assert.deepEqual(matchingDaysInstance.highlight("12-02-1992"),
      { Friday: {day: "Friday"},
      Monday: {day: "Monday"},
      Saturday: {day: "Saturday"},
      Sunday: {day: "Sunday"},
      Thursday: {day: "Thursday"},
      Tuesday: {day: "Tuesday"},
      Wednesday: {Day1 : "firstDay", day: "Wednesday"}
      });
   });

   it('should assign secondDay and class to the day it lands on if second date has been entered', function() {
      var matchingDaysInstance = MatchingDays();
      assert.deepEqual(matchingDaysInstance.highlight("00-00-0000","12-03-1992"),
      { Friday: {day: "Friday"},
      Monday: {day: "Monday"},
      Saturday: {day: "Saturday"},
      Sunday: {day: "Sunday"},
      Thursday: {Day2 : "secondDay", day: "Thursday"},
      Tuesday: {day: "Tuesday"},
      Wednesday: {day: "Wednesday"}
      });
   });

   it('should assign firstDay and secondDay classes to the days it lands on and if different dates have been entered', function() {
      var matchingDaysInstance = MatchingDays();
      assert.deepEqual(matchingDaysInstance.highlight("12-02-1992", "12-03-1992"),
      { Friday: {day: "Friday"},
      Monday: {day: "Monday"},
      Saturday: {day: "Saturday"},
      Sunday: {day: "Sunday"},
      Thursday: {Day2 : "secondDay",day: "Thursday"},
      Tuesday: {day: "Tuesday"},
      Wednesday: {Day1 : "firstDay", day: "Wednesday"}
      });
   });

   it('should assign matchingDays class if the same dates have been entered', function() {
      var matchingDaysInstance = MatchingDays();
      assert.deepEqual(matchingDaysInstance.highlight("12-02-1992", "12-02-1992"),
      { Friday: {day: "Friday"},
      Monday: {day: "Monday"},
      Saturday: {day: "Saturday"},
      Sunday: {day: "Sunday"},
      Thursday: {day: "Thursday"},
      Wednesday: {DaysMatch : "matchingDays", day: "Wednesday"},
      Tuesday: {day: "Tuesday"}
      });
   });
});
