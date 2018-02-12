import wepy from 'wepy';

const audioManager = wepy.getBackgroundAudioManager()

var playing = false

audioManager.onCanplay((res) => {
  console.log(res)
})
audioManager.onPlay((res) => {
  console.log(res)
})
audioManager.onPause((res) => {
  console.log(res)
})
audioManager.onStop((res) => {
  console.log(res)
})
audioManager.onEnded((res) => {
  console.log(res)
})
audioManager.onTimeUpdate((res) => {
  console.log(res)
})
audioManager.onPrev((res) => {
  console.log(res)
})
audioManager.onNext((res) => {
  console.log(res)
})
audioManager.onError((res) => {
  console.log(res)
})
audioManager.onWaiting((res) => {
  console.log(res)
})

const pause = async () => {
  playing = false
  audioManager.pause()
}

const play = async () => {
  audioManager.play()
  playing = true
  console.log("audioManager", audioManager)
} 

const sw = (param) => {
	audioManager.src = param.source
	if (playing === true) {
	  pause(param)
	} else {
	  play(param)
	}
}

module.exports = {
  play,
  sw
}