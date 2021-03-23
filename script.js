var countDownDate = new Date("Mar 28, 2021 12:00:00").getTime();

// Run myfunc every second
var myfunc = setInterval(function() {
  
  var now = new Date().getTime();
  var timeleft = countDownDate - now;
        
  // Calculating the days, hours, minutes and seconds left
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
  // Result is output to the specific element
  document.getElementById("time").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
        
  // Display the message when countdown is over
  if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("time").innerHTML = "TIME UP!!";
  }
})
