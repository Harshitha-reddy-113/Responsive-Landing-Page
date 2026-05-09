function openWebsite(){

    document.getElementById("front-page").style.display = "none";

    document.getElementById("main-website").style.display = "block";
}

function showSection(sectionId){

    let sections = document.querySelectorAll(".section");

    sections.forEach(function(section){
        section.classList.remove("active");
    });

    document.getElementById(sectionId).classList.add("active");
}