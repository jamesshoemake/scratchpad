const csvToJson = require('convert-csv-to-json')

// let json = csvToJson.getJsonFromCsv('opensearch_samples.csv')
// for (let i = 0; i < json.length; i++) {
//   console.log(json[i])
// }
let fileInputName = 'samples.csv'
let fileOutputName = 'samples.json'

csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName)
