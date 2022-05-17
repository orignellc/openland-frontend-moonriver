function makeFileObjects(file: object) {
    // You can create File objects from a Blob of binary data
    // see: https://developer.mozilla.org/en-US/docs/Web/API/Blob
    // Here we're just storing a JSON object, but you can store images,
    // audio, or whatever you want!
    const obj = file
    const blob = new Blob([JSON.stringify(obj)], { type: 'application/json' })

    const newFile = [new File([blob], "property-details.json")]

    const files = [
        new File(['contents-of-file-1'], 'plain-utf8.txt'),
        new File([blob], 'hello.json')
    ]
    return newFile
}

export default makeFileObjects