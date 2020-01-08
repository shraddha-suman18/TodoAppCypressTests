import TodoPage from "../../Support/Pages/todoPage";


context('Add task', () => {
	var text= 'this will be deleted';
    var todoPage = new TodoPage();
	beforeEach(()=>{
		cy.visit("http://localhost:8080/");
        todoPage.addItem(text)
	});

	it('should delete the task from the list',()=>{
        todoPage.deleteItem(text)
        todoPage.verifyTodoItemExist(text);
	});


});