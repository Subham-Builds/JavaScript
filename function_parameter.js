function para(message)
{
    console.log(message);
}
para("HEllo");

//deafult value
function para1(
    message = "default"
)
{
    console.log(message)
}
para1();

//default parameter two 
function add(x=10, y = 9)
{
    return x+y;
}
console.log(add(1)); //x=1,y=9

