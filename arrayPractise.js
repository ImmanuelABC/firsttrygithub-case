const nums = [1, 2, 3, 4, 5]
nums.push(6)
nums.pop()
nums[1] = 100
console.log(nums) // [1, 100, 3, 4, 5]
nums.forEach(item => {
    console.log(item)
} )// 1, 100, 3, 4, 5

const students = [
    { name: 'Alice', score: 50 },
    { name: 'Bob', score: 60 },
    { name: 'Charlie', score: 90 }
]
console.log("average score:", students.reduce((sum, student) => sum + student.score, 0) / students.length) // Alice
console.log("highest score:", students.reduce((max, student) => student.score > max ? student.score : max, 0)) // Charlie
console.log("students with score below 60:", students.filter(student => student.score < 60).map(student => student.name)) // Alice
console.log("all add 5 points:", students.map(student => ({ name: student.name, score: student.score + 5 }))) // Alice 55, Bob 65, Charlie 95

function add(a, b) {
    return a + b
}
function sub(a, b) {
    return a - b
}
function mul(a, b) {
    return a * b
}
function div(a, b) {
    return a / b
}
console.log("add:", add(10, 5)) // 15
console.log("sub:", sub(10, 5)) // 5
console.log("mul:", mul(10, 5)) // 50
console.log("div:", div(10, 5)) // 2


const scores = [50, 60, 90, 80, 70]
const pass = scores.filter(score => score >= 60)
const tenX = scores.map(score => score * 10)
const totle = scores.reduce((sum, score) => sum + score, 0)
const allabove50 = scores.every(score => score > 50)
console.log("all results:", pass, tenX, totle, allabove50) // [60, 90, 80, 70] [500, 600, 900, 800, 700] 350 false