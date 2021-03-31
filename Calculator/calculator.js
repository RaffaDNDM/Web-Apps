"use strict"    

var operations = []
var nums = []
var NEW_NUM = true
var COMPUTED = false

function multiply(a, b)
{
    return a*b;
}

function divide(a, b)
{
    return a/b;
}

function sum(a, b)
{
    return a+b;
}

function subtract(a, b)
{
    return a-b;
}

function mod(a, b)
{
    return a%b;
}

function operation(id)
{
    if(nums.length>0 && nums.length<=(operations.length+1))
    {
        NEW_NUM = true
        operations.push(id)
    
        var symbol = ""
        if(id == "multiply")
            symbol = "*"
        else if(id == "divide")
            symbol = "/"
        else if(id == "sum")
            symbol = "+"
        else if(id == "subtract")
            symbol = "-"
        else if(id == "mod")
            symbol = " mod "
            
        if (COMPUTED)
        {
            document.getElementById("listOPs").innerHTML = nums[0]+symbol
            COMPUTED = false
        }   
        else
            document.getElementById("listOPs").innerHTML += symbol
    }

}

function num(id)
{
    if (COMPUTED)
    {
        nums.length = 0
        document.getElementById("listOPs").innerHTML = id        
        COMPUTED = false
    }
    else
        document.getElementById("listOPs").innerHTML += id

    if (NEW_NUM)
    {
        nums.push(id)
        NEW_NUM = false
    }
    else
        nums[nums.length - 1] += id
}

function clear_op()
{
    nums.length = 0
    operations.length = 0

    document.getElementById("result").innerHTML=""
    document.getElementById("listOPs").innerHTML=""
    COMPUTED = false
}

function compute()
{
    if(nums.length>0)
    {
        var result = parseInt(nums[0], 10)

        for(var i=1; i<nums.length; i++)
        {
            if(operations[i-1] == "multiply")
                result = multiply(result, parseInt(nums[i]))
            else if(operations[i-1] == "divide")
                result = divide(result, parseInt(nums[i]))
            else if(operations[i-1] == "sum")
                result = sum(result, parseInt(nums[i]))
            else if(operations[i-1] == "subtract")
                result = subtract(result, parseInt(nums[i]))
            else if(operations[i-1] == "mod")
                result = mod(result, parseInt(nums[i]))        
        }

        nums.length = 0
        nums.push(result)
        operations.length = 0
        NEW_NUM = true
        document.getElementById("result").innerHTML=result
        COMPUTED = true
    }    
}