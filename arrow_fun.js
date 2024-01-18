//arrow function
const sqr = (x) => x*x;

//multiple statement;
const sum = (x,y) =>
{
    console.log('Adding ${x} and ${y}');
    return x+y;

};

//anonymous
(function ()
{
    console.log("Helo");
})(); //calling the function