let searchToggle = document.querySelector("#search-toggle")
let searchArea = document.querySelector(".area_search")
let menuToggle = document.querySelector("#menu-toggle")

searchToggle.addEventListener("click", function(evt){
    evt.preventDefault()
    evt.stopPropagation()

    searchArea.classList.toggle("none")
})
