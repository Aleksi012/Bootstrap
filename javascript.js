let omistajat = document.getElementById("omistajat")

omistajat.addEventListener("click", myFunction1)





function myFunction1() {
    document.getElementById("col1").innerHTML = ""
    document.getElementById("col2").innerHTML = ""

    let x = document.createElement("img");
    x.setAttribute("src", "images/radrizzani.jpg")
    document.getElementById("col2").appendChild(x)

    document.getElementById("col1").innerHTML = "aoijswdaoiwdjaiowjdajwiodawiod oaiwdjaoiwdjoaiwjdaoiwdjoaiwdaiwjd"
}

let premierleague = document.getElementById("premierleague")

premierleague.addEventListener("click", myFunction2)

function myFunction2() {
    document.getElementById("col1").innerHTML = ""
    document.getElementById("col2").innerHTML = ""

    let y = document.createElement("img");
    y.setAttribute("src", "images/premierleague.JPG")
    document.getElementById("col2").appendChild(y)
}


let tärkeimmätpelaajat = document.getElementById("tärkeimmätpelaajat")

tärkeimmätpelaajat.addEventListener("click", myFunction3)

function myFunction3() {
    document.getElementById("col1").innerHTML = ""
    document.getElementById("col2").innerHTML = ""

    document.getElementById("col1").innerHTML = "terveawdawdawdawdawdwadawdawdawd"

    let x = document.createElement("img");
    x.setAttribute("src", "images/pelaajat.JPG")
    document.getElementById("col2").appendChild(x)

}

let pelipaidat = document.getElementById("pelipaidat")

pelipaidat.addEventListener("click", myFunction4)

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

