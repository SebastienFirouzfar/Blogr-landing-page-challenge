document.querySelectorAll(".titleNavBlock").forEach((titleNavBlock) => titleNavBlock.addEventListener("click", () =>{
    if(titleNavBlock.parentNode.classList.contains("active")){
        titleNavBlock.parentNode.classList.toggle("active");
    }else{
        document.querySelectorAll(".titleNavBlock").forEach((titleNavBlock) => titleNavBlock.parentNode.classList.remove("active"))
        titleNavBlock.parentNode.classList.add("active")
    }
}))


//mobileContainer nav
let btnMobile = document.getElementById("mobileMenu"); 
let mobilenav = document.getElementById("mobileContainer");

mobilenav.style.left = "-50%";

btnMobile.addEventListener("click", function() {
    if(mobilenav.style.left == "-100%"){
        mobilenav.style.left = "50%";
        btnMobile.src = "images/icon-close.svg";
    } else{
        mobilenav.style.left = "-100%";
        btnMobile.src = "images/icon-hamburger.svg";
    }
})
