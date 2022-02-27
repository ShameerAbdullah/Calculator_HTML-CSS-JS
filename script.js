function del() 
{
  document.getElementById("result").value = "";
}

function calc() 
{
  var i;
  i=document.getElementById("result").value;
  
  var j
  j=eval(i);

  document.getElementById("result").value = j;
}

function screens(value) 
{
  document.getElementById("result").value += value;
}

