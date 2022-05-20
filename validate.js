let signin_form = document.querySelector('#signin-form')

let signin_btn = document.querySelector('#signin-btn')

document.querySelector("#formName").addEventListener("submit", handleSubmit);
function handleSubmit(e) {


    e.preventDefault();
    let name=document.forms["formName"]["name"].value;

    let email=document.forms["formName"]["email"].value;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if(name.length<=8){
        document.getElementById("nameError").innerText="*Character must be at least 8 characters"
    }
    if(!re.test(String(email).toLowerCase())){
        document.getElementById("emailError").innerText="*Enter a valid email address"
    }
    
    
}




