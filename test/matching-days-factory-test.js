describe('The getDay Function',function(){
   it("should return the weekday it falls on for any given date",function(){
      var matchingDaysInstance = MatchingDays();
      var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      assert.equal(days[matchingDaysInstance.day("12-02-1992")],"Wednesday");
   });
});
describe('The dayOneFinder Function',function(){
   it("should return the weekday day 1 lands on",function(){
      var matchingDaysInstance = MatchingDays();
      var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      assert.equal(days[matchingDaysInstance.day("12-02-1522")],"Saturday");
   });
});
describe('The dayTwoFinder Function',function(){
   it("should return the weekday day 2 lands on",function(){
      var matchingDaysInstance = MatchingDays();
      var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      assert.equal(days[matchingDaysInstance.day("12-02-1222")],"Friday");
   });
});
