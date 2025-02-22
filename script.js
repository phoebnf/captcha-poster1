const poster = document.getElementById("poster");

poster.addEventListener("mouseover", () => {
    poster.style.filter = "blur(5px) contrast(200%)";
});

poster.addEventListener("mouseout", () => {
    poster.style.filter = "none";
});


