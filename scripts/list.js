//this function needs an array to make it work
function displayUsers(usersArray){
    //travel the array (array name is users)
    let tr="";
    for(let i=0;i<usersArray.length;i++){
        let user = usersArray[i];
        console.log(user);
        tr+=`
        <tr id="${user.id}">
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>${user.gender}</td>
            <td>${user.age}</td>
            <td>${user.address}</td>
            <td>${user.phone}</td>
            <td>${user.payment}</td>
            <td>${user.color}</td>
        </tr>
        `;
        //create the tmp, row, etc.
    }
    document.getElementById("usersTable").innerHTML=tr;
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