let msec = 0;
let sec = 0;
let min = 0;
let hour = 0;
let myInterval;
const startbt = document.getElementById("start");
const pauzabt = document.getElementById("pauza");
const loader = document.getElementsByClassName("loader");

if (document.getElementById('start').addEventListener) {
  document.getElementById('start').addEventListener('click', start, false);
} else {
  document.getElementById('start').attachEvent('onclick', start);
}
if (document.getElementById('pauza').addEventListener) {
  document.getElementById('pauza').addEventListener('click', pauza, false);
} else {
  document.getElementById('pauza').attachEvent('onclick', pauza);
}
if (document.getElementById('reset').addEventListener) {
  document.getElementById('reset').addEventListener('click', reset, false);
} else {
  document.getElementById('reset').attachEvent('onclick', reset);
}reset
if (document.getElementById('addLap').addEventListener) {
  document.getElementById('addLap').addEventListener('click', addLap, false);
} else {
  document.getElementById('addLap').attachEvent('onclick', addLap);
}
if (document.getElementById('listReset').addEventListener) {
  document.getElementById('listReset').addEventListener('click', listReset, false);
} else {
  document.getElementById('listReset').attachEvent('onclick', listReset);
}

function start() {
  myInterval = setInterval(function () {
    msec += 1;
    if (msec == 100) {
      msec = 0;
      sec = sec + 1;
    }
    if (sec == 60) {
      sec = 0;
      min = min + 1;
    }
    if (min == 60) {
      min = 0;
      hour = hour + 1;
    }

    let seclog = '';
    if (sec < 10) {
      seclog = "0" + sec;
    } else {
      seclog = sec;
    };
    let minlog = '';
    if (min < 10) {
      minlog = "0" + min;
    } else {
      minlog = min;
    };
    let hourlog = '';
    if (hour < 10) {
      hourlog = "0" + hour;
    } else {
      hourlog = hour;
    };
    let mseclog = '';
    if (msec < 10) {
      mseclog = "0" + hour;
    } else {
      mseclog = msec;
    };

    document.getElementById("demo").innerHTML = hourlog + " : " + minlog + " : " + seclog + " : " + mseclog;
  }, 10);

  startbt.style.display = "none";
  pauzabt.style.display = "inline";

  for (let j = 0; j < loader.length; j++) {
    loader[j].classList.add("loader_running");
    loader[j].classList.remove("loader_paused");
  }
}

function pauza() {
  clearInterval(myInterval);
  pauzabt.style.display = "none";
  startbt.style.display = "inline";

  for (let j = 0; j < loader.length; j++) {
    loader[j].classList.add("loader_paused");
    loader[j].classList.remove("loader_running");
  }
}

function reset() {
  msec = 0;
  sec = 0;
  min = 0;
  hour = 0;

  clearInterval(myInterval);
  document.getElementById("demo").innerHTML = "00 : 00 : 00 : 00";
  pauzabt.style.display = "none";
  startbt.style.display = "inline";
  for (let j = 0; j < loader.length; j++) {
    loader[j].classList.remove("loader_running");
    loader[j].classList.remove("loader_paused");
  }
}
var lapnumber = 0;

function addLap() {

  lapnumber += 1;

  let wyniki = document.getElementById("demo");
  let lap = wyniki.innerText;
  const p = document.createElement("p");

  document.getElementById("lap-list").appendChild(p);
  document.getElementById("lap-list").lastChild.innerHTML = lapnumber + " Time:" + " " + lap;
}

function listReset() {

  document.getElementById("lap-list").innerHTML = "Results";
  lapnumber = 0;
}