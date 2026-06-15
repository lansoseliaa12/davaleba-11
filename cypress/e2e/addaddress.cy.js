describe('Automation Test Store - მისამართის დამატება', () => {
    
    const loginName = 'lansoseliaa';
    const initialPassword = 'Testeri12345@'; 

    beforeEach(() => {
       
        cy.login(loginName, initialPassword);
    });

    it('Address 2-ის შევსება', () => {
       
        cy.get('ul.side_account_list').contains('Manage Address Book').click();
        
       
        cy.get('button[title="Edit"]').click();
        
       
        cy.get('#AddressFrm_address_2').type('pekini 7'); 
        
       
        cy.get('button[title="Continue"]').click();
        
       
        cy.get('.alert-success').should('contain', 'Your address has been successfully updated');
    });
});