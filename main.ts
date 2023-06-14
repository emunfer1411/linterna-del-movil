let velocidad = 30
basic.forever(function () {
    if (input.lightLevel() < 125) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, velocidad)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, velocidad)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
    }
})
