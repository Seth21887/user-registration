//this function needs an array to make it work
function displayUsers(usersArray){
    //travel the array (array name is users)
    for(let i=0;i<usersArray.length;i++){
        let user = usersArray[i];
        console.log(user);
        //create the tmp, row, etc.
    }
    //get each user
    //display the users

    //append the user on the html table (find jquery function append())
}

function init(){
    console.log("Listing users");
    let users=readUsers(); //this function is on the storeManager, getting the array
    displayUsers(users); //passing that array, users is an array.
    //displayUsers(users);
}
window.onload=init;