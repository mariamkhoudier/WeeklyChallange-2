class Customer {
    constructor(firstName, lastName, address) {

        this.firstName = firstName;
        this.lastNAme = lastName;
        this.address = address;
    }

    set customerId(customerId) {
        this.customerId = customerId;
    }

}
module.exports = Customer;