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
                break;
            case "2":
                console.log(" ====== You have selected Option 2 ");
                break;
            case "3":
                console.log(" ====== You have selected Option 3 ");
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
