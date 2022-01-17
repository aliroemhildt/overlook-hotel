import {validateLogin, hotel} from './scripts';

const cardsSection = document.querySelector('.booking-cards-wrapper');
const billSection = document.querySelector('.total-spent-wrapper');
const loginButton = document.querySelector('.login-button');
const username = document.getElementById('username');
const password = document.getElementById('password');
const main = document.querySelector('main');
const customerDashboard = document.getElementById('customer-dashboard');
const bookingDashboard = document.getElementById('booking-dashboard');
const loginPage = document.querySelector('.login')
const menu = document.querySelector('.menu');
const bookMenuButton = document.getElementById('book-menu-button');
const dashboardMenuButton = document.getElementById('dashboard-menu-button');
const dateInput = document.getElementById('date-input');
const availableRoomsSection = document.getElementById('availableRooms');

const qs = {
  username,
  password
}

const domUpdates = {
  populateBookings(hotel) {
    cardsSection.innerHTML = '';
    hotel.currentCustomer.bookings.forEach(booking => {
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

  populateAvailableRooms(hotel) {
    availableRoomsSection.innerHTML = '';
    const rooms = hotel.getAvailableRooms(dateInput.value);
    rooms.forEach(room => {
      const bidet = room.bidet ? 'yes' : 'no';
      availableRoomsSection.innerHTML += `
        <div class="card">
          <p>Room Number: ${room.number}</p>
          <p>Cost: $${room.costPerNight}<p>
          <p>Room Type: ${room.roomType}</p>
          <p>Number of Beds: ${room.bedSize}</p>
          <p>Bed Size: ${room.bedSize}</p>
          <p>Bidet: ${bidet}<p>
          <button class="book-button" id="${room.number}">Book Room</button>
        </div>
      `;
    })
  },

  populateTotalBill(hotel) {
    const total = hotel.currentCustomer.calculateTotalSpent(hotel.rooms);
    billSection.innerHTML = '';
    billSection.innerHTML += `
      <p class="total-spent">$${total}</p>
    `;
  },

  displayCustomerDashboard(hotel) {
    domUpdates.show([customerDashboard, menu]);
    domUpdates.hide([bookingDashboard]);
    dashboardMenuButton.classList.add('clicked');
    bookMenuButton.classList.remove('clicked');
    domUpdates.populateBookings(hotel);
  },

  hideLoginPage() {
    domUpdates.hide([loginPage]);
    main.classList.remove('align-left');
    main.classList.add('align-center');
  },

  displayBookingDashboard(hotel) {
    domUpdates.show([bookingDashboard]);
    domUpdates.hide([customerDashboard]);
    dashboardMenuButton.classList.remove('clicked');
    bookMenuButton.classList.add('clicked');
    domUpdates.setMinDate();
    domUpdates.populateAvailableRooms(hotel);
  },

  getTodaysDate() {
    const today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    return yyyy + '/' + mm + '/' + dd;
  },

  setMinDate() {
    const today = domUpdates.getTodaysDate().replaceAll('/', '-');
    dateInput.min = today;
    dateInput.defaultValue = today;

  },
  //
  // {
  //
  // },

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

bookMenuButton.addEventListener('click', () => {
  domUpdates.displayBookingDashboard(hotel);
});

dashboardMenuButton.addEventListener('click', () => {
  domUpdates.displayCustomerDashboard(hotel, hotel.bookings, hotel.currentCustomer.calculateTotalSpent(hotel.rooms))
})



export {domUpdates}
