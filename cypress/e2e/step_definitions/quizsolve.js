import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

  
  const subpage = require("../../pages/subpage");
  
  
Given("i navigate to the url", () => {
    cy.visit("/");
    cy.wait(6000)
    cy.url().should('eq', 'https://subscribe.stctv.com/sa-ar?')
    .then(() => {
                // we are trying to return something
                // from the .within callback,
                // but it won't have any effect
              cy.log('check url valid ')
              })

  });
  
When("user be on  home page", () =>{
  
   
subpage.elements.mainlogo().should('be.visible') .then(() => {
        
cy.log('check logo appear ')
})
subpage.elements.signinbutton().should('be.visible') .then(() => {
        
cy.log('check signin button appear  ')
})
subpage.elements.currentcountry().should('be.visible') .then(() => {
        
cy.log('check current country appear  ')
})

subpage.elements.translationbutton().should('be.visible') .then(() => {
        
cy.log('check change language appear ')
})
subpage.elements.maincontainer().should('be.visible') .then(() => {
        
    cy.log('main container appear  ')
    })
   
  });
  
  
Then("check all type and price and currency for all countries", () => {
  
    cy.wait(5000)

subpage.elements.price().should('be.visible')
subpage.elements.price().invoke('text').then((text) => {
    expect(text.trim()).contains( 'ريال' )

})
subpage.elements.lite().should('be.visible').then(() => {
        
    cy.log('lite menu appear ')
})
   
subpage.elements.premium().should('be.visible').then(() => {
        
        cy.log(' الاساسية  ')
})
subpage.elements.premium2().should('be.visible').then(() => {
        
cy.log(' premium  menu appear  ')
})
   
cy.wait(5000)
   subpage.elements.currentcountry().click({force:true})
    cy.wait(5000)
   subpage.elements.bahrain().click({force:true})
   cy.wait(5000)
   subpage.elements.price().should('be.visible')
   subpage.elements.price().invoke('text').then((text) => {
       expect(text.trim()).contains( 'دينار' )
   
   })
   subpage.elements.lite().should('be.visible').then(() => {
           
       cy.log('lite menu appear ')
   })
      
   subpage.elements.premium().should('be.visible').then(() => {
           
           cy.log(' الاساسية  ')
   })
   subpage.elements.premium2().should('be.visible').then(() => {
           
   cy.log(' premium  menu appear  ')
   })
   cy.wait(5000)
   subpage.elements.currentcountry().click({force:true})
    cy.wait(5000)
   subpage.elements.kuwait().click({force:true})
   cy.wait(5000)
   subpage.elements.price().should('be.visible')
   subpage.elements.price().invoke('text').then((text) => {
       expect(text.trim()).contains( 'دينار' )
   
   })
   subpage.elements.lite().should('be.visible').then(() => {
           
       cy.log('lite menu appear ')
   })
      
   subpage.elements.premium().should('be.visible').then(() => {
           
           cy.log(' الاساسية  ')
   })
   subpage.elements.premium2().should('be.visible').then(() => {
           
   cy.log(' premium  menu appear  ')
   })
   cy.wait(5000)
  });