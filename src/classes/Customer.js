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
}

export default Customer;
