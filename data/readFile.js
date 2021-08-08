const fs = require('fs');
const readline = require('readline');

async function readLinesFromFiles(path, separator) {
  const fileStream = fs.createReadStream(path)
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  })

  const content = []

  for await (const line of rl) {
    content.push(line.split(separator))
  }

  return content
}
module.exports = {
  readLinesFromFiles
}
