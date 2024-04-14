(function(){
    console.log("Burger Flipping Time");

    let button = document.querySelector("#button");
    let mainNav = document.querySelector("#main-nav-ul");

    function hamburgerMenu() {
        mainNav.classList.toggle("hidden");
    };

    button.addEventListener("click", hamburgerMenu, false);
})();