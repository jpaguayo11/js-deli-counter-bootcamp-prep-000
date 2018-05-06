
function takeANumber (katzDeliLine, name) {
var katzDeli = katzDeliLine
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var newArray = []
    while (line.length > 0) {
      newArray.unshift(` ${line.length}. ${line[line.length]}`)
      line.length - 1
    }
    return `The line is currently:${newArray}`
  } else {
    return "The line is currently empty."
  }
}
