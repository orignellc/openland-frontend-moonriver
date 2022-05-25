function makeFileObjects(file: object, jsonName: string) {
    // You can create File objects from a Blob of binary data
    // see: https://developer.mozilla.org/en-US/docs/Web/API/Blob
    // Here we're just storing a JSON object, but you can store images,
    // audio, or whatever you want!

    const blob = new Blob([JSON.stringify(file)], { type: 'application/json' })

    const newFile = [new File([blob], jsonName)]

    return newFile
}

export default makeFileObjects