const menuList = document.getElementById('menulist')

function openmenu(){
    menuList.style.left = '0';
}
function closemenu(){
    menuList.style.left = '-300px';
}

const genre = document.getElementById('genre')
const plus = document.getElementById('plus')
const times = document.getElementById('times')
const add = document.getElementById('add')
const country = document.getElementById('country')
const xmark = document.getElementById('xmark')


function openGenre(){
    genre.style.display = 'block';
    plus.style.display = 'none';
}
function closeGenre(){
    genre.style.display = 'none';
    plus.style.display = 'block';
}

function openCountry(){
    country.style.display = 'block';
    add.style.display = 'none';
}
function closeCountry(){
    country.style.display = 'none';
    add.style.display = 'block';
}


const form = document.getElementById('form');
const account = document.getElementById('account');
const formContainer = document.getElementById('form-container');
const registerContainer = document.getElementById('register-container');



function goToLogin(){
    form.style.top = '50%';
    formContainer.style.display = 'block';
   
}

function closeForm(){
    form.style.top = '-50%';
    formContainer.style.display = 'none';
}

function goToSignIn(){
    account.style.top = '50%';
    registerContainer.style.display = 'block';
}

function closeAccount(){
    account.style.top = '-50%';
    registerContainer.style.display = 'none';
}






function SubmitEvent(){

    var email = document.getElementById('email');
    var password = document.getElementById('password');{

        if (email.value == "" || password.value == ""){
            alert("log in unseccesful, Please try again")
            return true;
        }
        else{
            alert('loged in successfully')
        }
    }

}

function sendEvent(){

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confPassword = document.getElementById('conf-Password '); {

        if (name.value == "" || email.value == "" || password.value == "" || confPassword == "") {
            alert('log in unseccesful, Please try again')
                      
            return false;
           
        }

        else{
            alert('successfully submitted')
        }
    }

}


