basic.forever(function () {
    if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) * 0.65 < 15) {
        cuteBot.stopcar()
        basic.pause(100)
        cuteBot.motors(30, -30)
        basic.pause(500)
    } else {
        cuteBot.motors(40, 40)
    }
})
basic.forever(function () {
    if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) * 0.65 < 15) {
        music.ringTone(988)
    } else {
        music.stopAllSounds()
    }
})
