let arr = [1,2,3,4,5,6];
arr.push(); //last element me push
console.log(arr);
arr.pop(); //last se pop
console.log(arr);
arr.shift(); //first se pop
console.log(arr);
arr.unshift(0); //add first pe
console.log(arr);

let a1 = [1,3];
let a2 = [4,5];
let a3 = a1.concat(a2);
console.log(a3);

//array ko string me banana
let a4 = a3.join("");
console.log(a4);
//array reverse
console.log(a3.reverse());

//slice
let arr1 = [1,2,3,4,5];
console.log(arr1.slice(2,5));

//Object inside array(Array of Object)
const userinfo = [{name: 'SUbham',gender: "male"},{name: 'SUbha',gender: "female"}]
for(let i = 0; i<userinfo.length; i++)
{
    if(userinfo[i]["gender"] == "male")
    {
        console.log(userinfo[i]["name"]);
    }
    //Subham
}