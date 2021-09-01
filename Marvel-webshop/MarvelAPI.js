// API key voor toegang tot de Marvel API
const pub_key = "0926a6345f9d79f2c19fa876e13f08a5";

// Timestamp voor API key en encryptie
const ts = new Date().getTime();

// Private key voor encryptie
const priv_Key = "9129672a7833f92952fe14a30bb66381ad12daa3";

// Encryptie gebruikt keys en huidige tijd.
const hash = CryptoJS.MD5(ts + priv_Key + pub_key).toString();

// URL waar data verzoek naartoe gestuurd wordt
const main_comics = `https://gateway.marvel.com/v1/public/comics?limit=16&ts=${ts}&apikey=${pub_key}&hash=${hash}`;

// Een array waar het resultaat in opgeslagen wordt.
let resultsArray = [];

// Fetch() vraagt de data op.
fetch(main_comics)
  // Vervolgens wordt deze naar JSON verwerkt
  .then((reply) => reply.json())

  // Daarna wordt de verwerkte response gecontroleerd op items zonder plaatje
  .then((response) => {
    // Loopt door elk item in de response
    response.data.results.forEach((item) => {
      // Checkt of het een valid item is.
      if (validItem(item)) {
        // Bij valid items pakt hij de thumbnail
        let thumb = item.thumbnail;
        // En wordt de thumbnail gebruikt om het grootste formaat plaatje op te slaan in item.img
        item.img = thumb.path + "/portrait_xlarge." + thumb.extension;
        // Vervolgens wordt het hele item toegevoegd aan het resultaat.
        resultsArray.push(item);
      }
    });
    showResult(resultsArray);
    // showTitle(resultsArray);
  });



// Kijkt of de image beschikbaar is. Een item zonder image is geen valid item.
function validItem(item) {
  // Als er geen thumbnail is, wordt er false gereturned.
  if (!item.thumbnail || !item.thumbnail.path) {
    return false;
  }
  // Als er wel een thumbnail is, maar de thumbnail zegt "image not available" is het ook false.
  let image_available =
    item.thumbnail.path.indexOf("image_not_available") === -1;
  // Anders is het true.
  return image_available;
}

function showResult(resultsArray) {
  // Image of a comic
  let img1 = document.querySelector(".image_1");
  img1.onclick = displayModal;
  img1.src = resultsArray[1].thumbnail.path + ".jpg";
  // Title of a comic
  let title1 = document.querySelector(".comicTitle_1");
  title1.innerText = resultsArray[1].title;
  // Description of the comic
  let descr1 = document.querySelector(".descr_1");
  descr1.innerText = resultsArray[1].description;

  // Image of a comic
  let img2 = document.querySelector(".image_2");
  img2.src = resultsArray[2].thumbnail.path + ".jpg";
  // Title of a comic
  let title2 = document.querySelector(".comicTitle_2");
  title2.innerText = resultsArray[2].title;
  // Description of the comic
  let descr2 = document.querySelector(".descr_2");
  // descr2.innerText = resultsArray[1].description;

  // Image of a comic
  let img3 = document.querySelector(".image_3");
  img3.src = resultsArray[3].thumbnail.path + ".jpg";
  // Title of a comic
  let title3 = document.querySelector(".comicTitle_3");
  title3.innerText = resultsArray[3].title;
  // Description of the comic
  let descr3 = document.querySelector(".descr_3");
  // descr3.innerText = resultsArray[3].description;

  // Image of a comic
  let img4 = document.querySelector(".image_4");
  img4.src = resultsArray[4].thumbnail.path + ".jpg";
  // Title of a comic
  let title4 = document.querySelector(".comicTitle_4");
  title4.innerText = resultsArray[4].title;
  // Description of the comic
  let descr4 = document.querySelector(".descr_4");
  // descr4.innerText = resultsArray[4].description;

  // Image of a comic
  let img5 = document.querySelector(".image_5");
  img5.src = resultsArray[5].thumbnail.path + ".jpg";
  // Title of a comic
  let title5 = document.querySelector(".comicTitle_5");
  title5.innerText = resultsArray[5].title;
  // Description of the comic
  let descr5 = document.querySelector(".descr_5");
  // descr5.innerText = resultsArray[5].description;

  // Image of a comic
  let img6 = document.querySelector(".image_6");
  img6.src = resultsArray[6].thumbnail.path + ".jpg";
  // Title of a comic
  let title6 = document.querySelector(".comicTitle_6");
  title6.innerText = resultsArray[6].title;
  // Description of the comic
  let descr6 = document.querySelector(".descr_6");
  // descr6.innerText = resultsArray[6].description;

  // Image of a comic
  let img7 = document.querySelector(".image_7");
  img7.src = resultsArray[7].thumbnail.path + ".jpg";
  // Title of a comic
  let title7 = document.querySelector(".comicTitle_7");
  title7.innerText = resultsArray[7].title;
  // Description of the comic
  let descr7 = document.querySelector(".descr_7");
  // descr7.innerText = resultsArray[7].description;

  // Image of a comic
  let img8 = document.querySelector(".image_8");
  img8.src = resultsArray[8].thumbnail.path + ".jpg";
  // Title of a comic
  let title8 = document.querySelector(".comicTitle_8");
  title8.innerText = resultsArray[8].title;
  // Description of the comic
  let descr8 = document.querySelector(".descr_8");
  // descr8.innerText = resultsArray[8].description;

  // Image of a comic
  let img9 = document.querySelector(".image_9");
  img9.src = resultsArray[9].thumbnail.path + ".jpg";
  // Title of a comic
  let title9 = document.querySelector(".comicTitle_9");
  title9.innerText = resultsArray[9].title;
  // Description of the comic
  let descr9 = document.querySelector(".descr_9");
  // descr9.innerText = resultsArray[9].description;

  console.log(resultsArray);
}

// resultsArray.findIndex(comic => {
//   return comic.id === userSelected.id;
// })


//Modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = displayModal;

function displayModal (event) {
  console.log(event.path[1].children[0])
  console.log(event.path[1].children[1])
  console.log(event.path[1].children[2])
  //De description, image en title weergeven in de function.
  
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}