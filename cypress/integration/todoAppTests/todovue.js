import vueTodoPage from "../../support/vuePages/todoPage"

context('Add task', () => {
    var vueTodo = new vueTodoPage();
	beforeEach(()=>{
		cy.visit("https://wscgm.csb.app/");	
    });


	it('should add and list the task added',()=>{
	    var text= 'first item';
		vueTodo.addItem(text)
		vueTodo.verifyTodoItemExist(text);
	});
	

	it('should mark the task as completed',()=>{
	    var text= 'to be completed todo item';
		vueTodo.addItem(text)
		vueTodo.markTaskAsCompleted(text);
		vueTodo.verifyItemCompleted(text);
	});
	
	it('should delete the task added',()=>{
		var text= 'to be deleted todo item';
		vueTodo.addItem(text)
		vueTodo.deleteTask(text)
		vueTodo.verifyDeletedTask(text)

	});
});
