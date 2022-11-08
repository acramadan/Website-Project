var a = new Image(100, 200);
a.scr = './photos/About.png';
var image = document.getElementById("resume-folder");

image.addEventListener("click", function(){
    this.image = document.getElementById('resume-folder');
    image.scr = './photos/About.png';

    if(image.scr == a.scr) {
        image.src = './photos/About_Selected.png';
    }
}); 

document.getElementById("resume-folder").addEventListener("click", function(){
    this.image = document.getElementById('resume-folder');

    if(image.scr != a.scr) {
        image.src = './photos/About.png';
    }
}); 