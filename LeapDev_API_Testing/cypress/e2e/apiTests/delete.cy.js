describe('delete api user tests', () => {
    let pattern = '185c45915fcd455981ff28c63f09d5cc';

    it.only('create user test', () => {
        //1. Create user POST
        cy.request({
            method: 'POST',
            url : 'https://crudcrud.com/api/'+pattern+'/Employee'+id,
            headers: {
                'authorization': "Bearer "
            },
            body: {
                "FirstName": "NewRecordEmployee",
                "LastName": "Testing",
                "Email": "deletingrecord@gmail.com",
            }

        }).then((res) => {
            expect(res.status).to.equal(201)
            expect(res.body).has.property('Email', 'NewRecordEmployee')
            expect(res.body).has.property('FirstName', 'Testing')
            cy.log(JSON.stringify(res))
        }).then((res) => {
            const id = res.body._id
            cy.log("Employee id is " + id);
            //2. delete user(DELETE)
            cy.request({
                method: 'DELETE',
                url : 'https://crudcrud.com/api/'+pattern+'/Employee'+id,
                headers: {
                    'authorization': "Bearer "
                }
                 }).then((res) => {
                        expect(res.status).to.equal(204)
                    })
            })
        })
    })
