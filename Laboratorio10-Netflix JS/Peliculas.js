class Movie {
    constructor(movieimg,movieimg2,name,ratings,description,clasification,star) {
        this.movieimg = movieimg
        this.movieimg2 = movieimg2
        this.name = name
        this.ratings = ratings
        this.description = description
        this.clasification = clasification
        this.star = star
        
    }
    


    toHTML_recommended(id) {
        if (this.star === 3) {
            return `
            <div class="mmovie" id "${id}" onclick = "selectedMovie(${id})">
                <div class="rcarrusel">
                    <img src="${this.movieimg}" alt="">
                </div>
                <div class="img-info">
                    <p>Ratings:</p>
                    <div class="estrellas">
                        <img src="./images/yellow_fill_star.png" alt="">
                        <img src="./images/yellow_fill_star.png" alt="">
                        <img src="./images/yellow_fill_star.png" alt="">
                        <img src="./images/yellow_outline_star.png" alt="">
                        <img src="./images/yellow_outline_star.png" alt="">
                        <img src="./images/baseline_bookmark_border_white_48dp.png" alt="" class="save-icon">
                    </div>
                </div>
            </div>
            `
        } else if (this.star === 4) {
            return `
                <div class="mmovie" id "${id}" onclick = "selectedMovie(${id})">
                    <div class="rcarrusel">
                        <img src="${this.movieimg}" alt="">
                    </div>
                    <div class="img-info">
                        <p>Ratings:</p>
                        <div class="estrellas">
                            <img src="./images/yellow_fill_star.png" alt="">
                            <img src="./images/yellow_fill_star.png" alt="">
                            <img src="./images/yellow_fill_star.png" alt="">
                            <img src="./images/yellow_fill_star.png" alt="">
                            <img src="./images/yellow_outline_star.png" alt="">
                            <img src="./images/baseline_bookmark_border_white_48dp.png" alt="" class="save-icon">
                        </div>
                    </div>
                </div>
                `
        } else if (this.star === 5) {
            return `
                <div class="mmovie" id "${id}" onclick = "selectedMovie(${id})">
                    <div class="rcarrusel">
                        <img src="${this.movieimg}" alt="">
                    </div>
                    <div class="img-info">
                        <p>Ratings:</p>
                        <div class="estrellas">
                            <img src="./images/yellow_fill_star.png" alt="">
                            <img src="./images/yellow_fill_star.png" alt="">
                            <img src="./images/yellow_fill_star.png" alt="">
                            <img src="./images/yellow_fill_star.png" alt="">
                            <img src="./images/yellow_fill_star.png" alt="">
                            <img src="./images/baseline_bookmark_border_white_48dp.png" alt="" class="save-icon">
                        </div>
                    </div>
                </div>
            `
        }
        
    }

    toHTML_trending(id) {
        return  `
        <div class="mmovie" id="${id}" onclick="selectedMovie(${id})">
            <div class="rcarrusel-2">
                <img src="${this.movieimg}" alt="">
            </div>
        </div>`
    }

    toBanner() {
        bannerTittle.innerHTML = this.name
        bannerRatings.innerHTML = `(${this.ratings} ratings)`
        bannerDescription.innerHTML = this.description
        bannerClasification.innerHTML = this.clasification
        bannerImage2.style.backgroundImage=`url(${this.movieimg2})`
    

    }
    
}

