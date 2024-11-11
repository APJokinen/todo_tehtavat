import {expect} from "chai"

const base_url = 'http://localhost:3001'


describe('POST register', () => {
    const email = 'register@foo.com'
    const password = 'register123'
    it('should register with valid email and password', async() => {
        const response = await fetch(base_url + '/user/register',{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'email': email, 'password' : password})

        })
    const data = await response.json()
    expect(response.status).to.equal(201, data.error)
    expect(data).to.be.an('object')
    expect(data).to.include.all.keys('id', 'email')
    })  
})

