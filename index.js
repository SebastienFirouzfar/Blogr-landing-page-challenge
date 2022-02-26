document.querySelectorAll(".titleNav").forEach((titlesNav) => titlesNav.addEventListener("click", () =>{
    if(titlesNav.parentNode.classList.contains("active")){
        titlesNav.parentNode.classList.toggle("active");
    }else{
        document.querySelectorAll(".item").forEach((titlesNav) => titlesNav.parentNode.classList.remove("active"))
        titlesNav.parentNode.classList.add("active")
    }
}))