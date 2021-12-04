export function calculateSumOfNumbers(numbers) {
    let sum = 0;
    numbers.forEach(element => {
        sum += element;
        console.log(sum)
        return sum;
    });
}


import moment from "moment";
export function getFormattedTime(date) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}