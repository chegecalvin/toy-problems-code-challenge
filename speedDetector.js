let speed=prompt('Enter speed of car')
detectSpeed(speed)
function detectSpeed(speed) {
    const kmPerDemerit = 5
    const maxDemerit = 12
    const speedLimit = 70
    if (speed <= speedLimit) {
        // output when speed is < 70
        console.log("Ok")
    } else {
        const demerit = ((speed - speedLimit) / kmPerDemerit)
        if (demerit <= maxDemerit) {
            // output when demerit < 12
            console.log(demerit)
        } else {
            // output when demerit > 12
            console.log("License suspended")
        }
    }
}
