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
   it('should highlight the correct day of the week a date lands on',function(){
      
   });
});
