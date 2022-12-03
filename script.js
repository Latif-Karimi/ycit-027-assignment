function getCatImage() {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => 
            // Resolve the promise we got from calling then() to the promise that we get from calling json()
            response.json())
        
        .then((data) => {
            
            let catsImgUrl= data[0].url

            let catsImagEl = document.createElement("img")
            catsImagEl.setAttribute("src", `${catsImgUrl}`)
            
            catsImagEl.classList.add("imageSize")

            let imageContain = document.querySelector(".imageContain")
            imageContain.appendChild(catsImagEl)
        });
}
