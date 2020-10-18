function loginEvent()
{
    var userEmailElement=document.getElementById("emailId");
    var blogPasswordElement=document.getElementById("password");
     var errorFlag=false
     var errorMessageElement=document.getElementById("errorMessage");
    errorMessageElement.innerHTML="";
    if (userEmailElement.value=="")
    {
        errorMessageElement.innerHTML+="email id cannot be empty";
        errorFlag=true;
    }
    if (blogPasswordElement.value=="")
    {
      errorMessageElement.innerHTML+="& password cannot be empty";
      errorFlag=true;
    }
    if(errorFlag==false)
    {
      var message="ThankYou for logging in"+userEmailElement.value;
      alert(message);
         location.href="file:///C:/Users/Lenovo/Desktop/phase1%20project/postartical.html";
    }
        }

