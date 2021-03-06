import { expect } from 'chai';
import Hotel from '../src/classes/Hotel';
import Room from '../src/classes/Room';
import Booking from '../src/classes/Booking';
import Customer from '../src/classes/Customer';
import sampleCustomers from '../src/data/customers-data';
import sampleBookings from '../src/data/bookings-data';
import sampleRooms from '../src/data/rooms-data';

describe('Hotel', () => {
  let hotel;
  let allRooms;
  let allBookings;
  let allCustomers;

  beforeEach(() => {
    hotel = new Hotel(sampleCustomers, sampleRooms, sampleBookings);
    allRooms = sampleRooms.map(room => new Room(room));
    allBookings = sampleBookings.map(booking => new Booking(booking));
    allCustomers = sampleCustomers.map(customer => new Customer(customer));
  });

  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it('should be an instance of Hotel', () => {
    expect(hotel).to.be.an.instanceof(Hotel);
  });

  it('should have a property that stores all rooms', () => {
    expect(hotel.rooms).to.be.an('array');
    expect(hotel.rooms.length).to.be.greaterThan(0);
    expect(hotel.rooms).to.deep.equal(allRooms);
  });

  it('should store all rooms as instances of Room', () => {
    expect(hotel.rooms[0]).to.be.an.instanceof(Room);
  });

  it('should have a property that stores all bookings', () => {
    expect(hotel.bookings).to.be.an('array');
    expect(hotel.bookings.length).to.be.greaterThan(0);
    expect(hotel.bookings).to.deep.equal(allBookings);
  });

  it('should store all bookings as instances of Booking', () => {
    expect(hotel.bookings[0]).to.be.an.instanceof(Booking);
  });

  it('should have a property that stores all customers', () => {
    expect(hotel.customers).to.be.an('array');
    expect(hotel.customers.length).to.be.greaterThan(0);
    expect(hotel.customers).to.deep.equal(allCustomers);
  });

  it('should store all customers as instances of Customer', () => {
    expect(hotel.customers[0]).to.be.an.instanceof(Customer);
  });

  it('should have a property to store the current customer which starts as null', () => {
    expect(hotel.currentCustomer).to.equal(null);
  });

  it('should be able to update its current customer property to hold an instance of Customer', () => {
    expect(hotel.currentCustomer).to.equal(null);

    hotel.currentCustomer = allCustomers[0];

    expect(hotel.currentCustomer).to.be.an.instanceof(Customer);
    expect(hotel.currentCustomer).to.deep.equal(allCustomers[0]);
  });

  it('should have a property that stores the available rooms which starts with a value of an empty array', () => {
    expect(hotel.availableRooms).to.be.an('array');
    expect(hotel.availableRooms.length).to.equal(0);
  });

  it('should update the available rooms property when a user filters by date', () => {
    expect(hotel.availableRooms.length).to.equal(0);

    hotel.getAvailableRooms('2022/02/05');

    expect(hotel.availableRooms.length).to.equal(5);
    expect(hotel.availableRooms).to.deep.equal([
      sampleRooms[0],
      sampleRooms[1],
      sampleRooms[4],
      sampleRooms[5],
      sampleRooms[6]
    ])
  });

  it('should filter the available rooms by single room type', () => {
    hotel.getAvailableRooms('2022/02/05');
    hotel.filterRooms(['single room']);

    const rooms1 = [
      sampleRooms[0],
      sampleRooms[1],
      sampleRooms[5]
    ];

    expect(hotel.availableRooms).to.deep.equal(rooms1);
  });

  it('should filter the available rooms by multiple room types', () => {
    hotel.getAvailableRooms('2022/02/05');
    hotel.filterRooms([
      'residential suite',
      'suite'
    ]);

    const rooms2 = [
      sampleRooms[4],
      sampleRooms[6]
    ];

    expect(hotel.availableRooms).to.deep.equal(rooms2);
  });

  it('should only filter available rooms by type if they have already been filtered by date', () => {
    hotel.filterRooms(['queen']);
    expect(hotel.availableRooms.length).to.equal(0);

    hotel.getAvailableRooms('2022/02/05');
    hotel.filterRooms(['suite']);
    expect(hotel.availableRooms.length).to.equal(1);
  });

})
