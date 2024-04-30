let [seconds, minutes] = [59, 24];
let displayTime = document.getElementById("displayTime");
let timer = null;
let alarmRinging = false;

function digital() {
  if (seconds === 0 && minutes === 0) {
    clearInterval(timer);
    playAlarm();
    return;
  }

  if (seconds === 0) {
    seconds = 59;
    minutes--;
  } else {
    seconds--;
  }

  displayTime.innerHTML = formatTime(minutes) + ":" + formatTime(seconds);
}

function digital_start() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(digital, 1000);
}

function digital_stop() {
  clearInterval(timer);
}

function digital_restart() {
  clearInterval(timer);
  [seconds, minutes] = [0, 1];
  displayTime.innerHTML = "25:00";
}

function playAlarm() {
  if (alarmRinging) return;
  alarmRinging = true;
  var audio = new Audio('Magic Shop - Piano ! Bts.mp3');
  audio.play();
  audio.onended = function () {
    alarmRinging = false;
  };
}

function formatTime(value) {
  return value < 10 ? "0" + value : value;
  
}
// function myfocus(){

// const newWindow=window.open();
// newWindow.document.write(
  
// '<html><style>body{position:absolute;top:background-image:linear-gradient(powderblue,lightgreen);  max -height:600px;max-width:600px;font-family:Cambria, Cochin, Georgia, Times,Times New Roman, serif; }</style><body><center><p>pomodoro is  a 25 minutes rule in which the one who uses this technique that he wants to complete a task with in 25 minutes or we can say the one tries to work on a task effeectively in order to acheive that the pereson uses this pomodoro technique so work effetively one needs to take certain breaks after evrey 25 minutes so the productivity is very high according to our researches.</p></center></body></html');
// newWindow.document.close();

// }
