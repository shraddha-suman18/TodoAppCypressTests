import TodoPage from "../../Support/Pages/todoPage";


context('Add task', () => {
    var todoPage = new TodoPage();
	beforeEach(()=>{
		cy.visit("http://localhost:8080/");	
	});

	it('should add and list the task added',()=>{
	    var text= 'first item';
		todoPage.addItem(text)
		verifyTodoItemExist(text);
	});

	it('should be able to add duplicate item',()=>{
	    var text= 'second item';
        todoPage.addItem(text)
    	todoPage.addItem(text)
    	cy.xpath("//li[contains(text(),'"+text+"')]").should('have.length', 2);
	});

});