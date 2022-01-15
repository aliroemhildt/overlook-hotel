import { expect } from 'chai';
import Hotel from '../src/classes/Hotel';
import Room from '../src/classes/Room';
import sampleCustomers from '../src/data/customers-data';
import sampleBookings from '../src/data/bookings-data';
import sampleRooms from '../src/data/rooms-data';

describe('Hotel', () => {
  let hotel;

  beforeEach(() => {
    hotel = new Hotel(sampleRooms, sampleBookings);
  });

  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it('should be an instance of Hotel', () => {
    expect(hotel).to.be.an.instanceof(Hotel);
  });

  it('should have a property that stores all rooms', () => {
    const allRooms = sampleRooms.map(room => new Room (room));

    expect(hotel.rooms).to.be.an('array');
    expect(hotel.rooms.length).to.be.greaterThan(0);
    expect(hotel.rooms).to.deep.equal(allRooms);
  });

  it('should store all rooms as instances of Room', () => {
    expect(hotel.rooms[0]).to.be.an.instanceof(Room);
  });

  it('should have a property that stores all bookings', () => {
    
  })

  it('should store all bookings as instances of Booking', () => {

  })

  it('should show all rooms available for a given date', () => {

  })

  it('should calculate the total revenue for todays date', () => {

  })

  it('should calculate the percentage of rooms occupied for todays date', () => {

  })

  it('should filter all rooms by type', () => {

  })
})
