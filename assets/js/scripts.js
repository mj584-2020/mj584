$(function () {
  console.log('scripts.js is loaded');
});

var video = document.querySelector('video');
var promise = video.play();

if (promise !== undefined) {
  promise.then(_ => {
  }).catch(error => {
    video.muted = true;
    video.play();
  });
}