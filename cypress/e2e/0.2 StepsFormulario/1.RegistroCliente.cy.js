import {generarFechanacimmiento, generarTelefono, generarFechaAleatoriaa, generarIdentificacion} from '../funciones.cy'
import faker from 'faker'

export const llenarInformacionPersonal = () => {
    cy.get('[name="payrollStaff.typeIdentity"]').type('CÉDULA DE CIUDADANÍA');
    cy.get(".MuiAutocomplete-popper").click();
    cy.get('[name="payrollStaff.identification"]').type('1143462270');
    cy.get('body').click();
    cy.wait(3000);

    const fechaAleatoria = generarFechanacimmiento();
    cy.get('[name="payrollStaff.birthDate"]').type(fechaAleatoria);

    cy.get('[name="payrollStaff.city"]').type('LOS PALMITOS');
    cy.get(".MuiAutocomplete-popper").click();

    cy.get('[name="payrollStaff.gender"]').type('MASCULINO');
    cy.get(".MuiAutocomplete-popper").click();

    const telefonogeneralfijo = generarTelefono();
    cy.get('[name="payrollStaff.landline"]').type(telefonogeneralfijo);

    const telefonogeneral = generarTelefono();
    cy.get('[name="payrollStaff.cellPhone"]').type(telefonogeneral);

    const correoAleatorio = faker.internet.email();
    cy.get('[name="payrollStaff.email"]').type("pruebaswowqa@hotmail.com");

    cy.get('[name="payrollStaff.password"]').type('123456');
    cy.get('[name="payrollStaff.confirmPassword"]').type('123456');

    const fechaAleatoria1 = generarFechaAleatoriaa();
    cy.get('[name="payrollStaff.expeditionDate"]').type(fechaAleatoria1);

    cy.get('[name="payrollStaff.expeditionPlace"]').type('BARANOA');
    cy.get('.MuiAutocomplete-popper').click();

    const nombreAleatorio = faker.name.firstName();
    cy.get('[name="payrollStaff.firstName"]').type(nombreAleatorio);

    const segundonombreAleatorio = faker.name.firstName();
    cy.get('[name="payrollStaff.secondName"]').type(segundonombreAleatorio);

    const apellidoAleatorio = faker.name.lastName();
    cy.get('[name="payrollStaff.firstLastName"]').type(apellidoAleatorio);

    const segundoapellidoAleatorio = faker.name.lastName();
    cy.get('[name="payrollStaff.secondLastName"]').type(segundoapellidoAleatorio);

    cy.get('[name="payrollWork.net"]').type('10000000');

    cy.get('[name="payrollBank.typeAccount"]').type('AHORRO');
    cy.get('.MuiAutocomplete-popper').click();

    const cuentaAleatoria = generarIdentificacion();
    cy.get('[name="payrollBank.accountNumber"]').type(cuentaAleatoria);

    cy.get('[name="payrollBank.typeBank"]').type('BANCO DAVIVIENDA');
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollBank.typeBranch"]').type('EL CARMEN DE BOLIVAR');
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollEconomyActivities.economyActivities"]').type('EMPLEADO');
    cy.get('.MuiAutocomplete-popper').click();

    const nombreEmpresa = faker.company.companyName();
    cy.get('[name="payrollEconomyActivities.peaCompanyName"]').type(nombreEmpresa);

    const dirEmpresa = faker.address.streetAddress();
    cy.get('[name="payrollEconomyActivities.peaAddress"]').type(dirEmpresa);

    cy.get('[name="payrollEconomyActivities.peaTypeCompany"]').type('PRIVADA');
    cy.get('.MuiAutocomplete-popper').click();

    const telefonolaboral = generarTelefono();
    cy.get('[name="payrollEconomyActivities.peaWorkPhone"]').type(telefonolaboral);

    const correolaboral = faker.internet.email();
    cy.get('[name="payrollEconomyActivities.peaEmail"]').type(correolaboral);

    cy.get('[name="payrollEconomyActivities.department"]').type('QUINDÍO');
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollEconomyActivities.city"]').type('BUCARAMANGA');
    cy.get('.MuiAutocomplete-popper').click();

    const cargoactual = faker.name.jobTitle();
    cy.get('[name="payrollEconomyActivities.peaPosition"]').type(cargoactual);

    cy.get('[name="payrollEconomyActivities.typeContract"]').type('INDEFINIDO');
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollEconomyActivities.peaAntiquity"]').type('15');

    const fixture = '3445753485.jpg';
    cy.get('[name="pdVoucher"]').attachFile(fixture);

    cy.wait(1000);
    cy.get('[name="payrollStaff.terCon"]').check();

    cy.get('[name="buttonNextStep"]').click();
  };
