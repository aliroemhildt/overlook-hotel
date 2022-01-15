const fetchCustomers = () => {
  return fetch('http://localhost:3001/api/v1/customers')
    .then(response => {
      return response.json()
    })
}

const fetchRooms = () => {
  return fetch('http://localhost:3001/api/v1/rooms')
    .then(response => response.json())
}

const fetchBookings = () => {
  return fetch('http://localhost:3001/api/v1/bookings')
    .then(response => response.json())
}

const fetchSingleCustomer = (id) => {
  return fetch(`http://localhost:3001/api/v1/customers/${id}`)
    .then(response => response.json())
}

// returns message with booking id
// will need to use the id to instantiate new booking instance
const postBooking = (booking) => {
  return fetch('http://localhost:3001/api/v1/bookings', {
    method:'POST',
    body: JSON.stringify(booking),
    headers: {'Content-Type': 'application/json'}
  })
    .then(response => response.json())

}

export {
  fetchCustomers,
  fetchRooms,
  fetchBookings,
  fetchSingleCustomer,
  postBooking
}
