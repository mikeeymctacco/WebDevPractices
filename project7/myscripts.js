


		var imgArray = new Array(
			'CoupleBike1Lg.jpg',
			'CoupleHikingLg.jpg',
			'CoupleSnowBoardLg.jpg',
			'ScubaCoupleLg.jpg'
			

		);


		var titleArray = new Array(
			'Couple Biking',
			'Couple Hiking',
			'Couple Snowboarding',
			'Couple Scuba Diving'
			
		);
			
		var imgPath = "Images/Honeymoon/";
		
		function swapImage(imgID) {

			var theImage = document.getElementById('theImage');
			var textDiv = document.getElementById('bottomText');

			var newImg;
			var textTitle;

			newImg = imgArray[imgID];
			theImage.src = imgPath + newImg;

			textTitle=titleArray[imgID];

      			textDiv.innerHTML = textTitle;
		}
			
		function preloadImages() {		
			for(var i = 0; i < imgArray.length; i++) {
				var tmpImg = new Image;
				tmpImg.src = imgPath + imgArray[i];
			}
		}