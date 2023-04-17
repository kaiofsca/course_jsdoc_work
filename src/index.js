// @ts-check

{/* ADDING TYPES */}

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