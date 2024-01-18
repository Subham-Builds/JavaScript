const num = [1,2,31,4,5,6];
for(let i = 0; i<num.length; i++)
{
    if(num[i]%2 == 0)
    {
        console.log(num[i]);
    }
}
//Largest number in an array
let max = num[0];
for(let i = 0; i<num.length; i++)
{
    if(num[i]>max)
    {
        max = num[i];
    }
}
console.log(max);