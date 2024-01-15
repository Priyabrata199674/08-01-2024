// input field identification

let Fname=document.getElementById("f_name");
let Email=document.getElementById("email");
let Pwd=document.getElementById("password");
let Uname=document.getElementById("u_name");
let Pnumber=document.getElementById("p_number");
let Cpwd=document.getElementById("c_password");

// error field identification

let err_Fname=document.getElementById("errFname");
let err_Email=document.getElementById("errMail");
let err_Pwd=document.getElementById("errPassword");
let err_Uname=document.getElementById("errUserName");
let err_Pnumber=document.getElementById("errPhoneNumber");
let err_Cpwd=document.getElementById("errCpassword");


// regular Expressions
const regPwd=RegExp("^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,15}$");
const regEmail=RegExp("^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$");
const regPnumber=RegExp("[89]{1}[0-9]{9}");

// variables

let no_fname_err=true;
let no_email_err=true;
let no_pwd_err=true;
let no_uname_err=true;
let no_pnumber_err=true;
let no_cpwd_err=true;


// Fname checking
Fname.addEventListener("input", FnameChecking);
function FnameChecking(){
    let data=Fname.value;
    // console.log("Your Full name is : ", data);
    if(data.length<1)
    {
        err_Fname.innerHTML="Required Field";
        no_fname_err=false;
        // console.log(no_fname_err);
    }else if(data.length<5)
    {
        err_Fname.innerHTML="Minimum 5 Characters required";
        no_fname_err=false;
    }else if(data.length>20)
    {
        err_Fname.innerHTML="Name can not be more than 20 characters";
        no_fname_err=false;
    }
    else{
        err_Fname.innerHTML="";
        no_fname_err=true;
    }
    
}


// Email checking

Email.addEventListener("input",EmailChecking);
function EmailChecking(){
    let data=Email.value;
    if(data.length<1){
        err_Email.innerHTML="* Required"; 
        no_email_err=false;
    }
    else if(!regEmail.test(data))
    {
        err_Email.innerHTML="Wrong pattern";
        no_email_err=false;
    }
    else{
        err_Email.innerHTML="";
        no_email_err=true;
    }
}

// password checking
Pwd.addEventListener("input",pwdchecking);
function pwdchecking(){
    let data=Pwd.value;
    // console.log(data);
    if(data.length<1)
    {
        err_Pwd.innerHTML="* Required";
        no_pwd_err=false;
    }
    else if(!regPwd.test(data))
    {
        err_Pwd.innerHTML="* Wrong pattern";
        no_pwd_err=false;
    }
    else{
        err_Pwd.innerHTML="";
        no_pwd_err=true;
    }
}

// confirm password checking
Cpwd.addEventListener("input",CpwdChecking);
function CpwdChecking(){
    let pwdata=Pwd.value;
    let cpwdata=Cpwd.value;
    console.log("password : ",pwdata,"confirm password : ",cpwdata);
    if(cpwdata.length<1)
    {
        err_Cpwd.innerHTML="* Required Field";
        err_Cpwd.style.color="red";
        no_cpwd_err=false;
    }
    else if(pwdata!== cpwdata)
    {
        err_Cpwd.innerHTML="* Password Mismatched";
        err_Cpwd.style.color="red";
        no_cpwd_err=false;
    }else{
        err_Cpwd.innerHTML="Password matched"
        err_Cpwd.style.color="green";
        no_cpwd_err=true;
    }
}

// User name checking
Uname.addEventListener("input",UnameChecking);
function UnameChecking(){
    let data=Uname.value;
    if(data.length<1)
    {
        err_Uname.innerHTML="*Required";
        no_uname_err=false;
    }
    else{
        err_Uname.innerHTML="";
        no_uname_err=true;
    }
}

// Phone Number Checking
Pnumber.addEventListener("input",PnumberChecking);
function PnumberChecking(){
    let data=Pnumber.value;
    // console.log("phonde: ",data);
    if(data.length<1)
    {
        err_Pnumber.innerHTML="* Required"; 
        no_pnumber_err=false;
    }
    else if(!regPnumber.test(data))
    {
        err_Pnumber.innerHTML="Wrong pattern of number";
        no_pnumber_err=false;
    }
    else{
        err_Pnumber.innerHTML="";
        no_pnumber_err=true; 
    }
}

function validateMyForm(){
  no_fname_err=true;
  no_email_err=true;
  no_pwd_err=true;
  no_uname_err=true;
  no_pnumber_err=true;
  no_cpwd_err=true;

FnameChecking();
EmailChecking();
pwdchecking();
CpwdChecking();
UnameChecking();
PnumberChecking();

if(
    no_fname_err === false ||
    no_pwd_err === false ||
    no_uname_err === false ||
    no_pnumber_err === false ||
    no_cpwd_err === false ||
    no_email_err === false
){
    alert("Validation failed");
    return false;
}
else{
    alert("Data Submitted successfully");
    return true;
}

}