const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags'], 1];

// Write your code below:
const handleSuccess = (succesfullOrder) => {
    console.log(succesfullOrder);
};
  
const handleFailure = (rejectedOrder) => {
    console.log(rejectedOrder);
};
    