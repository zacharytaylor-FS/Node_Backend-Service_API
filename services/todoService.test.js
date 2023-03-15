const { describe } = require("node:test")
const todoService = require("./todoService")

// describe, test, expect
describe('Todo Service Test', () => {
  test('As a user I want to display my todo list', async () => { 
    const result = await todoService() 
  })
})