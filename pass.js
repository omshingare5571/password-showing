let input = document.querySelector("input")
let btn = document.querySelector("button")

function changepassword(){
    btn.addEventListener('click',() => {
        if(pass.type === "password"){
            pass.type = "text";
            btn.textContent = "hide password";
        }
        else{
            pass.type = "password";
            btn.textContent = "show password";
        }
    })
}

changepassword();

