import { expect } from 'chai';
import Room from '../src/classes/Room.js';
import sampleRooms from '../src/data/rooms-data';

describe('Room', () => {
  const room = new Room(sampleRooms[0]);

  it('should be a function', () => {
    expect(Room).to.be.a('function');
  });

  it('should be an instance of Room', () => {
    expect(room).to.be.an.instanceof(Room);
  });

  it('should have a number', () => {
    expect(room.number).to.be.a('number');
    expect(room.number).to.be.greaterThan(0);
    expect(room.number).to.equal(7);
  });

  it('should have a roomType', () => {
    expect(room.roomType).to.be.a('string');
    expect(room.roomType.length).to.be.greaterThan(0);
    expect(room.roomType).to.equal('single room');
  });

  it('should show if a bidet is present', () => {
    expect(room.bidet).to.be.a('boolean');
    expect(room.bidet).to.equal(false);
  });

  it('should have a bed size', () => {
    expect(room.bedSize).to.be.a('string');
    expect(room.bedSize.length).to.be.greaterThan(0);
    expect(room.bedSize).to.equal('queen');
  });

  it('should show the number of beds', () => {
    expect(room.numBeds).to.be.a('number');
    expect(room.numBeds).to.be.greaterThan(0);
    expect(room.numBeds).to.equal(2);
  });
})
