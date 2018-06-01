document.addEventListener('DOMContentLoaded',function() {
  var dateOne = document.querySelector('input[name="dateOne"]');
  var dateTwo = document.querySelector('input[name="dateTwo"]');
  var days = document.querySelectorAll('.days');
  var message = document.querySelector("#message");

  var MatchingDaysInstance = MatchingDays();

  function clearStyles(){
    for (var i = 0; i < days.length; i++) {
      days[i].classList.remove("firstDay");
      days[i].classList.remove("secondDay");
      days[i].classList.remove("matchingDays");
    }
  }

  function highlightDay(){
    var dayOne = dateOne.value;
    if (dayOne !== ""){dayOne = MatchingDaysInstance.day(dayOne);}
    else{var dayOne = "";}

    var dayTwo = dateTwo.value;
    if (dayTwo !== ""){dayTwo = MatchingDaysInstance.day(dayTwo);}
    else{var dayTwo = "";}

    if(dayOne!=="" && dayTwo==="" && dayOne!==dayTwo){
      days[dayOne].classList.add('firstDay');
      message.innerHTML = "Please select a second date";
    }else if(dayTwo!=="" && dayOne==="" && dayOne!==dayTwo){
      days[dayTwo].classList.add('secondDay');
      message.innerHTML = "Please select first date";
    }else if(dayOne===dayTwo && dayOne!=="" && dayTwo!==""){
      days[dayOne].classList.add("matchingDays");
      message.innerHTML = "These dates have a matching day";
    }else if(dayOne!==dayTwo && dayOne!=="" && dayTwo!==""){
      days[dayOne].classList.add('firstDay');
      days[dayTwo].classList.add('secondDay');
      message.innerHTML = "These dates do not have matching days";
    }
  }
  dateOne.addEventListener('change', function(){
    clearStyles();
    highlightDay();
  });
  dateTwo.addEventListener('change', function(){
    clearStyles();
    highlightDay();
  });
},false);
