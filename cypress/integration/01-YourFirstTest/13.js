describe('My First Test',()=>{
    it('Checks True is True',()=>{
        cy.log('Executing my first test')
        expect(true).to.equal(true)
    })
})