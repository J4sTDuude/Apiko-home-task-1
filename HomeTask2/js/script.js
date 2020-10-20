
function createDom(tagName, attributes, children){

    // Create root element
    const rootElement = document.createElement(tagName);

    if (attributes.constructor.name === 'Object')
    {
        for (const attr in attributes) {

            if (attr === 'textContent') rootElement.textContent = attributes[attr]

            else if(attr === 'innerText') rootElement.innerText = attributes[attr]

            else if(attr === 'innerHTML') rootElement.innerHTML = attributes[attr]

            else  rootElement.setAttribute(attr, attributes[attr])

        }
    }

    // Add Children
    if (Array.isArray(children)) {
        children.forEach((el)=> {
            rootElement.appendChild(el)

        })
    }

    return rootElement;

}

var view = createDom('div', {id: 'header'}, [
    createDom('div', {textContent: 'Привіт!'}),
    createDom('div', {textContent: ' Базовий приклад SPA без використання сторонніх бібліотек.'}),
    createDom('a', {href: '#', textContent: 'Перейти на привітання'}),
    createDom('a', {href: '#', textContent: 'Перейти назад'}),
])

console.log(view);
console.dir(view);


function checkForm(){
    console.log('E-mail: ' + document.getElementById('exampleInputEmail1').value);
    console.log('Password: ' + document.getElementById('exampleInputPassword1').value);
    return false;
}

function emailValid() {
    const form = document.getElementById("form")
    const email = document.getElementById("exampleInputEmail1").value
    const text = document.getElementById("text")
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.match(pattern))
    {
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML = "Your email is valid."
        text.style.color = "#00ff00"
    }
    else{
        form.classList.remove("valid")
        form.classList.add("invalid")
        text.innerHTML = "Please enter valid email"
        text.style.color = "#ff0000"
    }

    if(email === "")
    {
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML = ""
        text.style.color = "#00ff00"
    }

}


function passwordValid() {
    const form = document.getElementById("form")
    const password = document.getElementById("exampleInputPassword1").value
    const text = document.getElementById("text2")
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if(password.match(pattern))
    {
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML = "Your password is valid."
        text.style.color = "#00ff00"
    }
    else{
        form.classList.remove("valid")
        form.classList.add("invalid")
        text.innerHTML = "Your password must have Minimum 8 characters. <br> At least 1 lowercase character.<br> At least 1 digit.<br>At least 1 special character.   "
        text.style.color = "#ff0000"
    }

    if(password === "")
    {
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML = ""
        text.style.color = "#00ff00"
    }

}