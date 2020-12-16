const baseURL = "https://picsum.photos";

const section = document.querySelector(".results");

//let submit = document.getElementById("getImageClick");
//submit.addEventListener("click", getImages());

function getImages() {
    section.innerHTML = "";

    let numberOfImages = document.getElementById("numberOfImages").value;
    let imageWidth = document.getElementById("widthOfImages").value;
    let imageHeight = document.getElementById("heightOfImages").value;

    let url = `${baseURL}/${imageWidth}/${imageHeight}`;//this defines what data or where (and how) to pull from API
    let i = 0;
    for (i = 0; i < numberOfImages; i++) {
    //this loop does everything :)
        
fetch(url) //string interpolation above
    .then(function (result) {
        console.log(result);
        // console.log(result.json());
        return result;
    })
    .then(function (json) {
        console.log(json);
        displayResults(json);
    });
    }
}

function displayResults(json) {
      
    let img = document.createElement('img');
    let image = json.url;
    console.log(image);
    img.src = image;
    img.className = "image";

    section.appendChild(img);
}

