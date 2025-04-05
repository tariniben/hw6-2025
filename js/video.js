var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.addEventListener('DOMContentLoaded', function() {
	const video = document.getElementById('player1');
	const playButton = document.getElementById('play');
	const pauseButton = document.getElementById('pause');
	const slowerButton = document.getElementById('slower');
	const fasterButton = document.getElementById('faster');
	const skipButton = document.getElementById('skip');
	const muteButton = document.getElementById('mute');
	const volumeSlider = document.getElementById('slider');
	const volumeDisplay = document.getElementById('volume');
	const oldButton = document.getElementById('vintage');
	const origButton = document.getElementById('orig');
  
	// 1. Page Load
	video.autoplay = false;
	video.loop = false;
	updateVolumeDisplay();
  
	// 2. Play Button
	playButton.addEventListener('click', function() {
	  video.play();
	  updateVolumeDisplay();
	});
  
	// 3. Pause Button
	pauseButton.addEventListener('click', function() {
	  video.pause();
	});
  
	// 4. Slow Down
	slowerButton.addEventListener('click', function() {
	  video.playbackRate *= 0.9;
	  console.log('Playback rate:', video.playbackRate);
	});
  
	// 5. Speed Up
	fasterButton.addEventListener('click', function() {
	  video.playbackRate /= 0.9;
	  console.log('Playback rate:', video.playbackRate);
	});
  
	// 6. Skip Ahead
	skipButton.addEventListener('click', function() {
	  video.currentTime += 10;
	  if (video.currentTime > video.duration) {
		video.currentTime = 0;
	  }
	  console.log('Current time:', video.currentTime);
	});
  
	// 7. Mute
	muteButton.addEventListener('click', function() {
	  video.muted = !video.muted;
	  muteButton.textContent = video.muted ? 'Unmute' : 'Mute';
	  updateVolumeDisplay();
	});
  
	// 8. Volume Slider
	volumeSlider.addEventListener('input', function() {
	  video.volume = volumeSlider.value / 100;
	  updateVolumeDisplay();
	});
  
	// 9. Styled
	oldButton.addEventListener('click', function() {
	  video.classList.add('oldSchool');
	});
  
	// 10. Original
	origButton.addEventListener('click', function() {
	  video.classList.remove('oldSchool');
	});
  
	// Volume Settings
	function updateVolumeDisplay() {
	  if (video.muted) {
		volumeDisplay.textContent = 'Muted';
	  } else {
		volumeDisplay.textContent = Math.round(video.volume * 100) + '%';
	  }
	}
  
	  updateVolumeDisplay();
  });

