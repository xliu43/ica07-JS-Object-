
var imgArr = [];  //careful!!  {} for obj  initiliaztion JSON style, [] for  array 
strArr = ["image1", "image2", "image3", "image4", "image5"];      //notice hwo to initiate array in javascipt
var currentIndex = 0;
var autoFlag = false;                                            //for globale variable make sure to put outside the .on load method for every method to access 
var timerID = -1;
window.onload = function () {
    fInit();
    document.getElementById('next').onclick = FNext;
    document.getElementById('previous').onclick = FPrev;
};

function PicFrame(name, id)
{
    this.displayName = name;
    this.imageNumber = id;
    this.p_image = new Image();   //Image() not image()!!!  Is Image() system type
    this.p_image.src = "images/img" + (this.imageNumber + 1) + ".jpg";
    this.p_image.imagename = this.displayName;
    this.viewCounter = 0;
    
}

function fInit() { //iterate thur the prebulit and build the imObj based on PicFrame CTOR and push the obj to imgArr.
    for (var i = 0; i < strArr.length; i++) {
        var imgObj = new PicFrame(strArr[0], i);
        imgArr.push(imgObj);
    }
    ShowPic();

}

function ShowPic() {
    var imgObj = imgArr[currentIndex];
    document.getElementById('image').setAttribute('src', imgObj.p_image.src);
    imgObj.viewCounter++;
}

/*FNext() - increment the current index ( wrapping if the last element ), and invoke showPic(). No control constructs
are allowed ( if, else, etc), use only arithmetic only ), picture count must not be retrieved from the image object array.*/
function FNext() {
    currentIndex++;
    console.log(currentIndex);
    ShowPic();
}
function FPrev() {
    currentIndex--;
    console.log(currentIndex);
    ShowPic();
}

