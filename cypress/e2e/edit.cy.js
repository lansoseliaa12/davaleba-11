describe('Automation Test Store - პროფილის რედაქტირება', () => {
    
    const loginName = 'lansoseliaa';
    const initialPassword = 'Testeri12345@'; 

    beforeEach(() => {
        cy.login(loginName, initialPassword);
    });

    it('მონაცემების შეცვლა - ანგარიშის  რედაქტირება და ასახვის შემოწმება', () => {
        cy.get('ul.side_account_list').contains('Edit account details').click();
        
        cy.get('#AccountFrm_firstname').clear().type('lana');
        cy.get('#AccountFrm_lastname').clear().type('soselia');
        
        
        cy.get('button[title="Continue"]').click();
        
        
        cy.get('.alert-success').should('contain', 'Success: Your account has been successfully updated.');
        

        cy.get('ul.side_account_list').contains('Edit account details').click();
        cy.get('#AccountFrm_firstname').should('have.value', 'lana');
    });
});