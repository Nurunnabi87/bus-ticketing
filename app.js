// let selectedSeats = [];
// function handleSeatClickedEvent(event) {
//   const passengerPressed = event.target.innerText;
//   console.log(passengerPressed);

//   selectedSeats.push(passengerPressed);

//   console.log(selectedSeats);
// const currentSeatElement = document.getElementsByClassName("seat-number");

// const currentSeat = currentSeatElement.innerText;
// console.log(passengerPressed, currentSeat);
// }

// document.addEventListener("click", handleSeatClickedEvent);

// const seatLeftElement = document.getElementById("seats-left");
// const seatLeftInnerText = seatLeftElement.innerText;
// const seatLeft = parseInt(seatLeftInnerText);
// console.log(typeof seatLeft);

// const newSeatLeft = seatLeft - 1;
// seatLeftElement.innerText = newSeatLeft;

const allSeat = document.getElementsByClassName("seat-number");

let count = 0;

for (const seat of allSeat) {
  seat.addEventListener("click", function (event) {
    const seatLeftElement = document.getElementById("seat-left");
    const seatLeftInnerText = seatLeftElement.innerText;
    const seatLeft = parseInt(seatLeftInnerText);
    count = seatLeft - 1;

    const seatNumber = event.target.parentNode.childNodes[1].innerText;
    const perSeatPrice = 550;
    const seatClass = "Economy"
    setInnerText("seat-left", count);

    console.log(seatNumber);
  });
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
