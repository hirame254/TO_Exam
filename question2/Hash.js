const inputstr = window.prompt('文字列間に半角スペースをいれて、何か入力してください')
if (inputstr != null) {
    hash()
}


function hash() {
    const strarray = inputstr.split(" ")
    const first_cnt = 1
    const hashobj = new Object()

    for (const element of strarray) {
        if (hashobj[element] === undefined) {
            hashobj[element] = first_cnt
        } else {
            hashobj[element] += 1
        }
    }

    console.log(hashobj)
}
