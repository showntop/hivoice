import wepy from 'wepy';

const audioManager = wepy.getBackgroundAudioManager()

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

const pause = async (audioSrc) => {
  audioManager.src = audioSrc
  audioManager.pause()
}

const play = async (audioSrc) => {
  audioManager.src = audioSrc
  audioManager.play()
} 

const sw = (to, audioSrc) => {
  if (to === true) {
    play(audioSrc)
  } else {
    pause(audioSrc)
  }
}

module.exports = {
  play,
  sw
}