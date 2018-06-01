function MatchingDays(){

   function getDay(anyDate){
      var newDate = new Date(anyDate);
      return newDate.getDay();
   }
   return {
      day : getDay
   }
}
