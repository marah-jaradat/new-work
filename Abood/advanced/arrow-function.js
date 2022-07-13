const sqr = (x) => x*x;
console.log(sqr(5));


const people = [{
    name: "Abd Alrahman",
    age: 28
},
{
    name: "Ahmad",
    age: 34
},
{
    name: "Marah",
    age: 25
},
{
    name: "Alaa",
    age: 22
}]

const underThirty = people.filter(p=>p.age<30)
console.log(underThirty);

const p22 = people.findI(p=>p.age === 22)
console.log(p22);