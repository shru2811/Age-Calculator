let searchBox = document.querySelector(".input input");
let calBtn = document.querySelector(".calculate");
let display = document.querySelector(".Age");
calBtn.addEventListener("click",function(){
    let date = new Date(searchBox.value);
    let Currdate = new Date();
    if(Currdate<date){
        display.innerText = "Date of birth needs to be earlier than the age at date ";  
        display.style.textDecoration = "underline";
    }
    else{
        let yr = Currdate.getFullYear() - date.getFullYear();
        let mon = Currdate.getMonth() - date.getMonth();
        let days = Currdate.getDate() - date.getDate();

        if(mon<0){
            mon+=11;
            yr-=1;
        }   
        if(days<0){
            let numDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
            days+=numDay;
        }
        
        display.innerText = `Your Age is: ${yr} years ${mon} months & ${days} days`;

    }
});