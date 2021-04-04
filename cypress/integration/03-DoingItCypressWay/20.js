describe('Here we explore the fixture and its uses for different purposes',()=>{
    it('Reads the data from fixture file',()=>{  
        cy.fixture('user_information').then((user)=>{
            expect(user.Name).to.equal('Keshav')
            expect(user.Role).to.equal('QA')
            expect(user.Company).to.include('Technogise ')
            expect(user.Designation).to.equal('Consultant')
        })
    })
    it('Write data to a fixture file',()=>{
        cy.writeFile('cypress/fixtures/CypressInfo.json', {
            SessionName: 'Introduction to Cypress',
            Hostname: 'Keshav and ATM',
            Organisers: 'Technogise Pvt LTD',
            SessionType: 'Hands on Session' 
          })
    })
})

