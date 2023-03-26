// Use "prompt()" to prompt a line from the user
// Use "prompt(str)" to print some text before requesting prompt
// You will need this in the following stages
const prompt = require('prompt-sync')();
let moneyInMachine = 550;
let waterInMachine = 400;
let milkInMachine = 540;
let coffeeInMachine = 120;
let cupsInMachine = 9;

function main() {
    console.log('\x1b[36m%s\x1b[0m', 'Welcome to the Coffee Machine! by: zusldev');
    let exit = false;
    do {
        let action = prompt("Write action (buy, fill, take, remaining, exit): ");
        if (action === 'exit') {
            exit = true;
        }
        switch (action) {
            case 'buy':
                buyCoffee();
                break;
            case 'fill':
                fillCoffee();
                break;
            case 'take':
                takeMoney();
                break;
            case 'remaining':
                printStatus();
                break;
            case 'exit':
                console.log('\x1b[42m', 'thanks for using the coffee machine!');
                break;
            default:
                console.log('Please enter a valid action!');
                break;

        }
    } while (!exit);
}

main();

function buyCoffee() {
    let coffeeType = prompt('What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino ');
    coffeeType = parseInt(coffeeType);
    switch (coffeeType) {
        case 1:
            const espressoWater = 250;
            const espressoCoffee = 16;
            const espressoPrice = 4;

            if (waterInMachine < espressoWater || coffeeInMachine < espressoCoffee) {
                console.log('Sorry, not enough ingredients!');
            } else {
                console.log('I have enough resources, making you a coffee!')
                console.log('enjoy your coffee! :D')

                waterInMachine -= espressoWater;
                coffeeInMachine -= espressoCoffee;
                moneyInMachine += espressoPrice;
                cupsInMachine--;
            }

            break;
        case 2:
            const latteWater = 350;
            const latteMilk = 75;
            const latteCoffee = 20;
            const lattePrice = 7;

            if (waterInMachine < latteWater || milkInMachine < latteMilk || coffeeInMachine < latteCoffee) {
                console.log('Sorry, not enough ingredients!');
            } else {
                console.log('I have enough resources, making you a coffee!')
                console.log('enjoy your coffee! :D')
                waterInMachine -= latteWater;
                milkInMachine -= latteMilk;
                coffeeInMachine -= latteCoffee;
                moneyInMachine += lattePrice;
                cupsInMachine--;
            }
            break;
        case 3:
            const cappuccinoWater = 200;
            const cappuccinoMilk = 100;
            const cappuccinoCoffee = 12;
            const cappuccinoPrice = 6;

            if (waterInMachine < cappuccinoWater || milkInMachine < cappuccinoMilk || coffeeInMachine < cappuccinoCoffee) {
                console.log('Sorry, not enough ingredients!');
            } else {
                console.log('I have enough resources, making you a coffee!')
                console.log('enjoy your coffee! :D')
                waterInMachine -= cappuccinoWater;
                milkInMachine -= cappuccinoMilk;
                coffeeInMachine -= cappuccinoCoffee;
                moneyInMachine += cappuccinoPrice;
                cupsInMachine--;
            }
            break;
        default:
            console.log('error');
            break;

    }
}

function fillCoffee() {
    let amountWater = prompt('Write how many ml of water do you want to add: ');
    let amountMilk = prompt('Write how many ml of milk do you want to add: ');
    let amountCoffee = prompt('Write how many grams of coffee beans do you want to add: ');
    let amountCups = prompt('Write how many disposable cups of coffee do you want to add: ');

    waterInMachine += parseInt(amountWater);
    milkInMachine += parseInt(amountMilk);
    coffeeInMachine += parseInt(amountCoffee);
    cupsInMachine += parseInt(amountCups);
}

function takeMoney() {
    console.log(`I gave you $${moneyInMachine}`);
    moneyInMachine = 0;
}

function printStatus() {
    console.log('The coffee machine has:');
    console.log(`${waterInMachine} of water`);
    console.log(`${milkInMachine} of milk`);
    console.log(`${coffeeInMachine} of coffee beans`);
    console.log(`${cupsInMachine} of disposable cups`);
    console.log(`${moneyInMachine} of money`);
}