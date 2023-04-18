// @ts-check
const { add, multiply, subtract, divide } = require('./calculator')

/**
 * @file index.js is the root file for this example app
 * @author Travor Johnsson
 * @see <a href="https://johnssonmedia.com"> Johnsson Media </a>
 */

/**
 * Student Name
 * @type {string}
 */
const studentName = 'Jonh Doe'

/**
 * Array of grades
 * @type {Array<number>}
 */
const grades = [98, 97.7, 76, 89]

/**
 * Todo object
 * @type {{id: number|string, text: string}}
 */
const todo = {
    id: 1,
    text: 'Hello'
}

{/* FUNCTION DESCRIPTION */}

/**
 * Calculate tax
 * @param {number} amount - total amount
 * @param {number} tax - tax percentage
 * @returns {string} - Total with a dollar sign
 */
const calculateTax = (amount, tax) => {
    return `$${amount + tax * amount}`
}

/**
 * A Student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {number|string} [age] - Student age (optional)
 * @property {boolean} isActive - Student is active
 */

/**
 * @type {Student}
 */
const student = {
    id: 1,
    name: 'Kaio M.',
    age: 19,
    isActive: true
}

/**
 * Class to create a person object
 */
class Person {
    /**
     * 
     * @param {Object} personInfo - Information about the person
     */
    constructor(personInfo) {
        /**
         * @property {string} name - Persons name
         */
        this.name = personInfo.name
        /**
         * @property {string} age - Persons age
         */
        this.age = personInfo.age
    }
    
    /**
     * @property {Function} greet - A greeting with the name and age
     * @returns void - return void because its just a console.log so its not going to return anything
     */
    greet() {
        console.log(`Hello my name is ${this.name} and i am ${this.age}`)
    }
}

/**
 * See {@link Person}
 */

const person1 = new Person({
    name: 'Kaio M.',
    age: 30
})

console.log(add(20, 50))