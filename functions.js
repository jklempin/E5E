const geoip = require('fast-geoip')
const axios = require('axios').default
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

exports.getCountry = async (event) => {
  console.log('Start6')

  // const ip = event.data.ip
  // const geo = await geoip.lookup(ip)
  // const country = geo.country

  const options = {
    method: 'PUT',
    url: `https://gs.ps.anexia-it.com/api/rms_jk/v1/request.json/${event.data.identifier}`,
    params: { api_key: process.env.API_KEY },
    headers: { 'content-type': 'application/json' },
    data: { country:"HU" }
  }

  const response = await axios.request(options)
  console.log({ response })
  return {
    status: 200,
  }
}
