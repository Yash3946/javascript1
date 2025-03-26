var images = ["images1.jpg.avif","images2.jpg","images3.jpg","images4.jpg"];
console.log(images[0])

function changeImg()
{
    var randomIndex = Math.floor(Math.random() * images.length)
    console.log(randomIndex);


    console.log(images[randomIndex]);
    

    var image = document.getElementById("image");

    image.src = "./Images/" + images[randomIndex]
}