let selectedSeats = [];
function handleSeatClickedEvent(event) {
  const passengerPressed = event.target.innerText;
  console.log(passengerPressed);

  selectedSeats.push(passengerPressed);

  console.log(selectedSeats);
  // const currentSeatElement = document.getElementsByClassName("seat-number");

  // const currentSeat = currentSeatElement.innerText;
  // console.log(passengerPressed, currentSeat);
}

document.addEventListener("click", handleSeatClickedEvent);

const seatLeftElement = document.getElementById("seats-left");
const seatLeftInnerText = seatLeftElement.innerText;
const seatLeft = parseInt(seatLeftInnerText);
console.log(typeof seatLeft);

const newSeatLeft = seatLeft - 1;
seatLeftElement.innerText = newSeatLeft;
