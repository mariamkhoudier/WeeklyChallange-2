class Transaction {
    constructor(customerId, startDate, endDate) {
        this.customerId = customerId;
        this.startDate = startDate;
        this.endDate = endDate
    }

    getTransactionDate(){
        return `${this.startDate} to ${this.endDate}`;
    }
}

class PhotoCard extends Transaction {
    constructor(customerId, startDate, endDate,numberOfYears, owningPensionarCard) {
        super(customerId, startDate, endDate);
        this.numberOfYears = numberOfYears;
        this.owningPensionarCard = owningPensionarCard
    }
}

class Licence extends Transaction {
    constructor(customerId, startDate, endDate,numberOfYears, owningPensionarCard) {
        super(customerId, startDate, endDate);
        this.numberOfYears = numberOfYears;
        this.owningPensionarCard = owningPensionarCard
    }
}

