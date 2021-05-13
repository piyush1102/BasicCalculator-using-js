let screen=document.getElementById("scr");
buttons=document.querySelectorAll("button");
let scrVal=' ';
for(items of buttons)
{
    items.addEventListener("click",(e)=>{
        btnTxt=e.target.innerText;
        /*if(btnTxt=='*')
        {   
            scrVal+=btnTxt;
            screen.value+=btnTxt;
        }*/
        if ( btnTxt=='C')
        {   
            scrVal="";
            screen.value=" ";
        }
        else if(btnTxt=='=')
        {
            screen.value=eval(scrVal)
        }
        else{
            scrVal+=btnTxt;
            screen.value+=btnTxt;
        }
    })
}