//unlimited parameter
function sumofall()
{
    let sum = 0;
    for(var i = 0; i<arguments.length; i++)
    {
        sum += arguments[i];

    }
    return sum;
}
let a = sumofall(1,2,3,4,5);
console.log(a);
