import {expect} from "chai"
import { insertTestUser } from "./helpers/test.js"

const base_url = 'http://localhost:3001'

describe('POST login', () => {
    const email ='login@foo.com'
    const password = 'login123'
    insertTestUser(email, password)
    it('should login with valid credentials', async() => {
        const response = await fetch(base_url + '/user/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'email':email, 'password': password})
        })
    const data = await response.json()
    expect(response.status).to.equal(200, data.error)
    expect(data).to.be.an('object')
    expect(data).to.include.all.keys('id','email', 'token')
    })
})