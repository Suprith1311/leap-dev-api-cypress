describe('get api user tests', () => {
    //pattern has been decalred as a global variable to accomodate changing dynmaic url 
    let pattern = '185c45915fcd455981ff28c63f09d5cc';

it('get users', () => {
    //1.Create a User
    cy.request({
        method: 'POST',
        url : 'https://crudcrud.com/api/'+pattern+'/Employee'+id,
        headers: {
            'authorization': "Bearer "
        },
        body: {
            "FirstName": "updated",
            "LastName": "test",
            "Email": "updatedtest@gmail.com",
        }

    }).then((res) => {
        expect(res.status).to.equal(201)
        expect(res.body).has.property('Email', 'updatedtest@gmail.com')
        expect(res.body).has.property('FirstName', 'updated')
        cy.log(JSON.stringify(res))
    }).then((res) => {
        const id = res.body._id
        cy.log("Employee id is " + id);
        //2. UPDATE EMPLOYEE
        cy.request({
            method: 'PUT',
            url : 'https://crudcrud.com/api/'+pattern+'/Employee'+id,
            headers: {
                'authorization': "Bearer "
            },
            body: {
                "FirstName": "Suprith",
                "LastName": "kangokar",
                "Email": "www.ksuprith@gmail.com",
            }
        }).then((res) => {
            expect(res.status).to.equal(200)
            expect(res.body).has.property('Email', 'www.ksuprith@gmail.com')
            expect(res.body).has.property('FirstName', 'suprith')
        })
    })
})
})