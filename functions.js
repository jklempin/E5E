exports.cors = () => ({
  status: 200,
  response_headers: {
    'Access-Control-Allow-Origin': '*',
    'X-Frame-Options': 'SAMEORIGIN'
  },
  data: {}
})
exports.externalSource = () => {
  return {
    status: 200,
    response_headers: {
      //'Access-Control-Allow-Origin': '*',
      //'X-Frame-Options': 'SAMEORIGIN',
      'Content-Type': 'application/json'
    },
    data: {
      results: [
        {text: 'test'}
      ]
    }
  };
}
exports.dumpData = (event) => {
  asdfasdf
  console.log("output")
  console.log(
    {event}
  )
  return {
    status: 500,
    response_headers: {
      'Content-Type': 'application/json'
    },
    data: {
      input: event.data
    }
  };
}
