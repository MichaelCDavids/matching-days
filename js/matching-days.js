//Getting references to the dates
var dateOne = document.querySelector('input[name="dateOne"]');
var dateTwo = document.querySelector('input[name="dateTwo"]');

//ref to template
var templateSource = document.querySelector(".MatchingDaysTemplate").innerHTML;

//compile the template
var templateMatchingDays = Handlebars.compile(templateSource);

//reference to the place to insert template
var insertDataElement = document.querySelector(".insertMatchingDaysTemplate");

//instance of the factory function
var MatchingDaysInstance = MatchingDays();


//on page load event
window.addEventListener('load',function(){
  insertDataElement.innerHTML = templateMatchingDays({
    days : MatchingDaysInstance.highlight()
  });
});

//change event when dateOne has been entered
dateOne.addEventListener('change', function(){
  insertDataElement.innerHTML = templateMatchingDays({
    days : MatchingDaysInstance.highlight(dateOne.value , dateTwo.value)
  });
});

//change event when dateTwo has been entered
dateTwo.addEventListener('change', function(){
  insertDataElement.innerHTML = templateMatchingDays({
    days : MatchingDaysInstance.highlight(dateOne.value, dateTwo.value)
  });
});
