const STORE_KEY = "users";

function saveUser(user){
    //load the old data
    let oldData=readUsers(); //getting localstorage info
    oldData.push(user);
    let val=JSON.stringify(oldData); //this will parse the object into a string
    console.log(val);
    localStorage.setItem(STORE_KEY,val);
}

function readUsers(){
    let data=localStorage.getItem(STORE_KEY);
    console.log(data); // <---JSON
    if(!data){ //the !data means no data
        //if you get here it means its empty
        return[]; //creating the array
    }else{
        //we have data
        let list = JSON.parse(data); //parsing JSON to object
        return list; //return the array of objects
    }
}