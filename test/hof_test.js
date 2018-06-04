var should = require("chai").should()
var expect = require("chai").expect
var fs = require("fs")
var hof = fs.readFileSync("hof.js","utf8")

describe('HOF #1', function() {
  let section = hof.slice(
    0,
    hof.indexOf('// #2')
  )
  try {
    eval(section)
  }
  catch(e) {
    console.log(e)
  }
  it('peopleAges should be an array', function() {
    expect(peopleAges).to.be.an('array')
  })
  it('.map should be called on `people`', function() {
    expect(hof).to.include('people.map')
  })
  it('peopleAges should contain the age of each person in the people array', function() {
    let ages = [27, 54, 35]
    expect(peopleAges).to.deep.equal(ages)
  })
})

describe('HOF #2', function() {
  let section =
    hof.slice(
      0,
      hof.indexOf('// #1')
    )
    +
    hof.slice(
      hof.indexOf('// #2')
    )
  try {
    eval(section)
  }
  catch(e) {
    console.log(e)
  }
  it('wdiStudents is an array', function() {
    expect(wdiStudents).to.be.an('array')
  })
  it('.filter should be called on `people`', function() {
    expect(hof).to.include('people.filter')
  })
  it('wdiStudents only contains persons who are in WDI', function() {
    let expectedPeople = people.filter((v,i) => i!==2)
    expect(wdiStudents).to.deep.equal(expectedPeople)
  })
})
