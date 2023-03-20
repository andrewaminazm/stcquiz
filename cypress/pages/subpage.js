class subpage {
    elements = {
    
     mainlogo:()=> cy.get('#jawwy-logo-web'),
     signinbutton:()=>cy.get('#signin'),
     currentcountry:()=>cy.get('.head-links > .country-current'),
     translationbutton:()=>cy.get('#translation-btn'),
      maincontainer:()=>cy.get('#main > .container'),
      price:()=>cy.get(':nth-child(2) > :nth-child(3) > .plan-names'),
      lite:()=>cy.get('#name-لايت'),
      premium:()=>cy.get('#name-الأساسية'),
      premium2:()=>cy.get('#name-بريميوم'),
      currency:()=>cy.get('#currency-لايت > i'),
      bahrain:()=> cy.get('#bh'),
      kuwait:()=>cy.get('#kw'),

    };
    
  }
  
  module.exports = new subpage();