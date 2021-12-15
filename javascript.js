let omistajat = document.getElementById("omistajat")

omistajat.addEventListener("click", myFunction1)





function myFunction1() {
    document.getElementById("col1").innerHTML = ""
    document.getElementById("col2").innerHTML = ""

    let img = document.createElement("img");
    img.src = "http://127.0.0.1:5500/images/radrizzani.jpg"; 
    let src = document.getElementById("col2");
    src.appendChild(img);

    document.getElementById("col1").innerHTML = "aoijswdaoiwdjaiowjdajwiodawiod oaiwdjaoiwdjoaiwjdaoiwdjoaiwdaiwjd"
}

let premierleague = document.getElementById("premierleague")

premierleague.addEventListener("click", myFunction2)

function myFunction2() {
    document.getElementById("col1").innerHTML = ""
    document.getElementById("col2").innerHTML = ""

    let img = document.createElement("img");
    img.src = ""; 
    let src = document.getElementById("col1");
    src.appendChild(img);

    let img2 = document.createElement("img");
    img2.src = "http://127.0.0.1:5500/images/premierleague.JPG";
    let src2 = document.getElementById("col2")
    src2.appendChild(img2)

}


let tärkeimmätpelaajat = document.getElementById("tärkeimmätpelaajat")

tärkeimmätpelaajat.addEventListener("click", myFunction3)

function myFunction3() {
    document.getElementById("col1").innerHTML = ""
    document.getElementById("col2").innerHTML = ""

    document.getElementById("col1").innerHTML = "terveawdawdawdawdawdwadawdawdawd"

    let img2 = document.createElement("img");
    img2.src = "http://127.0.0.1:5500/images/pelaajat.JPG";
    let src2 = document.getElementById("col2")
    src2.appendChild(img2)

}



let pelipaidat = document.getElementById("pelipaidat")

pelipaidat.addEventListener("click", myFunction4)


/* 
    function myFunction4() {
    document.getElementById("col1").innerHTML = "terve"
    document.getElementById("col2").innerHTML = "terve"

    let img = document.createElement("img");
    img.src = "http://127.0.0.1:5500/images/homekit2.JPG"; 
    let src = document.getElementById("col1");
    src.appendChild(img);

    let img2 = document.createElement("img");
    img2.src = "http://127.0.0.1:5500/images/awaykit2.JPG";
    let src2 = document.getElementById("col2")
    src2.appendChild(img2)

}
*/

function myFunction4() {

    document.getElementById("col1").innerHTML = ""
    document.getElementById("col2").innerHTML = ""

    let x = document.createElement("img");
    x.setAttribute("src", "images/homekit2.JPG")
    document.getElementById("col1").appendChild(x)

    let y = document.createElement("img");
    y.setAttribute("src", "images/awaykit2.JPG")
    document.getElementById("col2").appendChild(y)
}

