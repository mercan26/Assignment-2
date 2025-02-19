function calcWalkCal(weight, distance) {
    return 0.3 * weight * distance;
}

function calcRunCal(weight, distance) {
    return 0.63 * weight * distance;
}

function calcSpeed(distance, time) {
    return distance / time;
}

exports.calcWalkCal = calcWalkCal;
exports.calcRunCal = calcRunCal;
exports.calcSpeed = calcSpeed;
