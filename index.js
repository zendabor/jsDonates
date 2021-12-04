import './index.css';
import * as func from './src/core/utils/utils';
import App from './src/modules/app';




const donates = [
    { amount: 4, date: new Date() },
    { amount: 20, date: new Date() },
    { amount: 3, date: new Date() },
    { amount: 1, date: new Date() },
]
console.log(donates.map(item => item.amount))
const totalAmount = func.calculateSumOfNumbers(donates.map(item => item.amount));


const app = new App({ donates, totalAmount });
app.run()