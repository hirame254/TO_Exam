const orghash = {
    "main": {
        "first": { "text": "foobar" },
        "second": { "text": "fizzbuzz", "child": { "text": "foobar" } }
    },
    "sub": {
        "first": { "text": "fizzbuzz", "child": { "text": "foobar" } },
        "second": {
            "third": { "text": "barfoo", "child": { "text": "foobar" } },
            "forth": { "child": { "text": "jit_foo_foo" } }
        }
    },
    "text": "foofava"
}


console.log(toUry(orghash))

function toUry(hash) {
    const keys = Object.keys(hash)
    for (const key of keys) {
        if (key != "text") {
            let layerObj = hash[key]
            layerObj = toUry(layerObj)
        } else {
            hash[key] = hash[key].replace("foo", "uryyyy!!")
        }
    }
    return hash
}

