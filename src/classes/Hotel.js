import Room from './Room';
import Booking from './Booking';

class Hotel {
  constructor(rooms, bookings) {
    this.rooms = rooms.map(room => new Room(room));
    this.bookings = bookings.map(booking => new Booking(booking));
  }

  getAvailableRooms(date) {
    const bookedRooms = this.bookings.reduce((acc, booking) => {
      if (booking.date === date) {
        acc.push(booking.roomNumber);
      }
      return acc;
    }, []);
    return this.rooms.filter(room => {
      return !bookedRooms.includes(room.number);
    });
  }

  calculateTotalRevenue(date) {
    return this.rooms.reduce((acc, room) => {
      const roomBooking = this.bookings.find(booking => {
        return ((booking.roomNumber === room.number) && (booking.date === date));
      })
      if (roomBooking) {
        acc += room.costPerNight;
      }
      return acc;
    }, 0);
  }
}

export default Hotel;
