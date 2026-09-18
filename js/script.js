function openPostAd() {
    document.getElementById("postAdModal").style.display = "flex";
}

function closePostAd() {
    document.getElementById("postAdModal").style.display = "none";
}


function toggleFavorite(button) {

    button.classList.toggle("saved");

    if (button.classList.contains("saved")) {
        button.innerHTML = "♥";
    } else {
        button.innerHTML = "♡";
    }

}


function searchProducts() {

    const searchValue =
        document.getElementById("searchInput").value.toLowerCase();

    const products =
        document.querySelectorAll(".product-card");

    products.forEach(product => {

        const title =
            product.querySelector("h3").innerText.toLowerCase();

        if (title.includes(searchValue)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

}


function sortProducts() {

    const container =
        document.getElementById("productsContainer");

    const products =
        Array.from(container.querySelectorAll(".product-card"));

    const sortValue =
        document.getElementById("sortProducts").value;


    if (sortValue === "low") {

        products.sort((a, b) => {
            return Number(a.dataset.price) -
                   Number(b.dataset.price);
        });

    }


    if (sortValue === "high") {

        products.sort((a, b) => {
            return Number(b.dataset.price) -
                   Number(a.dataset.price);
        });

    }


    products.forEach(product => {
        container.appendChild(product);
    });

}