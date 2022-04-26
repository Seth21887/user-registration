//create a User constructor
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
    }
}

function register(){
    let inputFName= $("#txtfName").val(); //getting the value
    let inputLName= $("#txtLname").val();
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();
    let inputGender = $("#txtGender").val();
    let inputAge = $("#txtAge").val();
    let inputAddress = $("#txtAddress").val();
    let inputPhone = $("#txtPhone").val();
    let inputPayment = $("#selPayment").val();
    let inputColor = $("#txtColor").val();

    let newUser = (inputFName,inputLName,inputEmail,inputPassword,inputGender,inputAge,inputAddress,inputPhone,inputPayment,inputColor);
    console.log(inputFName,inputLName,inputEmail,inputPassword,inputGender,inputAge,inputAddress,inputPhone,inputPayment,inputColor);
}

function init(){
    console.log("Init function");
    //create a user and display the new user on the console
let user1 = new user("Seth","LaFountain","seth.d.lafountain@gmail.com","password","Male","35","San Diego, CA","619-713-8267","red");
let user2 = new user("Jason","Cerilli","jason@gmail.com","test1234");
console.log(user1,user2);
}
window.onload=init; //using window.onload allows the entire HTML to render before executing the INIT function