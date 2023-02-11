/**====================== window alert =====================*/
window.alert("Welcome To My Website <3");

/**====================== CONTACT FORM INFO VALIDATION =====================*/
function validate(){
    var email = document.getElementById("email").value;
    var title = document.getElementById("title").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;

    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    }
    
    if(title.length < 10){
      text = "Please Enter Correct Title";
      error_message.innerHTML = text;
      return false;
    }
    

    if(message.length <= 140){
      text = "Please Enter More Than 140 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }


/**====================== DIGITAL CLOCK =====================*/
function updateTime() {
    var dateInfo = new Date();
  
    /* time */
    var hr,
      _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
      sec = (dateInfo.getSeconds() < 10) ? "0" + dateInfo.getSeconds() : dateInfo.getSeconds(),
      ampm = (dateInfo.getHours() >= 12) ? "PM" : "AM";
  
    // replace 0 with 12 at midnight, subtract 12 from hour if 13–23
    if (dateInfo.getHours() == 0) {
      hr = 12;
    } else if (dateInfo.getHours() > 12) {
      hr = dateInfo.getHours() - 12;
    } else {
      hr = dateInfo.getHours();
    }
  
    var currentTime = hr + ":" + _min + ":" + sec;
  
    // print time
    document.getElementsByClassName("hms")[0].innerHTML = currentTime;
    document.getElementsByClassName("ampm")[0].innerHTML = ampm;
  
    /* date */
    var dow = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      day = dateInfo.getDate();
  
    // store date
    var currentDate = dow[dateInfo.getDay()] + ", " + month[dateInfo.getMonth()] + " " + day;
  
    document.getElementsByClassName("date")[0].innerHTML = currentDate;
  };
  
  // print time and date once, then update them every second
  updateTime();
  setInterval(function() {
    updateTime()
  }, 1000);


/**====================== MOUSE EVENT =====================*/

const clock1 = document.getElementById('clock1');

//Change background color on mouseover
clock1.addEventListener('mouseover', function handleMouseOver() {
    clock1.style.background = 'white';
    clock1.style.color = 'teal';
});

//Change background color back on mouseout
clock1.addEventListener('mouseout', function handleMouseOut() {
    clock1.style.background = 'teal';
    clock1.style.color = 'white';
});

