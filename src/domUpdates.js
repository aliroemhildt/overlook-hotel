const cardsSection = document.querySelector('.booking-cards-wrapper');

const qs = {

}

const domUpdates = {
  displayBookings(bookings) {
    cardsSection.innerHTML = '';
    bookings.forEach(booking => {
      cardsSection.innerHTML += `
      <div class="card">
      <h4>Date:</h4>
      <p>${booking.date}</p>
      <h4>Room Number:</h4>
      <p>${booking.roomNumber}</h4>
      </div>
      `
    })
  }
}

export {domUpdates}
