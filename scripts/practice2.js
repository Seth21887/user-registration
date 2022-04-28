//click on the button and increase the counter

//function
    //variable counter
    //display the var into the id counter

//USING JAVSCRIPT
    // let c=0;
// const DIV=document.getElementById("counter");
// function counter(){
//     c++;
//     DIV.innerHTML=c;

// }

//USING JQUERY
let c=0;
let div=$("#counter");

function counter(){
    c++;
    div.text(c);
}

function init(){
    //hook event
    $("#div-info2").hide();
    $("#btn-counter").on('click',counter);
    $("#btn-counter").on('mouseover',function(){
        console.log("The user attempts a click");
    })
    $("#link-info1").on('click',function(){
        $("#div-info2").hide();
        $("#div-info1").show();
        $(this).css('color','yellow');
    })
    
    $("#link-info2").on('mouseover',function(){
        $("#div-info1").hide();
        $("#div-info2").show();
        $(this).css('color','red');
    })
}

window.onload=init;
