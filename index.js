// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const number = document.getElementById('phone');
// const password = document.getElementById('password');
// const cpassword = document.getElementById('cpassword');

// form.addEventListener('submit' , (event) => {
//     event.preventDefault();
//     validate();
// })

// const sendData = (usernameVal, sRate , count ) => {
//     if(sRate === count ) {
//         alert('Successfull Registered ');
//         swal("Welcome!"  + usernameVal , "Registration Successful", "success");

//     }
// }


// const successMsg = (usernameVal) =>{
//     let formCon = document.getElementsByClassName('form-control');
//     var count = formCon.length - 1 ;
//    for( var i = 0 ; i < formCon.length; i++) {
//        if(formCon[i].className === "form-control success") {
//          var sRate = 0 + i ;
//          console.log(sRate);
//         sendData(usernameVal, sRate , count);
//        }else {
//          return false ;
//        }
//    }    

// }



// const isEmail = (emailVal) => {
//     var atSymbol = emailVal.lastIndexOf('@');
//     if(atSymbol < 1) return false;
//     var dot = emailVal.lastIndexOf('.');
//     if(dot <= atSymbol + 2 ) return false ;
//     if(dot === emailVal.length - 1 ) return false ;
//     return true ;
// }

// const validate = () => {
//     const usernameVal = username.value.trim();
//     const emailVal = email.value.trim();
//     const numberVal = phone.value.trim();
//     const passwordVal = password.value.trim();
//     const cpasswordVal = cpassword.value.trim();

//     if(usernameVal === ""){
//         setErrorMsg(username, 'Fill username');
//     }else if(usernameVal.length <= 3){
//         setErrorMsg(username, 'Min 5 char');
//     }else {
//         setSuccessMsg(username);
//     }

//     if(emailVal === ""){
//         setErrorMsg(email, 'Fill Email');
//     }else if( ! isEmail(emailVal)){
//         setErrorMsg(emailVal, 'Not valid Email');
//     }else {
//         setSuccessMsg(email);
//     }

//     if(numberVal === ""){
//         setErrorMsg(phone, 'Fill Email');
//     }else if( numberVal.length != 10){
//         setErrorMsg(phone, 'Not valid Number');
//     }else {
//         setSuccessMsg(phone);
//     }

//     if(passwordVal === ""){
//         setErrorMsg(password, 'Fill password');
//     }else if(password.length <=5 ){
//         setErrorMsg(password, 'Not valid password');
//     }else {
//         setSuccessMsg(password);
//     }

//     if(cpasswordVal === ""){
//         setErrorMsg(cpassword, 'Fill comfirm password');
//     }else if( passwordVal != cpasswordVal ){
//         setErrorMsg(cpassword, 'Not match with password');
//     }else {
//         setSuccessMsg(cpassword);
//     }
//     successMsg(usernameVal);

// }

// function setErrorMsg (input , errormsg) {
//     const formControl = input.parentElement ;
//     const small = formControl.querySelector('small');
//     formControl.className = "form-control error";
//     small.innerText = errormsg ;
// }

// function setSuccessMsg (input) {
//     const formControl = input.parentElement ;
//     formControl.className = "form-control success";
// }




const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const number = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit' , (event) => {
    event.preventDefault();
    validate();
})

const sendData = (usernameVal, count, sRate) => {
    if( sRate === count ){
        alert('Registered Successfully');
        swal("Welcome!"    + usernameVal , "Registration Successful", "success");
        
    }
}



const successMsg = (usernameVal) => {
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length - 1 ;
    for( var i=0; i < formCon.length ; i++) {
        if(formCon[i].className === "form-control success") {
            var sRate = 0 + i ;
            sendData (usernameVal,  count , sRate);
            console.log(sRate);
        
        }else {
            return false ;
        }

    }
}


const isEmail = (emailVal) => {
    var atSymbol = emailVal.lastIndexOf('@');
    if(atSymbol < 1 ) return false ;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false;
    if( dot === emailVal.length - 1) return false ;
    return true ;
} 

const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const numberVal = number.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();


    if(usernameVal === ""){
        setErrorMsg(username, 'Must fill');
    }else if(usernameVal.length <= 3){
        setErrorMsg(username, 'Min 4 char');
    }else {
        setSuccessMsg(username);
    }

    if(emailVal === ""){
        setErrorMsg(email, 'Must fill');
    }else if( ! isEmail(emailVal)){
        setErrorMsg(emailVal, 'Min 4 char');
    }else {
        setSuccessMsg(email);
    }
 

    if(numberVal === ""){
        setErrorMsg(phone, 'Must fill');
    }else if(numberVal.length != 10 ){
        setErrorMsg(phone, 'Not valid number');
    }else {
        setSuccessMsg(phone);
    }

    
    if(passwordVal === ""){
        setErrorMsg(password, 'Must fill');
    }else if(passwordVal.length <= 5 ){
        setErrorMsg(password, 'Not valid password');
    }else {
        setSuccessMsg(password);
    }

    if(cpasswordVal === ""){
        setErrorMsg(cpassword, 'Must fill');
    }else if(passwordVal != cpasswordVal ){
        setErrorMsg(cpassword, 'Not valid number');
    }else {
        setSuccessMsg(cpassword);
    }

    successMsg( usernameVal );

}

function setErrorMsg (input , errormsg) {
    const formControl = input.parentElement ;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsg ;
}

function setSuccessMsg (input) {
    const formControl = input.parentElement ;
    formControl.className = "form-control success";

}