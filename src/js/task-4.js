const form = document.querySelector(".login-form");
form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();

    const user = {};
    const elements = event.target.elements;

    if(elements.email.value == false || elements.password.value == false){
        alert('All form fields must be filled in');
    }else{
           user.email = elements.email.value;
           user.password = elements.password.value;
       
    }
    event.target.reset();
}