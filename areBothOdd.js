function areBothOdd(num1,num2)
{
    if(num1%2 !== 0 && num2%2 !== 0)
    {
        console.log(true);
    }
    else
    {
        console.log(false);
    }
}

areBothOdd(1,3);
areBothOdd(1,4);
areBothOdd(2,3);
areBothOdd(0,0);