const students = [
    {id: 21, name:"rakin ahmed"},
    {id: 23, name:"sarwar hossain"},
    {id: 25, name:"alvi hoque"}
    
]
// const output =[]

// for(let i=0; i<students.length; i++){
//     const elements= students.map(x=x)
//     return id
// }


const names = students.map(s=>s.name)
const ids= students.map(s=>s.id)
const bigger= students.filter(s=>s.id<25)
const smaller= students.find(s=>s.id<25)

console.log(smaller);



