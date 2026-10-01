/*Name this external file gallery.js*/

function upDate(previewPic){

  console.log("Event triggered!");
  console.log("Alt text:", previewPic.alt);
  console.log("Source URL:", previewPic.src);

  document.getElementById("image").innerHTML = previewPic.alt;

  document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo(){

  document.getElementById("image").style.backgroundImage = "url('')";

  document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}