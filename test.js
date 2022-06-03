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

    console.log(event);

    return {
        status: 200,
        response_headers: {
            'Content-Type': 'application/json'
        },
        data: {
            selectFields
        }
    }
}
