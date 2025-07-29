let currentdisplay = "0";
let resultdisplay = false;

function append(value)
{
    if(currentdisplay === 0 || resultdisplay)
    {
        currentdisplay = value
    }
    else
    {
        currentdisplay = currentdisplay + value;
    }
    resultdisplay = false;
    updateDisplay();
}

function updateDisplay()
{
    let displayElement = document.getElementById('display');
    displayElement.textContent = currentdisplay;
}

function calculate()
{
    try{
    let result = eval(currentdisplay);
    currentdisplay += "\n=" + result.toString();
    updateDisplay();
    }

    catch(err){
        currentdisplay += "\nError";
        updateDisplay();
    }
    resultdisplay = true;
}

function clearLastElement()
{
    currentdisplay = currentdisplay.slice(0,-1);

    if (currentdisplay === ""){
        currentdisplay = "0";
    }

    updateDisplay();
}

function clearDisplay()
{
    currentdisplay ="0";
    resultdisplay = false;

    updateDisplay();
}