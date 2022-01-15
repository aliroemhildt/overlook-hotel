import { expect } from 'chai';
import Customer from '../src/classes/Customer.js';
import sampleCustomers from '../src/data/customers-data';
import sampleBookings from '../src/data/bookings-data';
import sampleRooms from '../src/data/rooms-data';

describe('Customer', () => {
    const customer = new Customer(sampleCustomers[0])

  it('should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('should be an instance of Customer', () => {
    expect(customer).to.be.an.instanceof(Customer);
  });

  it('should have an id', () => {
    expect(customer.id)to.be.a('number');
    expect(customer.id).to.be.greaterThan(0);
    expect(customer.id).to.equal(sampleCustomers[0].id);
  })

  it('should have a name', () => {
    expect(customer.name).to.equal(sampleCustomers[0].name);
  })

  it('should have a property to store all bookings that has a default')

  it('should store all bookings for that customer', () => {
    customer.getAllBookings(sampleBookings);
    const booking1 = sampleBookings[4];
    const booking2 = sampleBookings[7];
    const myBookings = [sampleBookings[4], sampleBookings[7]];

    expect(customer.bookings).to.be.an('array');
    expect(customer.bookings).to.deep.equal(myBookings);
  });

  it('should calculate the total amount that customer has spent on all bookings', () => {
    const total = customer.calculateTotalSpent(sampleRooms);
    expect(total).to.equal(601.41);
  });

})
