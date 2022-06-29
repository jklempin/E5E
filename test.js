exports.main = (event) => {
    let selectFields = [
        {'id': 1, 'text': 'Custom',},
        {'id': 2, 'text': 'Fair',},
        {'id': 3, 'text': 'Mail',},
        {'id': 4, 'text': 'Personal',},
        {'id': 5, 'text': 'Phonecall',},
        {'id': 6, 'text': 'Callback form',},
        {'id': 7, 'text': 'Contact form',},
    ];

    if (event.params.q && event.params.q[0] !== '') {
        selectFields = filterItems(selectFields, event.params.q[0])
    }

    return {
        status: 200,
        response_headers: {
            'Access-Control-Allow-Origin': '*',
            'X-Frame-Options': 'SAMEORIGIN',
            'Content-Type': 'application/json'
        },
        data: { 'results': selectFields }
    }
}

function filterItems(arr, query) {
    return arr.filter(el => el.text.toLowerCase().indexOf(query.toLowerCase()) > -1)
}