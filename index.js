document.querySelectorAll(".titleNavBlock").forEach((titleNavBlock) => titleNavBlock.addEventListener("click", () =>{
    if(titleNavBlock.parentNode.classList.contains("active")){
        titleNavBlock.parentNode.classList.toggle("active");
    }else{
        document.querySelectorAll(".titleNavBlock").forEach((titleNavBlock) => titleNavBlock.parentNode.classList.remove("active"))
        titleNavBlock.parentNode.classList.add("active")
    }
}))
