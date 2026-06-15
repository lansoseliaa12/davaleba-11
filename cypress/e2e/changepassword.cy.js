describe('Automation Test Store - პაროლის  შეცვლა', () => {
    
    const loginName = 'lansoseliaa';
    const initialPassword = 'Testeri12345@'; 
    const updatedPassword = 'Testeri12349@';      

    beforeEach(() => {
     
        cy.login(loginName, initialPassword);
    });

    it('პაროლის შეცვლა ახლით', () => {
       
        cy.get('ul.side_account_list').contains('Change password').click();
        
        cy.get('#PasswordFrm_current_password').type(initialPassword);
        cy.get('#PasswordFrm_password').type(updatedPassword);
        cy.get('#PasswordFrm_confirm').type(updatedPassword);
        
        cy.get('button[title="Continue"]').click();
        
        
        cy.get('.alert-success').should('contain', 'Success: Your password has been successfully updated.');

    
        cy.get('ul.side_account_list').contains('Change password').click();
        
        cy.get('#PasswordFrm_current_password').type(updatedPassword);  
        cy.get('#PasswordFrm_password').type(initialPassword);       
        cy.get('#PasswordFrm_confirm').type(initialPassword);
      
        cy.get('button[title="Continue"]').click();
        
       
        cy.get('.alert-success').should('contain', 'Success: Your password has been successfully updated.');
    });
});