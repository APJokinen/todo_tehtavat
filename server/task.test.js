import {expect} from "chai"
import { initializeTestDb, insertTestUser, getToken } from "./helpers/test.js"

const base_url = 'http://localhost:3001'

describe('POST task', () =>{
    const email = 'delete@foo.com'
    const password = 'delete123'
    insertTestUser(email, password)
    const token=getToken(email)
it('should not post a task without description', async() => {
    const response = await fetch(base_url + '/create', {
    method: 'post',
    headers: {
        'Content-Type':'application/json',
        Authorization: token
    },
    body: JSON.stringify({'description':null})
    })
    const data = await response.json()
    expect(response.status).to.equal(400, data.error)
    expect(data).to.be.an('object')
    expect(data).to.include.all.keys('error')
})

it('should not post a task with zero length description', async() => {
    const response = await fetch(base_url + '/create', {
        method: 'post',
        headers: {
            'Content-Type':'application/json',
            Authorization:token
        },
        body: JSON.stringify({'description':''})
    })
    const data = await response.json()
    expect(response.status).to.equal(400, data.error)
    expect(data).to.be.an('object')
    expect(data).to.include.all.keys('error')
})

})

