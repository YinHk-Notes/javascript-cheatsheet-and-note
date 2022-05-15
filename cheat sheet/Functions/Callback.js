//A callback is a function passed as an argument to another function

//When you pass a function as an argument, remember not to use parenthesis


function api1(callback) {
    setTimeout(() => {
        console.log("Done with api1")
        callback()
    }, 2000)
}
function api2(callback) {
    setTimeout(() => {
        console.log("Done with api2")
        callback()
    }, 1000)
}
function main(callback) {
    api1(() => {
        api2(() => {
            callback()
        })
    })
}
main(() => {
    console.log("All function is done.")
})
// "Done with api1"
// "Done with api2"
// "All function is done."
