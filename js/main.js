//Opens hamburger menu
const hamburger = document.querySelector(".toggle");
const mainMenu = document.querySelector(".main-menu");

hamburger.addEventListener("click", openMenu);

function openMenu() {
    hamburger.classList.toggle("active");
    mainMenu.classList.toggle("active");
}

//Wraps each letter in a span
var text = document.querySelectorAll(".main-menu-link");

for (var i=0; i < text.length; i++) {
    var item = text[i];
    console.log(item);
    var strText = item.textContent;
    console.log(strText);
    var splitText = strText.split("");
    console.log(splitText); 
    item.textContent = "";
    for (var j=0; j < splitText.length; j++) {
        item.innerHTML +="<span>"+ splitText[j] +"</span>";
        if (splitText[j] === " " ) {item.innerHTML +="<span id='gap'>"+ splitText[j] +"</span>";}
      
    }  

}

//Adds a class to each span consecutively
var letters = document.querySelectorAll('a.main-menu-link > span');
console.log(letters);
letters.forEach((letter,idx) => {
    setInterval(() => {
    letter.classList.add('effect');
    }, idx * 100)
    
})



            
        
    






