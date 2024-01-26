


describe("Entrando a la Pagina MILI Local", () => {
  it("Validando Inicio", () => {
    cy.visit("https://miliqa.miliv2.com/");

    cy.get(".MuiAutocomplete-hasPopupIcon").type("Cédula de Ciudadanía");
    cy.wait(1000);
    cy.get(".MuiAutocomplete-popper").click();

    cy.get("#idi").type("234236");
    cy.get("#uPass").type("123654");
    cy.get(".MuiButton-contained").click();

    cy.wait(4000);

    //-------Modulo de Creditos--------------------------------------------------------------------------------------------------------------

    cy.contains("CRÉDITOS").click();
    cy.wait(2000);
    /* cy.contains("Parámetros creditos").click();
    cy.wait(1000);
    cy.contains("Líneas de créditos").click(); */
    cy.wait(4000);

    //Información línea de crédito---------------------------------------------------------------------------------------------------------
    cy.get('[data-testid="SaveIcon"]').click();
    cy.wait(2000);
    cy.get('[name="ctName"]').type("CREDITOS 360 v2", { force: true });
    cy.get('[name="ctOpen"]').check({ force: true }); //Linea Abierta
    cy.get('[name="ctFeeAdjust"]').check({ force: true }); //Ajustar Fecha Cuota
    cy.get('[name="ctInterestOnArrears"]').check({ force: true }); //Intereses de mora
    cy.get('[name="ctCollectFromDisbursement"]').check({ force: true }); //Descontar del desembolso
    cy.get('[name="ctCollectionCost"]').check({ force: true }); //Gastos de Cobranza
    cy.get('[name="ctForIntegrations"]').check({ force: true }); //ACTIVAR 360



     //Información de topes-----------------------------------------------------------------------------------
     cy.get('[name="ctMinCap"]').type("10000000", { force: true });// Tope minimo
     cy.get('[name="ctMaxCap"]').type("50000000", { force: true });// Tope maximo


     //Información de tiempos o plazos del crédito-----------------------------------------------------------------------------------------
    cy.get('[name="ctType"]').type("MESES");//Tipo de Periodo
    cy.wait(1000);
    cy.get(".MuiAutocomplete-popper").click();

    cy.get('[name="minMonths"]').type("1");//Minimo de meses
    cy.wait(1000);
    cy.get(".MuiAutocomplete-popper").click();

    cy.get('[name="maxMonths"]').type("20");//Maximo de meses
    cy.wait(1000);
    cy.get(".MuiAutocomplete-popper").click();


     //Formatos del crédito---------------------------------------------------------------------------------------------------------------

     cy.get('[name="tfcId"]').type("GENERAL");//Formato de credito
     cy.get(".MuiAutocomplete-popper").click();

     cy.get('[name="ufId"]').type("NUEVO");
     cy.get(".MuiAutocomplete-popper").click();//Formato de requisitos

     cy.get('[name="cdId"]').type("COUDEDOR FEMBISOL");//Formato de codeudores
     cy.get(".MuiAutocomplete-popper").click();

     cy.get('[name="ctNumCoDebtors"]').type("0", { force: true });//Codeudores

     cy.get('[name="vId"]').type("19.00 %");//Iva
     cy.get(".MuiAutocomplete-popper").click();

     cy.get('[name="ctGroup"]').type("NO");//Grupo
     cy.get(".MuiAutocomplete-popper").click();

     cy.get('[name="ctMultiple"]').type("SI");//Crédito Multiple
     cy.get(".MuiAutocomplete-popper").click();

     cy.get('[name="ctAdjustable"]').type("SI");//Intereses Ajustables
     cy.get(".MuiAutocomplete-popper").click();

     cy.get('[name="mspId"]').type("LEYPAL CORP S.A.S");//Provedoor de firma electronica
     cy.get(".MuiAutocomplete-popper").click();

     cy.get('[name="ctGracePeriod"]').type("0", { force: true });//Periodo de gracia

     cy.get('[name="ctReTanking"]').type("NO");//Retanqueo
     cy.get(".MuiAutocomplete-popper").click();
     cy.get('[name="ctTanPer"]').type("0", { force: true });

     cy.get('[name="ctOptPay"]').type("NO");//Refinanciación
     cy.get(".MuiAutocomplete-popper").click();
     cy.get('[name="ctOptPer"]').type("0", { force: true });

     cy.get('[name="ctCard"]').type("SI");//Cartera
     cy.get(".MuiAutocomplete-popper").click();
     cy.get('[name="ctCarPer"]').type("1", { force: true });

     cy.get('[name="ctDescription"]').type("Ninguna");//Descripción

     //Tipos de atributos-------------------------------------------------------------------------------------------------------------------

    cy.get('[name="formAttribute.0.taId"]').type("001002 AFILIACIÓN COOPERATIVA");
    cy.get(".MuiAutocomplete-popper").click();

    /* cy.get('[name="formAttribute.0.ctaSee"]').type("SI");
    cy.get(".MuiAutocomplete-popper").click(); */

    /* cy.get('[data-testid="AddCircleIcon"]').click(); */
    cy.wait(1000)

    cy.get('[name="formAttribute.1.taId"]').type("001004 APORTE COOPERATIVA");
    cy.get(".MuiAutocomplete-popper").click();

    /* cy.get('[name="formAttribute.1.ctaSee"]').type("SI");
    cy.get(".MuiAutocomplete-popper").click(); */

    /* cy.get('[data-testid="AddCircleIcon"]').click(); */
    cy.wait(1000)

    cy.get('[name="formAttribute.2.taId"]').type("001029 INTERES CERO");
    cy.get(".MuiAutocomplete-popper").click();

    /* cy.get('[name="formAttribute.2.ctaSee"]').type("SI");
    cy.get(".MuiAutocomplete-popper").click(); */

    /* cy.get('[data-testid="AddCircleIcon"]').click(); */
    cy.wait(1000)

    cy.get('[name="formAttribute.3.taId"]').type("001034 INTERES DOS");
    cy.get(".MuiAutocomplete-popper").click();

    /* cy.get('[name="formAttribute.3.ctaSee"]').type("SI");
    cy.get(".MuiAutocomplete-popper").click();
 */
    /* cy.get('[data-testid="AddCircleIcon"]').click(); */
    cy.wait(1000)

    cy.get('[name="formAttribute.4.taId"]').type("001009 ESTRUCTURACIÓN DEL CRÉDITO");
    cy.get(".MuiAutocomplete-popper").click();

   /*  cy.get('[name="formAttribute.4.ctaSee"]').type("NO");
    cy.get(".MuiAutocomplete-popper").click(); */

    /* cy.get('[data-testid="AddCircleIcon"]').click(); */
    cy.wait(1000)

    cy.get('[name="formAttribute.5.taId"]').type("001010 FIANZA DE CRÉDITOS ACTIVAL");
    cy.get(".MuiAutocomplete-popper").click();

  /*   cy.get('[name="formAttribute.5.ctaSee"]').type("NO");
    cy.get(".MuiAutocomplete-popper").click();
 */
    /* cy.get('[data-testid="AddCircleIcon"]').click(); */
    cy.wait(1000)

    cy.get('[name="formAttribute.6.taId"]').type("001011 REEMBOLSO GASTOS FINANCIEROS");
    cy.get(".MuiAutocomplete-popper").click();

 /*    cy.get('[name="formAttribute.6.ctaSee"]').type("NO");
    cy.get(".MuiAutocomplete-popper").click(); */

    /* cy.get('[data-testid="AddCircleIcon"]').click(); */
    cy.wait(1000)


    cy.get('[name="formAttribute.7.taId"]').type("001005 CARGO POR TECNOLOGÍA");
    cy.get(".MuiAutocomplete-popper").click();

    /* cy.get('[name="formAttribute.7.ctaSee"]').type("NO");
    cy.get(".MuiAutocomplete-popper").click(); */

    /* cy.get('data-testid="AddCircleIcon"]').click(); */
    cy.wait(1000)

    cy.get('[name="formAttribute.8.taId"]').type("001006 SEGURO DE VIDA DEUDORES");
    cy.get(".MuiAutocomplete-popper").click();

   /*  cy.get('[name="formAttribute.8.ctaSee"]').type("NO");
    cy.get(".MuiAutocomplete-popper").click(); */


    //Documentos necesarios-----------------------------------------------------------------------------------

    cy.get('[name="formTypeDocuments.0.dcId"]').type('CONTRATO DE MUTUO CON DESCUENTO DIRECTO');
    cy.get(".MuiAutocomplete-popper").click();

    cy.get('[name="formTypeDocuments.0.rcGroup"]').type('CONTRATOS');
    cy.get('[name="formTypeDocuments.0.rcPriority"]').type('1');


    /* cy.get('[id="documentosnecesarios"]').click(); */
    cy.wait(1000)


    cy.get('[name="formTypeDocuments.1.dcId"]').type('CONTRATO DE FIANZA');
    cy.get(".MuiAutocomplete-popper").click();

    cy.get('[name="formTypeDocuments.1.rcGroup"]').type('CONTRATOS');
    cy.get('[name="formTypeDocuments.1.rcPriority"]').type('2');

    cy.wait(1000)
    /* cy.get('[id="documentosnecesarios"]').click(); */

    cy.get('[name="formTypeDocuments.2.dcId"]').type('AUTORIZACIÓN DE DESCUENTO POR NÓMINA');
    cy.get(".MuiAutocomplete-popper").click();

    cy.get('[name="formTypeDocuments.2.rcGroup"]').type('CONTRATOS');
    cy.get('[name="formTypeDocuments.2.rcPriority"]').type('3');

    cy.wait(1000)
    /* cy.get('[id="documentosnecesarios"]').click(); */


    cy.get('[name="formTypeDocuments.3.dcId"]').type('DECLARACIÓN DE FATCA');
    cy.get(".MuiAutocomplete-popper").click();

    cy.get('[name="formTypeDocuments.3.rcGroup"]').type('CONTRATOS');
    cy.get('[name="formTypeDocuments.3.rcPriority"]').type('4');

    cy.wait(1000)
   /*  cy.get('[id="documentosnecesarios"]').click(); */


    cy.get('[name="formTypeDocuments.4.dcId"]').type('SEGURO DE VIDA COLMENA');
    cy.get(".MuiAutocomplete-popper").click();

    cy.get('[name="formTypeDocuments.4.rcGroup"]').type('CONTRATOS');
    cy.get('[name="formTypeDocuments.4.rcPriority"]').type('5');

    cy.wait(1000)
    /* cy.get('[id="documentosnecesarios"]').click(); */


    cy.get('[name="formTypeDocuments.5.dcId"]').type('PAGARÉ');
    cy.get(".MuiAutocomplete-popper").click();

    cy.get('[name="formTypeDocuments.5.rcGroup"]').type('PAGARE');
    cy.get('[name="formTypeDocuments.5.rcPriority"]').type('6');



//Etapas-------------------------------------------------------------------------------------------------------------------------------

    cy.get('[name="formIdentityStages.0.pId"]').type('SOLICITUD DEL CRÉDITO - CONFIRMAR SOLICITUD DE CRÉDITO');
    cy.get(".MuiAutocomplete-popper").click();
    cy.get('[name="formIdentityStages.0.ctpOrder"]').type('1');

    cy.wait(1000)
    /* cy.get('[id="agregaretapas"]').click(); */


    cy.get('[name="formIdentityStages.1.pId"]').type('APROBACIÓN DEL CRÉDITO - APROBAR SOLICITUD DE CRÉDITO');
    cy.get(".MuiAutocomplete-popper").click();
    cy.get('[name="formIdentityStages.1.ctpOrder"]').type('2');

    cy.wait(1000)
    /* cy.get('[id="agregaretapas"]').click(); */


    cy.get('[name="formIdentityStages.2.pId"]').type('CONFIRMAR PAGADURÍA - PAGADURÍA CONFIRMAR CRÉDITO');
    cy.get(".MuiAutocomplete-popper").click();
    cy.get('[name="formIdentityStages.2.ctpOrder"]').type('3');

    cy.wait(1000)
    /* cy.get('[id="agregaretapas"]').click(); */



    cy.get('[name="formIdentityStages.3.pId"]').type('DOCUMENTOS DEL CRÉDITO - CONFIRMAR DOCUMENTOS DE CRÉDITO');
    cy.get(".MuiAutocomplete-popper").click();
    cy.get('[name="formIdentityStages.3.ctpOrder"]').type('4');

    cy.wait(1000)
    /* cy.get('[id="agregaretapas"]').click(); */


    cy.get('[name="formIdentityStages.4.pId"]').type('EGRESO - EGRESO CRÉDITO');
    cy.get(".MuiAutocomplete-popper").click();
    cy.get('[name="formIdentityStages.4.ctpOrder"]').type('5');

    cy.wait(20000)


    cy.get('[data-testid="SaveIcon"]').click();
  });
});
