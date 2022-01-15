import Customer from '../test/customer-test.js';
import sampleCustomers '../src/data/customers-data';
import sampleBookings '../src/data/bookings-data';

describe('Customer', () => {
    const customer = sampleCustomers[0];
    const bookings = sampleBookings;
    const booking1 = sampleBookings[4];
    const booking2 = sampleBookings[7];
    const myBookings = [sampleBookings[4], sampleBookings[7]];

  it('should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('should be an instance of Customer', () => {
    expect(customer).to.be.an.instanceof(Customer);
  });

  it('should have an id', () => {
    expect(customer.id).to.equal(sampleCustomer[0].id)
  })

  it('should have a name', () => {
    expect(customer.name).to.equal(sampleCustomer[0].name)
  })

  it('should return all bookings for that customer, given a list of bookings', () => {
    customer.getAllBookings()
    expect(customer.allBookings).to.deep.equal(myBookings);
  });

  it('should calculate the total amount that customer has spent on all bookings', () => {
    const total = customer.calculateTotalSpent();
    expect(total).to.equal();
  });

})
