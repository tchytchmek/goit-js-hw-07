
    // <input type="text" id="name-input" placeholder="Please enter your name" />
    // <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

    const input = document.querySelector("#name-input");
    const greeting = document.querySelector("#name-output");
    input.addEventListener("input", handleInput);

    function handleInput(event) { 
       event.target.value = event.target.value.trim();
       if(event.target.value == false){
         greeting.textContent = "Anonymous";
       }else{
       greeting.textContent = event.target.value;
       }
    } 