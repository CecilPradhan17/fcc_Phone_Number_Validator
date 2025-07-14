const inputValue = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const outputValue = document.getElementById("results-div");

const addOutput = (validity,input) => 
{
  outputValue.innerHTML += `<br>${validity} US number: ` + input;
}

const checkNumber = () => 
{
  const regex = /\D/g;
  const check = /^1?\s?(\d{3}|\(\d{3}\))[\s-]?\d{3}[\s-]?\d{4}/g;
  let input = (inputValue.value).trim();

  if (input === "")
    alert("Please provide a phone number");

  if (check.test(input))
  {
    const newInput = input.replace(regex,"");

    if(newInput.length === 10)
      addOutput("Valid",input);
    else if(newInput.length === 11 && input[0] === '1')
      addOutput("Valid",input);
    else
      addOutput("Invalid",input);

  }
  else
    addOutput("Invalid",input);
}

const clearNumber = () => 
{
  outputValue.textContent = "";
  inputValue.value = "";
}

clearBtn.addEventListener("click",clearNumber);
checkBtn.addEventListener("click",checkNumber);