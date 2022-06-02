const geoip = require('fast-geoip')
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
  console.log('Start5')

  const ip = event.data.ip
  const geo = await geoip.lookup(ip)
  const country = geo.country
  const http = require("https");

  const options = {
    "method": "PUT",
    "hostname": "gs.ps.anexia-it.com",
    "port": null,
    "path": `/api/rms_jk/v1/request.json/c7d697089f314d0980b2316003ccbd21?api_key=${process.env.API_KEY}`,
    "headers": {
      "content-type": "application/json",
      "Content-Length": "16"
    }
  };

  const req = http.request(options, function (res) {
    const chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      const body = Buffer.concat(chunks);
      console.log(body.toString());
    });
  });

  req.write(JSON.stringify({country }));
  req.end();
  return {
    status: 200,
    data: country
  }
}
