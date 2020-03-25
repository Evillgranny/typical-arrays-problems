exports.min = function min (array = 0) {
    if (array.length === 0 || !array) {
        return array
    }

    let minNumber = 0

    for (let i = 0; i <= array.length; i++) {
        if (i === 0) {
            minNumber = array[i]
        } else {
            if (minNumber > array[i]) {
                minNumber = array[i]
            }
        }
    }

    return minNumber
};

exports.max = function max (array = 0) {
    if (array.length === 0 || !array) {
        return array
    }

    let maxNumber = 0

    for (let i = 0; i <= array.length; i++) {
        if (i === 0) {
            maxNumber = array[i]
        } else {
            if (maxNumber < array[i]) {
                maxNumber = array[i]
            }
        }
    }

    return maxNumber
}

exports.avg = function avg (array = 0) {
    if (array.length === 0 || !array) {
        return array
    }
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }

    return sum / array.length
}
