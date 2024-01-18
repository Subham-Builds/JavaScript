let persons = {id: 101, name: "Subham"};
console.log(persons);
//new
let emp = new Object();
emp.id = 1101;
emp.name = "Raman"; 
console.log(emp);

//using function
function emp1(i,n)
{
    this.id = i;
    this.name = n;   //this keyword
}
const e = new emp1(123,'Unnamed');
console.log(e);

//for deletion
delete emp.id
console.log(emp);