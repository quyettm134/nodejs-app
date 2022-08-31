module.exports = {
    multipleDoc: objectArray => {
        return objectArray ? objectArray.map(object => object.toObject()) : undefined
    },
    singleDoc: object => {
        return object ? object.toObject() : undefined
    }
}
