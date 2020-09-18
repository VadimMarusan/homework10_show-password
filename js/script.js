function showHidePassword () {
    let firstIcon = document.getElementById("fa-eye1");
    let secondIcon = document.getElementById("fa-eye2");

    firstIcon.addEventListener('click', () =>{
        if (firstIcon.classList.contains('fa-eye')) {
            firstIcon.classList.replace('fa-eye', 'fa-eye-slash');
            document.getElementsByClassName('input-password')[0].type = 'text';
        }else{
            firstIcon.classList.replace('fa-eye-slash', 'fa-eye');
            document.getElementsByClassName('input-password')[0].type = 'password';
        }
    });
    secondIcon.addEventListener('click', () =>{
        if (secondIcon.classList.contains('fa-eye-slash')) {
            secondIcon.classList.replace('fa-eye-slash', 'fa-eye');
            document.getElementsByClassName('input-password')[1].type = 'password';
        }else{
            secondIcon.classList.replace('fa-eye', 'fa-eye-slash');
            document.getElementsByClassName('input-password')[1].type = 'text';
        }
    });
}

let buttonConfirm = document.getElementById("confirm");
let ErrorTextArea = document.getElementById("error-text");
buttonConfirm.onclick = compare;

function compare() {
    let inputPassword1 = document.getElementById("pass1").value
    let inputPassword2 = document.getElementById("pass2").value

    if(inputPassword1 === inputPassword2) {
        alert ("You are welcome")
    }
    else if (inputPassword1 !== inputPassword2) {
        ErrorTextArea.innerHTML='<span style="color:red;">Нужно ввести одинаковые значения</span>';
    }
}



showHidePassword ()