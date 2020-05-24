
const findCustomer = require("../Models/customer")
const fs = require("fs");

module.exports = class CustomerDataReader {
    constructor() {
        this.customers = [];
    }
    findCustomer(firstName, lastName, address) {
        let foundcustomer = this.customers.find((customer) => {
            if (customer.FirstName == firstName && customer.LastName == lastName && customer.Address == address) {
                return true;
            }
        });
        return foundcustomer;
    }
    establishCustomer(customer) {
        customer.customerId = 1;
        this.customers.push(customer);
    }
}



