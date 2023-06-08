const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
const handleSuccess = (succesfullOrder) => {
    console.log(succesfullOrder);
};
  
const handleFailure = (rejectedOrder) => {
    console.log(rejectedOrder);
};

checkInventory(order).then(handleSuccess, handleFailure);
    