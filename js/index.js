const generatePassword = (event) => {
    event.preventDefault();
    console.log(event);

    let form = document.querySelector("#checkbox-form");
    let lowercase = form.querySelector("#lowercase").checked;
    let uppercase = form.querySelector("#uppercase").checked;
    let symbols = form.querySelector("#symbols").checked;
    let numbers = form.querySelector("#numbers").checked;
    let size = form.querySelector("#password-size").value;

    console.log(lowercase, uppercase, numbers, symbols);
    console.log(size);

    let arr = [];

    if(numbers) {
        for(let i=0; i<=9; i++) {
            arr.push(String.fromCharCode(48+i));
        }
    }

    if(symbols) {
        for(let i=0; i<=3; i++) {
            arr.push(String.fromCharCode(35+i));
        }
    }

    if(lowercase) {
        for(let i=0; i<=26; i++) {
            arr.push(String.fromCharCode(97+i));
        }
    }

    if(uppercase) {
        for(let i=0; i<=25; i++) {
            arr.push(String.fromCharCode(65+i));
        }
    }

    if(!lowercase && !uppercase && !symbols && !numbers) {
        alert("Error: Selecione pelo menos um tipo de caractere");
        return;
    }

    let password = '';

    for(let i=0; i<size; i++) {
        password+=arr[Math.floor(Math.random() * arr.length)];
    }

    displayPassword(password);
}

const displayPassword = (password) => {
    const h2 = document.createElement("h2");
    h2.textContent = password;
    h2.classList.add("password");
    
    let display = document.querySelector("#password-display");
    display.classList.add("password-display");

    display.appendChild(h2);
}