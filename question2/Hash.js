const inputString = window.prompt('文字列間に半角スペースをいれて、何か入力してください')
if (inputString != null) {
    hash()
}


function hash() {
    const stringArray = inputString.split(" ")
    const hashobj = {}

    for (const element of stringArray) {
        if (hashobj[element]) {
            hashobj[element] += 1
        } else {
            hashobj[element] = 1
        }
    }

    console.log(hashobj)
}
