let BASE_URL = 'http://httpbin.org' //set your BASE_URL
let TIME_OUT = 5000

//differentiate environments by process.env.NODE_ENV
if (process.env.NODE_ENV === 'development') {
    BASE_URL = 'http://httpbin.org'
    TIME_OUT = 8000
} else if (process.env.NODE_ENV === 'production') {
    BASE_URL = 'http://httpbin.org'
    TIME_OUT = 10000
} else {
    BASE_URL = 'http://httpbin.org'
    TIME_OUT = 3000
}

export { BASE_URL, TIME_OUT }
