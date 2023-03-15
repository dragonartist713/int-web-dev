window.addEventListener('load', function(){

  // Here's the data that we'll use to populate the image gallery
  const images = [
    {path: "../images/Jellyfish.jpg", description:"A cool jelly fish.", artist:"Betty Carter", "date": "3/31/2019", tags:["animals", "ocean", "fish"]},
    {path: "../images/Koala.jpg", description:"A cute koala bear", artist:"Bob Smith", "date": "6/11/2020", tags:["animals", "bears"]},
    {path: "../images/Penguins.jpg", description:"Lots of penguins", artist:"Jim Johansen", "date": "1/13/2018", tags:["animals", "ocean", "birds"]}
  ];


  // STEP 1
  // Get handles on the elements we need to work with
  const mainImg = document.getElementById("mainImg");
  const captionDiv = document.getElementById("caption");
  const btnPrev = document.getElementById("btnPrev");
  const btnNext = document.getElementById("btnNext");

  let currentImg = 0;

  // STEP 2
  // Create a function to display an image object
  function showImg(imgObj){
    mainImg.src = imgObj.path;
    mainImg.alt = imgObj.description;
    captionDiv.innerHTML = imgObj.description;
  };

  showImg(images[currentImg]);

  // STEP 3
  // add an event handler function to the 'next' button
  btnNext.addEventListener("click", () => {
    currentImg++;
    if(currentImg >= images.length){
      currentImg = 0;
    };
    showImg(images[currentImg]);
  });

  // STEP 4
  // add an event handler function to the 'prev' button
  btnPrev.addEventListener("click", () => {  
    currentImg--;
    if(currentImg < 0){
      currentImg = images.length - 1;
    };
    showImg(images[currentImg]);
  });

});
