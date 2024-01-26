

export const llenarInformacionGeneral = () =>{

cy.get('[name="payrollResidence.academicLevels"]').type('ESPECIALIZACIÓN');//NIVEL ACADEMICO
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollResidence.maritalStatus"]').type('SOLTERO');//ESTADO CIVIL
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollWork.otherIncome"]').type('0',{force:true});//OTROS INGRESOS

    cy.get('[name="payrollWork.financialExpense"]').type('0',{force:true});//GASTOS PERSONALES

    cy.get('[name="payrollWork.personalExpense"]').type('0',{force:true});//GASTOS FINANCIEROS


    //INFORMACION DE RESIDENCIA-------------------------------------------------------------------------------------------------------------------------------------------------

    cy.get('[name="payrollResidence.city"]').type('TOLUVIEJO');//CIUDAD
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollResidence.typeAddress"]').type('MANZANA');//TIPO DE VIA
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollResidence.streetNumber"]').type('12');//NUMERO DE VIA

    cy.get('[name="payrollResidence.prefix"]').type('42');//PREFIJO

    cy.get('[name="payrollResidence.houseNumber"]').type('1');//CASA

    cy.get('[name="payrollResidence.infoResidence"]').type('De esquina');//INFORMACION DE RESIDENCIA

    cy.get('[name="payrollResidence.dependents"]').type('1 - 3');//PERSONAS A CARGO
    cy.get('.MuiAutocomplete-popper').click();

    cy.wait(1000)

    cy.get('[name="buttonNextStep"]').click();

}