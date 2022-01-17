import {validateLogin} from './scripts';

const cardsSection = document.querySelector('.booking-cards-wrapper');
const billSection = document.querySelector('.total-spent-wrapper');
const loginButton = document.querySelector('.login-button');
const username = document.getElementById('username');
const password = document.getElementById('password');
const main = document.querySelector('main');
const customerDashboard = document.querySelector('.customer-dashboard');
const loginPage = document.querySelector('.login')

const qs = {
  username,
  password
}

const domUpdates = {
  displayBookings(hotel, bookings) {
    cardsSection.innerHTML = '';
    bookings.forEach(booking => {
      const room = hotel.rooms.find(room => {
        return room.number === booking.roomNumber
      });
      cardsSection.innerHTML += `
      <div class="card">
        <p>Date: ${booking.date}</p>
        <p>Room Number: ${booking.roomNumber}<p>
        <p>Room Type: ${room.roomType}</p>
        <p>Cost: $${room.costPerNight}</p>
      </div>
      `;
    });
  },

  displayTotalBill(num) {
    billSection.innerHTML = '';
    billSection.innerHTML += `
      <p class="total-spent">$${num}</p>
    `;
  },

  displayDashboard(hotel, bookings, num) {
    domUpdates.displayBookings(hotel, bookings);
    domUpdates.displayTotalBill(num);
    main.classList.remove('align-left');
    main.classList.add('align-center');
    domUpdates.show([customerDashboard]);
    domUpdates.hide([loginPage]);
    console.log(hotel);
  },

  show(elements) {
  elements.forEach(element => {
    element.classList.remove('hidden');
  });
},

hide(elements) {
  elements.forEach(element => {
    element.classList.add('hidden');
  });
}
}

loginButton.addEventListener('click', () => {
  validateLogin(username.value, password.value)
});

export {domUpdates}
