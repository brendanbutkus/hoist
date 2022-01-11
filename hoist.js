// console.log(hello);
// var hello = 'world';
// var hello;
// console.log(hello);
// hello = 'world'

// var needle = 'haystack';
// test();
// function test() {
//     var needle = 'magnet';
//     console.log(needle);
// }
// var needle;
// needle = 'haystack'
// function test()
// var needle;
// needle = 'magnet';
// console.log

// var brendan = 'super cool';
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// global brendan will print
// scoped brendan will not print because the function has not been called

// var food = 'chicken';
// console.log(food);
// eat();
// function eat() {
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

// chicken will print as food was declared
// there will be error with eat(), because it has not been defined as a function yet
// i was wrong, because the function was hoisted to the top

// mean();
// console.log(food);
// var mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// this will be an error because mean() has not been declared as a function
// the function with = will not move because = acts as an anchor
// i was right

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// var genre will get hoisted to the top
// function rewind() will also get hoisted to the top
// what is undefined??
// dont var declarations get hoisted to top of scope?

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// function learn() will get hoisted to top

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}

// i dont know what happened here
// was a constructor made with keys and values?








