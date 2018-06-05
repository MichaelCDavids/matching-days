function MatchingDays(){

   const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

   function getDay(date){
      var date = new Date(date);
      return date.getDay();
   }

   function dayOfWeek(date){
     if(date != undefined){
       var newDate = new Date(date);
       return weekdays[newDate.getDay()];
     }

   }

   function matchDay(dateOne,dateTwo){
      if(dateOne !== undefined && dateTwo !== undefined){
         var dayOne = new Date(dateOne);
         var dayTwo = new Date(dateTwo);
         if(weekdays[dayOne.getDay()] === weekdays[dayTwo.getDay()]){
           return true
        }else{
           return false
        }
      }
   }

   function highlightDays(dateOne,dateTwo){
      var days = {};
      for(var i = 0; i<weekdays.length; i++){
         var currentIndex = weekdays[i];
         days[currentIndex] = {
            day : currentIndex
         }
         if(dayOfWeek(dateOne) === currentIndex ){
            days[currentIndex] = Object.assign({'Day1':'firstDay'}, days[currentIndex]);
            if (matchDay(dateOne, dateTwo)) {
              delete days[currentIndex].Day1;
              days[currentIndex] = Object.assign({'DaysMatch': 'matchingDays'}, days[currentIndex]);
            }
         }else if(dayOfWeek(dateTwo) === currentIndex){
            days[currentIndex] = Object.assign({'Day2':'secondDay'}, days[currentIndex]);
            if (matchDay(dateOne, dateTwo)) {
             delete days[currentIndex].Day2;
             days[currentIndex] = Object.assign({'DaysMatch': 'matchingDays'}, days[currentIndex]);
           }
         }
      }
      return days;
   }

   return {
      indexOfDay : getDay,
      dayInWeek : dayOfWeek,
      match : matchDay,
      highlight : highlightDays
   }
}
