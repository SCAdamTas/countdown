let timeString = document.querySelector("#timeString");
let endDate = new Date("2021-07-23T08:00:00");

const dateString = (distance) => {
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return `${days}days ${hours}hrs ${minutes}min ${seconds}seconds`;
}

const update = (timeString) => {
  let dateNow = new Date();
  let timeDelta = endDate - dateNow;
  timeString.innerHTML = dateString(timeDelta);
  timer();
}

let x = setInterval(function() {
  update(timeString)
},1000);
