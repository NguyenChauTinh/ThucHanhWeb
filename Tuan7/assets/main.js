// //StopWatch
// function Stopwatch(elem) {
//     var time = 0;
//     var offset;
//     var interval;

//     function lapOff() {
//         return;
//     }

//     function update() {
//         if (this.isOn) {
//             time += delta();
//         }
//         elem.textContent = timeFormatter(time);
//     }

//     function delta() {
//         var now = Date.now();
//         var timePassed = now - offset;

//         offset = now;

//         return timePassed;
//     }

//     function timeFormatter(time) {
//         time = new Date(time);

//         var minutes = time.getMinutes().toString();
//         var seconds = time.getSeconds().toString();
//         var milliseconds = time.getMilliseconds().toString();

//         if (minutes.length < 2) {
//             minutes = '0' + minutes;
//         }

//         if (seconds.length < 2) {
//             seconds = '0' + seconds;
//         }

//         while (milliseconds.length < 3) {
//             milliseconds = '0' + milliseconds;
//         }

//         var result = minutes + ' : ' + seconds + ' . ' + milliseconds;

//         return result;
//     }

//     this.start = function() {
//         interval = setInterval(update.bind(this), 1);
//         offset = Date.now();
//         this.isOn = true;
//     };

//     this.stop = function() {
//         clearInterval(interval);
//         interval = null;
//         this.isOn = false;
//     };

//     this.reset = function() {
//         time = 0;
//         lapContainer.innerHTML = '';
//         interval = null;
//         this.isOn = false;
//         update();
//     };

//     this.lapOn = function() {
//         lapOn();
//     }

//     this.lapOff = function() {
//         lapOff();
//     }

//     this.isOn = false;
// }
//Main
var timer = document.querySelector('.timer');
var toggleBtn = document.querySelector('.toggle');
var resetBtn = document.querySelector('.reset');
var stopBtn = document.querySelector('.stop');
var lapContainer = document.querySelector('.lapContainer')

var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
var milliseconds = document.querySelector('.milliseconds');


toggleBtn.addEventListener('click', function(e) {
    var a = 0;
    var b = 0;
    var c = 0;
    setInterval(function() {
        milliseconds.innerText = a++;

        if (a == 1000) {
            seconds.innerText = ++b;
            a = 0;
        }

        if (b == 60) {
            minutes.innerText = ++c;
            b = 0;
        }
    }, 1)

})

stopBtn.addEventListener('click', function(e) {
    clearInterval(null);
})

// var watch = new Stopwatch(timer);

// function start() {
//     toggleBtn.textContent = 'Stop';
//     toggleBtn.classList.toggle("on");
//     watch.start();
// }

// function stop() {
//     toggleBtn.textContent = 'Start';
//     toggleBtn.classList.toggle("on")
//     watch.stop();
// }

// function stopWhenOn() {
//     toggleBtn.textContent = 'Start';
//     toggleBtn.classList.toggle("on")
//     watch.stop();
//     watch.reset();
// }

// toggleBtn.addEventListener('click', function() {
//     watch.isOn ? stop() : start();
// });

// resetBtn.addEventListener('click', function() {
//     watch.isOn ? stopWhenOn() : watch.reset();
//     // stop();
// });

// lapBtn.addEventListener('click', function() {
//     watch.isOn ? watch.lapOn() : watch.lapOff();
// })