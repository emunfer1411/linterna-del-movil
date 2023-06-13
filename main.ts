let velocidad = 30
basic.forever(function () {
    if (input.lightLevel() < 125) {
        maqueen.motorStop(maqueen.Motors.M2)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, velocidad)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
    }
})
