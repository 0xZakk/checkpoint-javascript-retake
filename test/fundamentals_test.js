var should = require("chai").should()
var expect = require("chai").expect
var fs = require("fs")
var fundamentals = fs.readFileSync("fundamentals.js","utf8")

describe('Fundamentals #1', function() {
  let section = fundamentals.slice(
    fundamentals.indexOf('// #1'),
    fundamentals.indexOf('// #2')
  )
  try {
    eval(section)
  }
  catch(e) {
    console.log(e)
  }
  it('colors is an array', function() {
    expect(colors).to.be.an('array')
  })
  it('colors contains three strings', function() {
    expect(colors.length).to.equal(3)
    expect(colors.every(color => color.constructor === String)).to.equal(true)
  })
})

describe('Fundamentals #2', function() {
  let section = fundamentals.slice(
    fundamentals.indexOf('// #1'),
    fundamentals.indexOf('// #3')
  )
  try {
    eval(section)
  }
  catch(e) {
    console.log(e)
  }
  it('lastColor is a string', function() {
    expect(lastColor).to.be.a('string')
  })
  it('lastColor is equal to the last item in colors', function() {
    expect(lastColor).to.equal(colors[2])
  })
})

describe('Fundamentals #3', function() {
  let section = fundamentals.slice(
    fundamentals.indexOf('// #3'),
    fundamentals.indexOf('// #4')
  )
  try {
    eval(section)
  }
  catch(e) {
    console.log(e)
  }
  it('favoriteColors is defined', function() {
    expect(favoriteColors).to.be.not.undefined
  })
  it('favoriteColors is an array', function() {
    expect(favoriteColors).to.be.an('array')
  })
})

describe('Fundamentals #4', function() {
  let section =
    fundamentals.slice(
      fundamentals.indexOf('// #1'),
      fundamentals.indexOf('// #2')
    )
    +
    fundamentals.slice(
      fundamentals.indexOf('// #3'),
      fundamentals.indexOf('// #5')
    )
  try {
    eval(section)
  }
  catch(e) {
    console.log(e)
  }
  it('favoriteColors contains three colors', function() {
    expect(favoriteColors.length).to.equal(3)
  })
  it('favoriteColors contains the same values as colors', function() {
    expect(
      favoriteColors.reduce((a, b) => a + b)
    ).to.equal(
      colors.reduce((a, b) => a + b)
    )
  })
})

describe('Fundamentals #5', function() {
  let section = fundamentals.slice(
    fundamentals.indexOf('// #5'),
    fundamentals.indexOf('// #6')
  )
  try {
    eval(section)
  }
  catch(e) {
    console.log(e)
  }
  it('student is an object', function() {
    expect(student).to.be.an('object')
  })
  it('student has three key-value pairs', function() {
    expect(Object.keys(student)).to.have.lengthOf(3)
  })
  it('student does not have a \'attends-office-hours\' property', function() {
    expect(student).to.not.have.any.keys('attends-office-hours')
  })
})

describe('Fundamentals #6', function() {
  let section = fundamentals.slice(
    fundamentals.indexOf('// #5')
  )
  try {
    eval(section)
  }
  catch(e) {
    console.log(e)
  }
  it('student has four key-value pairs', function() {
    expect(Object.keys(student).length).to.be.equal(4)
  })
  it('student has a attends-office-hours property', function() {
    expect(student).to.have.property('attends-office-hours')
  })
  it('attends-office-hours has a boolean value', function() {
    expect(student).property('attends-office-hours').to.be.a('boolean')
  })
})
