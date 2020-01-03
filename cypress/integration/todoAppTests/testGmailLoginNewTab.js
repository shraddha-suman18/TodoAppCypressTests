context('Gmail-Create account', () => {
	beforeEach(()=>{
		cy.visit("https://accounts.google.com/signup/v2/webcreateaccount?service=mail&flowName=GlifWebSignIn&flowEntry=SignUp");	
	});

	it('should see error when a used name is entered ',()=>{
		cy.get(".section--started a.started__cta--desktop").click()
		cy.get('#firstName').type('shraddha')
		
	});
})