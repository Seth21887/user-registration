function saveUser(user){
    console.log(user);
    let val=JSON.stringify(user); //this will parse the object into a string
    console.log(val);
    localStorage.setItem("users",val);
}