const allSeat = document.getElementsByClassName("seat-number");

let count = 0;

for (const seat of allSeat) {
  seat.addEventListener("click", function (event) {
    const seatLeftElement = document.getElementById("seat-left");
    const seatLeftInnerText = seatLeftElement.innerText;
    const seatLeft = parseInt(seatLeftInnerText);
    count = seatLeft - 1;

    setInnerText("seat-left", count);
  });
}

let initialSelectedSeat = 0;
for (const seat of allSeat) {
  seat.addEventListener("click", function (event) {
    initialSelectedSeat = initialSelectedSeat + 1;
    const seatNumber = event.target.parentNode.childNodes[1].innerText;
    const perSeatPrice = 550;
    const seatClass = "Economy";

    event.target.style.backgroundColor = "green";

    const selectedContainer = document.getElementById(
      "selected-place-container"
    );
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = seatNumber;
    const p2 = document.createElement("p");
    p2.innerText = seatClass;
    const p3 = document.createElement("p");
    p3.innerText = perSeatPrice;
    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3);
    selectedContainer.appendChild(li);

    totalPrice("total-price", parseInt(perSeatPrice));
    grandTotal("grand-total", parseInt(perSeatPrice));
    setInnerText("selected-seat", initialSelectedSeat);
  });
}

function totalPrice(id, value) {
  const totalPrice = document.getElementById(id).innerText;
  const convertedTotalCost = parseInt(totalPrice);
  const sum = convertedTotalCost + parseInt(value);
  setInnerText("total-price", sum);
}
function grandTotal() {
  const totalPrice = document.getElementById("total-price").innerText;
  const convertedTotalCost = parseInt(totalPrice);
  setInnerText("grand-total", convertedTotalCost);
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
