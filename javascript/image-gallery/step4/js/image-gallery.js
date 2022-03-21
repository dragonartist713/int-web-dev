class ImageGallery {


	///////////////////////////////
	// CONSTRUCTOR
	///////////////////////////////
	constructor(el, images){
		//instance variables
		this.el = el;
		this.images = images;
		this.template = `<img id="mainImg" src="" />
		<h3 id="caption"></h3>
		<input type="button" id="btnPrev" value="Prev" />
		&nbsp;
		<input type="button" id="btnNext" value="Next" />`;
		this.el.innerHTML = this.template;

		this.mainImg = el.querySelector("#mainImg");
		this.captionDiv = el.querySelector("#caption");
		this.btnNext = el.querySelector("#btnNext");
		this.btnPrev = el.querySelector("#btnPrev");

		this.currentImg = 0;


		this.btnNext.addEventListener("click", () => {
			this.currentImg++;
			if(this.currentImg == this.images.length){
				this.currentImg = 0;
			}
			this.showImage(this.images[this.currentImg]);
		});
		
		  
		this.btnPrev.addEventListener("click", ()=>{
			this.currentImg--;
			if(this.currentImg < 0){
				this.currentImg = this.images.length - 1;
			}
			this.showImage(this.images[this.currentImg]);
		});

		this.showImage(this.images[0]);
	};

	///////////////////////////////
	// METHODS
	///////////////////////////////
	showImage(imgObj){
		this.mainImg.src = imgObj.path;
		this.mainImg.alt = imgObj.description;
		this.captionDiv.innerHTML = imgObj.description;
	};

}