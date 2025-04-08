console.log("File begin")

let person = "Cole";
let cur_year = 2025;
let bir_year = 2003;

function fill(){
    console.log("fill function begin")
        const fname = document.getElementById("span_name");
        fname.innerHTML = person;
        const byear = document.getElementById("span_year");
        byear.innerHTML = bir_year;
    console.log("fill function end")
}

function age(){
    console.log("age function begin")
        fill();
        let age = cur_year - bir_year;
        alert(age);
    console.log("age function end")
}

function toddify(){
    console.log("toddify function begin")
        if(person !="Todd"){
        person="Todd"; 
        cur_year = 2030;
        bir_year = 2000;
        }
        else{
            person = "Cole";
            cur_year = 2025;
            bir_year = 2003;
        }
    console.log("toddify function end")
}

function blank(){
    console.log("blank function begin")
        const fname = document.getElementById("span_name");
        fname.innerHTML = "____";
        const byear = document.getElementById("span_year");
        byear.innerHTML = "____";
    console.log("blank function end")
}



console.log("File end")

