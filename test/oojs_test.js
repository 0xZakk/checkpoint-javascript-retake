var should = require("chai").should()
var expect = require("chai").expect
var fs = require("fs")
var oojs = fs.readFileSync("oojs.js","utf8")


describe('OOJS #1', function() {
  try {
    var Group = require("../oojs.js").Group
  }
  catch(e) {
    console.log(e)
  }
  it('Group is a class', function() {
    expect(Group).to.be.a('function')
  })
  it('Group\'s constructor sets a name and members property', function() {
    var testGroup = new Group('test')
    expect(testGroup.name).to.be.a('string')
    expect(testGroup.members).to.be.an('array')
  })
  it('Group has an addMember method', function() {
    var testGroup = new Group('test')
    expect(testGroup.addMember).to.be.a('function')
  })
})

describe('OOJS #2', function() {
  try {
    eval(oojs)
  }
  catch(e) {
    console.log(e)
  }
  it('classmates is an instance of Group', function() {
    expect(classmates.__proto__.constructor.name).to.equal("Group")
  })
  it('classmates has properties', function() {
    expect(classmates.name).to.be.a('string')
    expect(classmates.members).to.be.an('array')
  })
  it('classmates has at least one member', function() {
    expect(classmates.members.length).to.be.greaterThan(0)
  })
})
