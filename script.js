// function 1
const checkNumber = function(number){
    if (number > 100) {
        return true;
    }
    return false;
};

console.log(checkNumber(105));
console.log(checkNumber(95));
console.log(checkNumber(0));
console.log(checkNumber(100));


//shorter written:
const numberIsBig = function(number) {
    return number > 100;
};
console.log(numberIsBig(105));
console.log(numberIsBig(95));


// function 2
const getBouncerReaction = function(
    ageVisitor,
    maxVisitors, 
    currentVisitors, 
)   {
    if (ageVisitor < 18) {
        return "this is a club for adults";
    }

    if (currentVisitors >= maxVisitors){
        return "it's too busy now, come back later";
    } else {
        return "come in"; 
    }
};

console.log(getBouncerReaction(15, 0, 2000));
console.log(getBouncerReaction(50, 2000, 1999));
console.log(getBouncerReaction(40, 2000, 2000));
console.log(getBouncerReaction(30, 2000, 2999));


// function 3
const calculateAverage = function(
    number1,
    number2,
    number3,
    number4,
    number5
) {
    const total = number1 + number2 + number3 + number4 + number5;
    const average = total / 5;
    return average;
}

console.log(calculateAverage(2, 3, 4, 5.5, 6));


// with rounded number
const roundedNumber = function(
    number1,
    number2,
    number3,
    number4,
    number5
) {
    const total = number1 + number2 + number3 + number4 + number5;
    const average = total / 5;
    const averageRounded = Math.round(average);
    return averageRounded;
}

console.log(roundedNumber(2, 3, 4, 5.5, 6));