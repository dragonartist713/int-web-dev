window.addEventListener('load', function(){

  // Here's the data that we'll use to populate the image gallery
  const images = [
    {path: "../images/Desert.jpg", description:"A hot desert.", artist:"Bob Smith", "date": "3/31/2018", tags:["dessert", "landscape"]},
    {path: "../images/Lighthouse.jpg", description:"A lighthouse on the ocean", artist:"Betty Carter", "date": "2/01/2014", tags:["oceian", "landscape"]},
    {path: "../images/Tulips.jpg", description:"Some beautiful tulips", artist:"Bob Smith", "date": "2/14/2015", tags:["plants", "tulips", "landscape"]}
  ];


  // STEP 1
  // Get handles on the elements we need to work with
  const mainImg = document.getElementById("mainImg");
  const captionDiv = document.getElementById("caption");
  const btnPrev = document.getElementById("btnPrev");
  const btnNext = document.getElementById("btnNext");

  let currImg = 0;

  // STEP 2
  // Create a function to display an image object
  function showImg(imgObj){
    mainImg.src = imgObj.path;
    mainImg.alt = imgObj.description;
    captionDiv.innerHTML = imgObj.description;
  };

  showImg(images[currImg]);

  // STEP 3
  // add an event handler function to the 'next' button
  btnNext.addEventListener("click", () => {
    currImg++;
    if(currImg >= images.length){
      currImg = 0;
    };
    showImg(images[currImg]);
  });

  // STEP 4
  // add an event handler function to the 'prev' button
  btnPrev.addEventListener("click", () => {  
    currImg--;
    if(currImg < 0){
      currImg = images.length - 1;
    };
    showImg(images[currImg]);
  });

});
