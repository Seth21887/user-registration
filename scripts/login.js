function login(){
    //get values from the form
    let inputEmail=$("#txtEmail").val();
    let inputPassword=$("#txtPassword").val();
    //use a flag to know if the user was found or not
    let flag=false;
    //get the users from LS
    let userList=readUsers(); //this function is on the storeManger
    //travel the userList
    for(let i=0;i<userList.length;i++){
        //recommended
        let user=userList[i];
        if(user.email===inputEmail && user.password===inputPassword){
            flag=true;
            window.location="users.html";
        }
        if(!flag){
            $("#alertError").removeClass("hide");
            setTimeout(function(){
                $("#alertError").addClass("hide");
            },3000);
        }
        //not recommended
        // if(userList[i].email==inputEmail){
            
        // }
    }
}

function init(){
    $("#loginBtn").click(login);
}



window.onload=init;

