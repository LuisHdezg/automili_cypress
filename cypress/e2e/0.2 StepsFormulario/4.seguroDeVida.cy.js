import {generarFechaAleatoriaa, porcentajeBeneficiario} from '../funciones.cy'
import faker from 'faker'


export const llenarInformacionSeguroDeVida = () =>{

//Beneficiarios--------------------------------------------------------------------------------------------------------------------------

    cy.get('[name="payrollRelationships.0.rId"]').type('MADRE');//PARENTESCO
    cy.get('.MuiAutocomplete-popper').click();

    const nombreB = faker.name.firstName();//NOMBRE DE BENEFICIARIO
    const apellidoB = faker.name.firstName();//NOMBRE DE BENEFICIARIO

    cy.get('[name="payrollRelationships.0.prName"]').type(`${nombreB} ${apellidoB}`);

    const porcentajeBeneficiario1 = porcentajeBeneficiario();//PORCENTAJE
    cy.get('[name="payrollRelationships.0.prPercentage"]').type(porcentajeBeneficiario1);

    cy.wait(1000)

    cy.get('[name="addRelationShips"]').click();

    cy.get('[name="payrollRelationships.1.rId"]').type('TIO(A)');//PARENTESCO
    cy.get('.MuiAutocomplete-popper').click();

    const nombreB2 = faker.name.firstName();//NOMBRE DE BENEFICIARIO
    const apellidoB2 = faker.name.firstName();//NOMBRE DE BENEFICIARIO
    cy.get('[name="payrollRelationships.1.prName"]').type(`${nombreB2} ${apellidoB2}`);

    const porcentajeBeneficiario2 = porcentajeBeneficiario();//PORCENTAJE
    cy.get('[name="payrollRelationships.1.prPercentage"]').type(porcentajeBeneficiario2);


cy.wait (2000)
//Seguros de vida--------------------------------------------------------------------------------------------------------------------------------

    cy.get('[name="payrollStaff.psWeight"]').type('70', {force:true})//PESO

    cy.get('[name="payrollStaff.psHeight"]').type('1.70', {force:true})//ESTATURA

    cy.get('[name="payrollLifeInsurance.pliCancer"]').type('NO');//CANCER
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollLifeInsurance.pliVIH"]').type('NO');//SIDA
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollLifeInsurance.pliStroke"]').type('NO');//CEREBROVASCULAR
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollLifeInsurance.pliArtHyp"]').type('NO');//HIPERTENSION ARTERIAL
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollLifeInsurance.pliDiabetes"]').type('NO');//DIABETES
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollLifeInsurance.pliCorArtDis"]').type('NO');//ARTERIAS CORONARIAS
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollLifeInsurance.pliHeaAtt"]').type('NO');//INFARTO
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollLifeInsurance.pliHasConAcqPhyMenLim"]').type('NO');//LIMITACION FISICA O MENTAL
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollLifeInsurance.pliDiaTreDisOthThoMenAbo"]').type('NO');//ENFERMEDAD DIFERENTE
    cy.get('.MuiAutocomplete-popper').click();

    const fechadiagnostico = generarFechaAleatoriaa();//FECHA DE DIAGNOSTICO
    cy.get('[name="payrollLifeInsurance.pliDatDia"]').type(fechadiagnostico);


    cy.get('[name="payrollLifeInsurance.pliTreatment"]').type('Ninguno', {force:true});//TRATAMIENTO
    cy.get('[name="payrollLifeInsurance.pliActSta"]').type('Normal', {force:true});//ESTADO ACTUAL


    cy.get('[name="payrollLifeInsurance.pliIsPre"]').type('NO');//EMBARAZADA
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollLifeInsurance.pliPrimitive"]').type('NO');//PRIMIGESTANTE
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollLifeInsurance.ptName"]').type('6 MESES');//TIEMPO DE GESTACIÓN
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollLifeInsurance.pliDisabilityPensioner"]').type('NO');//PENSIONADO POR INVALIDEZ
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollLifeInsurance.pliUseDrugsAlcohol"]').type('NO');//BEBIDAS ALCOHOLICAS
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollLifeInsurance.pliDiseaseName"]').type('NADA', {force:true});//NOMBRE DE LA ENFERMEDAD
    cy.get('[name="payrollLifeInsurance.pliObservations"]').type('NINGUNA', {force:true});//SECUELAS O CONDICIONES
    cy.get('[name="payrollLifeInsurance.pliConsequences"]').type('NINGUNA', {force:true});//OBSERVACIONES
    cy.get('[name="payrollLifeInsurance.pliCurrentTreatment"]').type('NINGUNA', {force:true});//TRATAMIENTO ACTUAL
    cy.get('[name="payrollLifeInsurance.pliTreatmentOrSurgery"]').type('NINGUNA', {force:true});//TRATAMIENTO MEDICO

    cy.wait(2000)

    cy.get('[name="buttonNextStep"]').click();
}