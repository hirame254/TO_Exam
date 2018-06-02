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


console.log(to_ury(orghash))

function to_ury(hash) {
    const keys = Object.keys(hash)
    for (const key of keys) {
        if (key != "text") {
            let obj = hash[key]
            obj = to_ury(obj)
        } else {
            const value = hash[key].replace("foo", "uryyyy!!")
            hash[key] = value
        }
    }
    return hash
}

