context('Add task', () => {
	beforeEach(()=>{
		cy.visit("http://localhost:8080/");	
	});

	it('should add and list the task added',()=>{
	    var text= 'first item';
		cy.get('#item').type(text);
		cy.get("#add").click();
		cy.xpath("//li[contains(text(),'"+text+"')]").should('be.visible');
	});

	it('should be able to add duplicate item',()=>{
	    var text= 'second item';
        cy.get('#item').type(text);
    	cy.get("#add").click();
    	cy.get('#item').type(text);
        cy.get("#add").click();
    	cy.xpath("//li[contains(text(),'"+text+"')]").should('have.length', 2);
	});
})