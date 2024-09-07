let input=document.querySelector("#inputbox");
let btns=document.querySelectorAll(".keys");
let string="";

// using for each
// btns.foreach((bt)=>{  bt.addEventListener();       });

// using for loop with of

for(let bt of btns){  // here we r using 'of' instead of in coz its not an array , its nodeList /objlist
bt.addEventListener("click",(ev)=>{
    let btntxt=ev.target.innerText;
    if(btntxt === "="){
        try {
            string = eval(string); // Evaluate the expression
            input.value = string; // Display the result in the input box
            string="";
        } catch (e) {
            input.value = "Error"; // Display error if the expression is invalid
            string="";          
    }
    }
    else if(btntxt === "AC"){
        string="";
        input.value=string;
    }
    else if(btntxt === "DEL"){
        string=string.substring(0,string.length-1);
        input.value=string;
    }
    else {
        string+=btntxt;
        // console.log(string);
        input.value=string;
        // console.log(input);
    }
});
}
input.addEventListener("keydown",(ev)=>{
    try{
        if(ev.key === "Enter"){
        string=input.value;
        string=eval(string);
        input.value = string;
        }
    }
    catch(e){
        input.value = "Error";
    }
});