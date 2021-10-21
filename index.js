const fs = require('fs')
const app = require('express')()

const routes = require('./routes')
app.use('/api', routes)

const axios = require('axios').default
axios.defaults.headers.common['User-Agent'] = 'RenX-SL-API'

const port = process.env.PORT || 3000
app.listen(port, () => {
  getInfo()
  setInterval(getInfo, 15000)
  console.log(`Listening on port ${port}`)
})

async function getInfo() {
  axios.get('https://serverlist.ren-x.com/servers_long?id=RenX-SL-API')
    .then(resp => {
        fs.writeFileSync('./storage/raw.json', JSON.stringify(resp.data, null, 2))
    })
    .catch(err => {
        console.error(err)
    });
    axios.get('https://static.ren-x.com/launcher_data/version/release.json')
      .then(resp => {
        fs.writeFileSync('./storage/version.json', JSON.stringify(resp.data, null, 2))
      })
      .catch(err => {
        console.error(err)
      })
}
