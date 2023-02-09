const section = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controls");
const secBtn = document.querySelectorAll(".control");
const wholeBody = document.querySelector(".main-content");
const mainTitle = document.querySelectorAll(".main-title");


// this loop just adds an click event to all buttons
for (var j = 0; j < secBtn.length; j++) {

    secBtn[j].addEventListener("click", function (e) {

        // if(this.dataset.id== section.id){
        //     section.style.display = "block";
        // }
        // cheking if the clicked button does not contain active-btn class then,  give the class to the clicked button in (line 3)
        if (!e.target.classList.contains('active-btn')) {
            // removing active-btn class from all the other buttons


            // another method of doing same work as in "line 2"
            // for (var i = 0; i < secBtn.length; i++) {
            //     { secBtn[i].classList.contains("active-btn") && secBtn[i].classList.remove("active-btn") }
            // } 


            // line 2
            secBtn.forEach((btn) => {
                { btn.classList.contains("active-btn") && btn.classList.remove("active-btn") }
            })
            //line 3
            e.target.classList.add("active-btn");
        }

    })
}

wholeBody.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {

        // uncomment this if you want to add the section display animation to buttons also
        //   secBtns.forEach((btn) =>{
        //     btn.classList.remove("active");
        //   })
        //   e.target.classList.add("active");

        section.forEach((sec) => {
            sec.classList.remove("active")
        })
        const element = document.getElementById(id);
        element.classList.add("active")
    }
})

// toggle theme

const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        // for(var i = 0 ; i < mainTitle.length; i++){
        //     mainTitle[i].classList.add("shadow");
        // }
          mainTitle.forEach((title) => {
           title.classList.add("shadow");
          })  
    }else{
        mainTitle.forEach((title) => {
            title.classList.remove("shadow");
           })  
    }
})





