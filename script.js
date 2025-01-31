let studentName = "Mitchell Bennett"
let studentAge = 25
let isEnrolled = true


console.log(`Hello, my name is ${studentName} and i am ${studentAge} years old. I am currently enrolled in the Computer Programming program.`)
console.log(isEnrolled)


let string = "This is a string value"
let number = 12345
let boolean = true
let favouriteFood = ['Chicken', ' eggs' , ' popcorn' , ' cookies']
let gymDays = {
    day1: "Push Day",
    day2: "Pull Day",
    day3: "Leg Day",
    day4: "Cardio Day"
}

console.log(string)
console.log(number)
console.log(`here is a list of some of my favourite foods: ${favouriteFood}`)
console.log(`The following is my gym routine: ${gymDays.day1}, ${gymDays.day2}, ${gymDays.day3}, ${gymDays.day4}`)
console.log(`All of the above is ${boolean}`)

console.log(`We are now going to use the previously defined number, ${number} and use it for basic operations`)

number = number + 7655
console.log(number)

number = number - 10000
console.log(number)

number = number * 5
console.log(number)

number = number / 10
console.log(number)


let x = 100
let y = 50
let z = 50

console.log(x > y)
console.log(y > z)
console.log(x === y + z)
console.log(y !== x + z)

let a = true
let b = false

console.log(a && b)
console.log(a || b)
console.log(!a)
console.log(!b)