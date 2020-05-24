const Customer = require("./Models/customer");
const CustomerDataReader = require("./DataLayer/CustomerDataReader");
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })

    });
}

async function Program() {
    let userInput;
    let customer;

    async function customerDetails() {
        let customerFirstName = (await askQuestion("Enter Customer First Name: "))
        let customerLastName = (await askQuestion("Enter Customer Last Name: "))
        let customerAddress = (await askQuestion("Enter Customer Address: "))

        let newCustomer = new Customer(
            customerFirstName,
            customerLastName,
            customerAddress
        );
        

        let newCustomerDataReader = new CustomerDataReader();
        let foundcustomer = newCustomerDataReader.findCustomer(newCustomer.firstName, newCustomer.lastNAme, newCustomer.address);
        if (foundcustomer == undefined) {
            newCustomerDataReader.establishCustomer(newCustomer);
        }
        return newCustomer;

    }


    async function creatNewPhotoCard() {
        let customerId = (await askQuestion("Enter the customer id: "))
        let numberOfYears = (await askQuestion("Enter Number Of Years : "))
        let startDate = (await askQuestion("Enter The Start Date: "))
        let endData = (await askQuestion("Enter The End Date: "))
        let owningPensionarCard = (await askQuestion("Is The Customer Hold conssion Card? "))

        let photoCard = new PhotoCard(
            customerId,
            startDate,
            endDate,
            numberOfYears,
            owningPensionarCard
        )
        return photoCard;
    }


    while (userInput != "q") {
        console.log("################################");
        console.log("#### ~ Welcome To Drives ~ ####");
        console.log("################################");
        console.log("Transaction:-");
        console.log("Option 1 : Photo Card");
        console.log("Option 2 : Driver Licence");
        console.log("Option 3 : Registration ");
        console.log("Press Q to exit");

        userInput = (await askQuestion("Enter your Option: "));

        switch (userInput) {
            case "1":
                console.log(" ====== You have selected Option 1 ");
                customer = await customerDetails();

                let photoCard=await creatNewPhotoCard();

                break;
            case "2":
                console.log(" ====== You have selected Option 2 ");
                customer = await customerDetails();
                break;
            case "3":
                console.log(" ====== You have selected Option 3 ");
                customer = await customerDetails();
                break;
            case "q":
                console.log(" ====== Quiting Application  ");
                break;

            default:
                console.log("  ====== Option not found ");
                break;
        }
    }


}





Program().then(
    () => {
        process.exit()
    }
)
