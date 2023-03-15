
const createGallery = (el, images) => {
    const template = `<img id="mainImg" src="" />
						<h3 id="caption"></h3>
						<input type="button" id="btnPrev" value="Prev" />
						&nbsp;
						<input type="button" id="btnNext" value="Next" />`;
	
	el.innerHTML = template;

	const mainImg = el.querySelector("#mainImg");
	const captionDiv = el.querySelector("#caption");
	const btnNext = el.querySelector("#btnNext");
	const btnPrev = el.querySelector("#btnPrev");

	let currentImg = 0;

	const showImage = (imgObj) => {
		mainImg.src = imgObj.path;
		mainImg.alt = imgObj.description;
		captionDiv.innerHTML = imgObj.description;
	}

	showImage(images[currentImg]);

	btnNext.addEventListener("click", () => {
    currentImg++;
    if(currentImg == images.length){
      currentImg = 0;
    }
    showImage(images[currentImg]);
  })

  // STEP 4
  // add an event handler function to the 'prev' button
  btnPrev.addEventListener("click", ()=>{
    currentImg--;
    if(currentImg < 0){
      currentImg = images.length - 1;
    }
    showImage(images[currentImg]);
  });

}