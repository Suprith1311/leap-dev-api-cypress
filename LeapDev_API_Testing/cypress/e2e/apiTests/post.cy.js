describe('post api test', () => {

  const employeeData = require('../../fixtures/employeerecord.json');
   let pattern = '185c45915fcd455981ff28c63f09d5cc';

  it('post users', ()=> {
   //1.Create a User suing the endpoint
    cy.request({
        method : 'POST',
        url : 'https://crudcrud.com/api/'+pattern+'/Employee'+id,
        headers : {
            'authorization' : "Bearer "
        },
        body : {
          "FirstName": employeeData.FirstName,
          "LastName" : employeeData.LastName, 
          "DateOfBirth":employeeData.DateOfBirth, 
          "StartDate" : employeeData.StartDate, 
          "Department" : employeeData.Department, 
          "JobTitle" : employeeData.JobTitle, 
          "Email": employeeData.Email,
           "Mobile": employeeData.Mobile, 
           "Address": employeeData.Address,
           "BaseSalary" : employeeData.BaseSalary
        }
        
    }).then((res)=> {
      expect(res.status).to.equal(201)
      expect(res.body).has.property('Email',employeeData.Email)
      expect(res.body).has.property('FirstName',employeeData.FirstName)
      cy.log(JSON.stringify(res))
    }) /* 2. Get Request to test the given/created Employee record by storing id*/
    .then((res) => {
      const id = res.body._id
      cy.log("Employee id is " + id);

      cy.request({
        method: 'GET',
        url : 'https://crudcrud.com/api/'+pattern+'/Employee'+id,
        headers : {
          'authorization' : "Bearer "
      }

      }).then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body).has.property('Email',employeeData.Email)
        expect(res.body).has.property('FirstName',employeeData.FirstName)
      })
      
    })
})
})