
function setFormMessage(formElement,type,message){
    const messageElement = formElement.querySelector(".form_message");
   messageElement.textContent = message;
   messageElement.classList.remove("form_message--success","form_message--error")
   messageElement.classList.add(`form_message--${type}`);
}



document.addEventListener("DOMContentLoaded",()=>{
    const loginForm = document.querySelector("#login");
    const createAccountform = document.querySelector("#createAccount");

    document.querySelector("#linkcreateAccount").addEventListener("click", e =>{
        e.preventDefault();
    loginForm.classList.add("form--hidden");
    createAccountform.classList.remove("form--hidden");
    });
    document.querySelector("#linklogin").addEventListener("click", e =>{
        e.preventDefault(); 
        loginForm.classList.remove("form--hidden");
        createAccountform.classList.add("form--hidden");
        });
        
});


