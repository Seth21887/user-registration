//selecting the txtEmail with pure JS
//best practice
//let email=document.getElementById("txtEmail");
//types of selectors:
// #id, .class, tag name
//in jQuery we will use them
//jQuery = $

//selecting by ID
email=$("#txtEmail").val();
console.log(email);

//selecting by className
// let formControl = document.getElementsByClassName("form-control"); //dot not needed because its a class name here
// for(let i=0;i<formControl.length;i++){
//     formControl[i].style.display="none";
    //this is how to hide elements with JS
// }
// console.log(formControl[0]);
let formControl = $(".form-control");
formControl.hide();

//selecting by tagName
// let labels = document.getElementsByTagName("label");
// console.log(labels);
let labels = $("label");
console.log(labels);