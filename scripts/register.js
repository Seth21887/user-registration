//create a User constructor
let c=0;
class user {
    constructor(fName, lName, email, password, gender, age, address, phone,payment, color) {
        this.firstName = fName;
        this.lastName = lName;
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.age = age;
        this.address = address;
        this.phone = phone;
        this.payment = payment;
        this.color = color;
        this.id=c++;
    }
}
function isValid(user){
    let valid=true;
    $("input").removeClass("input-error");
    if(user.email.length==0){
        valid=false;
        console.error("Invalid email");
        $("#txtEmail").addClass("input-error");
    }
    if(user.password.length==0){
        valid=false;
        console.error("Invalid password");
        $("#txtPassword").addClass("input-error");
    }
    return valid;

}
function validatePass(){
    console.log("Validating Password");
    //get the value from the form
    let txtPass=$("#txtPassword"); //using a variable because we want to travel DOM only once
    let password=txtPass.val();
    //compare if the password is less than six characters? (if statement)
    if(password.length<6){
        txtPass.css("background","#ff9898");
    }else{
        txtPass.css("background","#64ce66"); //jquery function to change CSS
    }
}


function register(){
    let inputFName= $("#txtFname").val(); //getting the value
    let inputLName= $("#txtLname").val();
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();
    let inputGender = $("#txtGender").val();
    let inputAge = $("#txtAge").val();
    let inputAddress = $("#txtAddress").val();
    let inputPhone = $("#txtPhone").val();
    let inputPayment = $("#selPayment").val();
    let inputColor = $("#txtColor").val();

    let newUser = new user(inputFName,inputLName,inputEmail,inputPassword,inputGender,inputAge,inputAddress,inputPhone,inputPayment,inputColor);

    if(isValid(newUser)){
        saveUser(newUser); //this function is on storeManager.js
        $('input').val(""); //clears the inputs
    }
    

    console.log(inputFName,inputLName,inputEmail,inputPassword,inputGender,inputAge,inputAddress,inputPhone,inputPayment,inputColor);
    
}

function init(){
    console.log("Register");
    //hook events
    $("#txtPassword").keyup(validatePass); //executed everytime that the key is up
}

window.onload=init; //using window.onload allows the entire HTML to render before executing the INIT function