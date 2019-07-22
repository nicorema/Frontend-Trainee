let wordnikAPI = "https://api.wordnik.com/v4/words.json/randomWord?&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7";
let giphyAPI = "https://api.giphy.com/v1/gifs/search?rating=G&api_key=dc6zaTOxFJmzC&q=";
let wordDiv = document.getElementById("the-word");
let theImg = document.getElementById("the-img");

async function wordGif() {
 let response1= await fetch(wordnikAPI);
 let json1 = await response1.json();
 let word = json1.word;
 let response2 = await fetch(giphyAPI + word);
 let json2 = await response2.json();
 let imgUrl =  json2.data[0].images['fixed_height_small'].url
  return {
   word: word,
   img: imgUrl
 }

}
let loader = document.getElementById("the-joke");
console.log(loader);

wordGif()
.then (data => {
 wordDiv.innerHTML += data.word;
 theImg.src = data.img;
 loader = document.getElementById("the-joke").style.display = "none";

})
.catch();


