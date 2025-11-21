const {
  Buffer
} = require("buffer")
const fs = require("fs/promises")
const {
  Readable
} = require("stream")
const streamToBuffer = require("./streamToBuffer")

async function audioToBuffer(audio) {
  if (Buffer.isBuffer(audio)) {
    return audio
  }

  if (typeof audio === "string") {
    if (/^https?:\/\//.test(audio)) {
      const res = await fetch(audio)
      return Buffer.from(await res.arrayBuffer())
    }
    return fs.readFile(audio)
  }

  if (audio instanceof Readable) {
    return streamToBuffer(audio)
  }

  throw new TypeError("Unsupported audio input type")
}