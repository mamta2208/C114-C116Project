musheX = 0;
musheY = 0;

function preload() {
    mushe = loadImage('https://i.postimg.cc/kXdrzwcN/mushe.png');
}
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
image(video,0,0,300,300);
image(mushe, musheX, musheY, 60, 60);
}
function takesnapshot() {
    save('myfilterimage.png');
}
function modelLoaded() {
    console.log("PoseNet is intialized");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        musheX =  results[0].pose.nose.x - 30;
        musheY =  results[0].pose.nose.y - 10;
     console.log("mushe X = " + musheX);
     console.log("mushe Y= " + musheY);
    }
} 