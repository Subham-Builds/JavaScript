let emp = {
    id: 11,
    name: 'Subham',
    age: 20

};
let k = Object.keys(emp);
let v = Object.values(emp); //[11,'Subham' ,age]
let entry = Object.entries(emp); //saath me ayega
//freeze
Object.freeze(emp);
Object.seal(emp); //upate allowed insertion not allowed