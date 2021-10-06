let crypto = require('crypto')
let fs = require('fs')

let numImages = 2
let fileExtension = 'png'

function getProvenance() {

  let hashes = ''

  for (let i=0; i<numImages; i++) {
    let fileBuffer = fs.readFileSync('images/' + (i+1) + '.' + fileExtension)
    let hashSum = crypto.createHash('sha256')
    hashSum.update(fileBuffer)
    let hash = hashSum.digest('hex')
    hashes += hash
    console.log('Image ' + (i+1) + ' Hash: ' + hash)
  }

  let hashSum = crypto.createHash('sha256')
  hashSum.update(hashes)
  let finalHash = hashSum.digest('hex')
  console.log('Final Provenance Hash: ' + finalHash)

}

getProvenance()