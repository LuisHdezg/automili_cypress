import { llenarInformacionPersonal } from "../0.2 StepsFormulario/1.RegistroCliente.cy";
import { llenarInformacionGeneral } from '../0.2 StepsFormulario/2.InformaciónGeneral_Residencia.cy';
import { llenarInformacionReferencias } from '../0.2 StepsFormulario/3.referencias.cy';
import { llenarInformacionSeguroDeVida } from '../0.2 StepsFormulario/4.seguroDeVida.cy';
import { llenarInformacionFianzas_Seguros } from '../0.2 StepsFormulario/5.informacionFianzas_Seguros.cy';
import { agregarDocumentos } from '../0.2 StepsFormulario/6.documentos.cy';
import { llenarInformacionCodeudor } from '../0.2 StepsFormulario/7.codeudor.cy';



describe("Validando Login de MILI Local", () => {
});

it("Validando Inicio", () => {
    cy.visit("http://localhost:3000/credits");

    //Datos de entrada---------------------------------------------------------------------------------------------------------------
    try {
    cy.wait(3000)
    cy.get('[name="ctId"]').type("LIBRE INVERSION PLUS S2");
    cy.wait(1000);
    cy.get(".MuiAutocomplete-popper").click();
    cy.wait(2000);

    cy.get('[name="anotherAmountButton"]').click()
    cy.get('[name="vcDefVal"]').type('30000000')

    /* cy.get('[name="deslizante"]').invoke('val', '10000000'.toString()).trigger('input', { force: true }); */
    /* cy.get('[name="deslizante1"]').type('val', 8 ).trigger('input', { force: true }); */

    cy.get('[name="idCode"]').type('SI');//Vendedor
    cy.wait(1000)
    cy.get(".MuiAutocomplete-popper").click();//CODIGO DEL VENDEDOR
    cy.get('[name="sSellerCode"]').type('123qsdasd1', {force:true})
    cy.get('body').click();

    cy.wait(2000)

    cy.get('[name="requestsButton"]').click();//SOLICITAR
    cy.get('[name="notButton"]').click();

    cy.wait (5000)

//Step 1------------------------------------------------------------------------------------------------------------------------------
    llenarInformacionPersonal();
    cy.wait(8000);
//Step 2------------------------------------------------------------------------------------------------------------------------------
    llenarInformacionGeneral();
    cy.wait(5000);
//Step 3------------------------------------------------------------------------------------------------------------------------------
    llenarInformacionReferencias();
    cy.wait(5000);
//Step 4------------------------------------------------------------------------------------------------------------------------------
    llenarInformacionSeguroDeVida();
    cy.wait(5000);
//Step 5------------------------------------------------------------------------------------------------------------------------------
    llenarInformacionFianzas_Seguros();
    cy.wait(5000);
//Step 6------------------------------------------------------------------------------------------------------------------------------
    agregarDocumentos();
    cy.wait(8000);
//Step 7------------------------------------------------------------------------------------------------------------------------------
    llenarInformacionCodeudor();
//------------------------------------------------------------------------------------------------------------------------------------
    } catch (error) {
        Cypress.log({
            name: 'Error en la prueba',
            message: error.message,
    });

    }
  });
