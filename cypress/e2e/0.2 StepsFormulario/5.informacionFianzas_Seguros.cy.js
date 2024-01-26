import { generarafiliacion} from '../funciones.cy'

export const llenarInformacionFianzas_Seguros = () =>{

//Informacion fianza, seguros del estado o colpensiones-------------------------------------------------------------------------------

    cy.get('[name="payrollStaff.psSons"]').type('SI'); //HIJOS
    cy.get('.MuiAutocomplete-popper').click();

     cy.get('[name="payrollWork.cCustomerActive"]').type('0',{force:true});//ACTIVO
    cy.get('[name="payrollWork.cCustomerPassive"]').type('0',{force:true});//PASIVO

    cy.get('[name="payrollWork.cCustomerCargoPublico"]').type('SI');//CARGO PULICO

    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollWork.cCustomerRecPubl"]').type('SI');//RECONOCIMIENTO PUBLICO

    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollWork.cCustomerManeRecPubl"]').type('SI');//RECURSOS PUBLICOS

    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollWork.cCustomerRecPublEx"]').type('SI');//RELACION CON PERSONA PUBLICA

    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollWork.cCustomerFFinCodigoCIIU"]').type('45000', {force:true});//CODIGO CIUU


    const afiliacion = generarafiliacion();
    cy.get('[name="payrollStateInsurance.poiAffiliationNumber"]').type(afiliacion);//Numero de afiliacion

    cy.get('[name="payrollStateInsurance.poiUsNationality"]').type('NO');//Nacionalidad
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollStateInsurance.poiUsAccount"]').type('NO');//Fondos a cuentas
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollStateInsurance.poiUsInvestmentAssets"]').type('SI');//Ingresos
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollStateInsurance.poiAmericanGreenCard"]').type('NO');//Tarjeta americana
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollStateInsurance.poiBornUS"]').type('SI');//Nacio en estados unidos
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollStateInsurance.poiLivedUS"]').type('NO');//Vivio en estados unidos
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollStateInsurance.poiForeignCurrency"]').type('SI');//Moneda Extranjera
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollStateInsurance.poiActivity"]').type('TRANSFERENCIAS');//Siguientes Actividades
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollStateInsurance.poiTaxObligations"]').type('SI');//Obligaciones tributarias
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollStateInsurance.poiBiddingActivities"]').type('SI');//Actividad Comercial
    cy.get('.MuiAutocomplete-popper').click();
    cy.wait(1000)

    cy.get('[name="payrollStateInsurance.poiInfoBiddingActivities"]').type('INGENIERO DE SISTEMAS');//Actividad Comercial

    cy.get('[name="payrollStateInsurance.poiAcceptInformation"]').type('SI');//Informacion suministrada
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollStateInsurance.poiBreachContract"]').type('NO');//Recursos del contrato
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollStateInsurance.poiCriminallyDeclared"]').type('SI');//Declarado judicialmente
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollStateInsurance.poiTruthfulStatements"]').type('NO');//Declaraciones en documentos
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollStateInsurance.poiAcceptDocument"]').type('SI');//Leido y entendido el documento
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollStateInsurance.poiInsuredValue"]').type('10000000');//Solicitud de incremento
    cy.get('[name="payrollStateInsurance.poiPremiumValue"]').type('10000000');//Valor de prima

    cy.get('[name="payrollStateInsurance.poiDangerHisLife"]').type('SI');//Peligro su vida
    cy.get('.MuiAutocomplete-popper').click();
    cy.wait(1000);

    cy.get('[name="payrollStateInsurance.poiInfoDangerHisLife"]').type('ACCIDENTE VIAL');//Especifique el peligro

    cy.get('[name="payrollStateInsurance.poiTakesMedicine"]').type('SI');//Algun medicamento
    cy.get('.MuiAutocomplete-popper').click();
    cy.wait(1000);

    cy.get('[name="payrollStateInsurance.poiInfoTakesMedicine"]').type('Naproxeno');//Especifique medicamentos

    cy.get('[name="payrollStateInsurance.poiEPS"]').type('Sanitas');//Eps

    cy.get('[name="payrollStateInsurance.poiIPS"]').type('Coomeva');//Ips

    cy.get('[name="payrollStateInsurance.poiTakeDrug"]').type('SI');//Algun medicamento
    cy.get('.MuiAutocomplete-popper').click();
    cy.wait(1000);

    cy.get('[name="payrollStateInsurance.poiInfoTakeDrug"]').type('Cigarrillo');//Especifique medicamentos

    cy.wait(2000)
    cy.get('[name="buttonNextStep"]').click();
}