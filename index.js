// Write your solution in this file!
var customerName = 'bob';


function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}


function setBestCustomer() {
    window.bestCustomer = 'not bob';
}


function overwriteBestCustomer(customer) {
    window.bestCustomer = customer;
}


const leastFavoriteCustomer = 'not bob';


function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'not bob';
}
