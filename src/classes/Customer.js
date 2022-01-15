class Customer {
  constructor(customer) {
    this.id = customer.id;
    this.name = customer.name;
    this.bookings = []
  }

  getAllBookings(bookings) {
    this.bookings = bookings.filter(booking => {
      return booking.userID === this.id;
    });
  }

  calculateTotalSpent(rooms) {
    return this.bookings.reduce((total, booking) => {
      rooms.forEach(room => {
        if (room.number === booking.roomNumber) {
          total += room.costPerNight;
        }
      });
      return total;
    }, 0);
  }

  createNewBooking(date, room) {
    const booking = {
      userID: this.id,
      date: date.replaceAll('-', '/'),
      roomNumber: room.number
    }
    postBooking(booking)
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }
}

export default Customer;
