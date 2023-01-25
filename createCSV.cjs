const csvToJson = require('convert-csv-to-json')

// let json = csvToJson.getJsonFromCsv('opensearch_samples.csv')
// for (let i = 0; i < json.length; i++) {
//   console.log(json[i])
// }
let fileInputName = 'opensearch_samples.csv'
let fileOutputName = 'opensearch_samples.json'

csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName)
