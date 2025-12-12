
// Reservation message
let reserveForm = document.getElementById("reserveForm");
if (reserveForm) {
  reserveForm.addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("msg").innerText = "Your table has been reserved!";
    reserveForm.reset();
  });
}

// Review system
let reviewForm = document.getElementById("reviewForm");
if (reviewForm) {
  reviewForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("reviewer").value;
    let text = document.getElementById("reviewText").value;

    let div = document.createElement("div");
    div.className = "review";
    div.innerHTML = <strong>${name}</strong><p>${text}</p>;

    document.getElementById("reviewList").appendChild(div);

    reviewForm.reset();
  });
}