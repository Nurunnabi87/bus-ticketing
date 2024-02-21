const allSeat = document.getElementsByClassName("seat-number");

let count = 0;
let initialSelectedSeat = 0;
for (const seat of allSeat) {
  seat.addEventListener("click", function (event) {
    initialSelectedSeat = initialSelectedSeat + 1;
    const seatNumber = event.target.innerText;

    const perSeatPrice = 550;
    const seatClass = "Economy";

    const seatLeftElement = document.getElementById("seat-left");
    const seatLeftInnerText = seatLeftElement.innerText;
    const seatLeft = parseInt(seatLeftInnerText);
    count = seatLeft - 1;
    if (count >= 0) {
      setInnerText("seat-left", count);
    } else {
      alert("seat is not available");
    }

    // event.target.style.backgroundColor = "green";

    const selectedContainer = document.getElementById(
      "selected-place-container"
    );

    const seatCount = document.getElementById("selected-seat").innerText;
    const convertedSeatCount = parseInt(seatCount);
    if (convertedSeatCount + 1 > 4) {
      alert("seat limit is over");
      return;
    }

    event.target.setAttribute("disabled", false);
    event.target.style.backgroundColor = "green";
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
    // grandTotal("grand-total", parseInt(perSeatPrice));
    setInnerText("selected-seat", initialSelectedSeat);
    grandTotal();
  });
}

function totalPrice(id, value) {
  const totalPrice = document.getElementById(id).innerText;
  const convertedTotalCost = parseInt(totalPrice);
  const sum = convertedTotalCost + parseInt(value);
  setInnerText("total-price", sum);
}
function grandTotal(status) {
  const totalPrice = document.getElementById("total-price").innerText;
  const convertedTotalCost = parseInt(totalPrice);
  setInnerText("grand-total", convertedTotalCost);
  if (status === undefined) {
    document.getElementById("grand-total").innerText = totalPrice;
  } else {
    const couponCode = document.getElementById("input-field").value;
    if (couponCode == "NEW15") {
      const discounted = convertedTotalCost * 0.15;
      document.getElementById("grand-total").innerText =
        convertedTotalCost - discounted;
      document.getElementById("input-field").value = "";
    } else if (couponCode == "Couple 20") {
      const discounted = convertedTotalCost * 0.2;
      document.getElementById("grand-total").innerText =
        convertedTotalCost - discounted;
      document.getElementById("input-field").value = "";
    } else {
      alert("Please enter a valid coupon code");
    }
  }
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

// const seatCount = document.getElementById("selected-seat").innerText;
// const convertedSeatCount = parseInt(seatCount);
// if (convertedSeatCount + 1 > 4) {
//   alert("limit is over");
// }
