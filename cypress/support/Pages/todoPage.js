export default class todoPage  {

 addItem(text){
  	     cy.get('#item').type(text);
         cy.get("#add").click();
	}

 deleteItem(text){
    cy.xpath('.//li[contains(text(),"'+ text +'")]//*[@class="remove"]').click();
 }

 verifyTodoItemExist(text){
    cy.xpath("//li[contains(text(),'"+text+"')]").should('be.visible');
 }

}