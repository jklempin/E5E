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
      // 'Access-Control-Allow-Origin': '*',
      // 'X-Frame-Options': 'SAMEORIGIN',
      'Content-Type': 'application/json'
    },
    data: {
      results: [
        { text: 'test' }
      ]
    }
  }
}
exports.dumpData = (event) => {
  console.log('output')
  console.log(
    { event }
  )
  return {
    status: 200,
    response_headers: {
      'Content-Type': 'application/json'
    },
    data: {
      input: event.data
    }
  }
}

exports.getCountry = (event) => {

  console.log("Start")
  const geo = event.data.ip
  console.log({ geo })
  return {
    status: 200,
  }
}
