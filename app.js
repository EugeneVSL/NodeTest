const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1905], ['bags', 2]];

const handleSuccess = (succesfullOrder) => {
    console.log(succesfullOrder);
};
  
const handleFailure = (rejectedOrder) => {
    console.log(rejectedOrder);
};

// Write your code below:
checkInventory(order)
  .then(handleSuccess)
  .catch(handleFailure);

    