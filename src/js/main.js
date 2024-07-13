var lst = document.querySelectorAll(".menu a")

lst.forEach(element => {
    element.addEventListener("click", function(){

        lst.forEach(e => {
            e.classList.remove("ative")
        });

        element.classList.add("ative")

    })
});







