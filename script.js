const y = document.querySelector("#y")
const button = document.querySelector("#button")
const lol = document.querySelector("#lol")
const lola = document.querySelector("#bin")



button.addEventListener("click", function() {
    let text = y.value
    let num = lol.value.length
    let sel = lola.value
    console.log(typeof num)
    let texta = ""
    while (num != 0) {
        texta += "*"
        num -= 1
    }
    console.log(text)
    if (text !== "") {
        document.getElementById("magia").innerHTML=text
    } 
    if (texta !== "") {
        document.getElementById("magia2").innerHTML=texta
    } 
    if (sel !== "brak") {
        document.getElementById("magia3").innerHTML= `Ilość Robux: ${sel}`
    }
    if (text !== "" && texta !== "" && sel !== "brak") {
        var buttonEl = document.createElement("a");
        var buttonTextEl = document.createElement("span");
        buttonEl.appendChild(buttonTextEl);
        document.getElementById("mysupadiv").innerHTML='<button><a href="https://youtu.be/xvFZjo5PgG0?feature=shared">GET ROBUX!!!</a></button>'
    } else {
        document.getElementById("mysupadiv").innerHTML=''
    }
})


