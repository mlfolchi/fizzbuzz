var game = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for(i = 0; i < game.length; i ++) {
    if((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
        console.log("FizzBuzz");
    } else if((i + 1) % 3 === 0) {
        console.log("Fizz");
    } else if((i + 1) % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(game[i]);
    }
}
