let resturant = {
  name: "ASB",
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },
  // Another way to write a method
  // here we removed the ":" and "function" keyword
  seatParty(count) {
    this.guestCount += count;
  },
  removeParty: function (count) {
    this.guestCount -= count;
  },
};

resturant.seatParty(72);
console.log(resturant.checkAvailability(3));
resturant.seatParty(2);
console.log(resturant.checkAvailability(3));
resturant.removeParty(5);
console.log(resturant.checkAvailability(4));
