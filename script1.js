
function postArticleEventArticle() {
   var userNameElement = document.getElementById("name");
   var blogEmailElement = document.getElementById("email");
   var blogArticleElement = document.getElementById("textboxartical");
    var errorFlag=false
   var errorMessageElement = document.getElementById("errorMessage");
    errorMessageElement.innerHTML = "";
    if (userNameElement.value == "") {
        errorMessageElement.innerHTML += "name cannot be empty";
        errorFlag = true;
    }
    if (blogEmailElement.value = "") {
        errorMessageElement.innerHTML += "& emailid cannot be empty";
        errorFlag = true;
    }
    if (blogArticleElement.value == "") {
        errorMessageElement.innerHTML += "Article cannot be empty";
        errorFlag = true;
    }
    if (errorFlag == false)
{
      var  message = "ThankYou" + userNameElement.value + "for submitting the blog " 
    alert(message);
}
}
