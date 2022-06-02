exports.cors = () => ({
    status: 200,
    response_headers: {
        'Access-Control-Allow-Origin': '*',
        'X-Frame-Options': 'SAMEORIGIN'
    },
    data: {}
})
exports.externalSource = () => ({
    status: 200,
    response_headers: {
        //'Access-Control-Allow-Origin': '*',
        //'X-Frame-Options': 'SAMEORIGIN',
        'Content-Type': 'application/json'
    },
    data: {
        results: [
            { id: 1, text: 'Item1' },
            { id: 2, text: 'Item2' }
        ]
    }
})