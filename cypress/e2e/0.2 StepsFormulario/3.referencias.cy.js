import {generarTelefono} from '../funciones.cy'
import faker from 'faker'


export const llenarInformacionReferencias = () =>{

    //Referencia familiar-------------------------------------------------------------------------------------------------------------------------

    const  nombrefamiliarAleatorio = faker.name.firstName();//NOMBRE
    cy.get('[name="payrollReference.nameFamilyReference"]').type(nombrefamiliarAleatorio, {force:true});

    const apellidofamiliarAleatorio = faker.name.lastName();//APELLIDO
    cy.get('[name="payrollReference.lastNameFamilyReference"]').type(apellidofamiliarAleatorio, {force:true});

    cy.get('[name="payrollReference.relationShipsFamily"]').type('Esposo(a)')//RELACION FAMILIAR
    cy.get('.MuiAutocomplete-popper').click();

    const numerofamiliarAleatorio = generarTelefono();//TELEFONO
    cy.get('[name="payrollReference.familyReferencePhone"]').type(numerofamiliarAleatorio);

    cy.get('[name="payrollReference.typeAddressFamily"]').type('CORREGIMIENTO')//TIPO DE VIA
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollReference.streetNumberFamily"]').type('45');//NUMERO DE VIA

    cy.get('[name="payrollReference.prefixFamily"]').type('23');//PREFIJO

    cy.get('[name="payrollReference.houseNumberFamily"]').type('1');//N° DE CASA

    cy.get('[name="payrollReference.cityFamily"]').type('SABANAGRANDE');//CIUDAD
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollReference.infoResidenceFamily"]').type('Casa de 2 pisos');//INFORMACION DE RESIDENCIA

  //Referencia Particular--------------------------------------------------------------------------------------------------------------------

    const  nombreparticularAleatorio = faker.name.firstName();//NOMBRE
    cy.get('[name="payrollReference.nameParticularReference"]').type(nombreparticularAleatorio);

    const apellidoparticularAleatorio = faker.name.lastName();//APELLIDO
    cy.get('[name="payrollReference.lastNameParticularReference"]').type(apellidoparticularAleatorio);

    const numeroparticularAleatorio = generarTelefono();//NUMERO DE TELEFONO
    cy.get('[name="payrollReference.particularReferencePhone"]').type(numeroparticularAleatorio);

    cy.get('[name="payrollReference.typeAddressParticular"]').type('CARRERA');//TIPO DE VIA
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollReference.streetNumberParticular"]').type('45');//NUMERO DE VIA

    cy.get('[name="payrollReference.prefixParticular"]').type('23');//PREFIJO

    cy.get('[ name="payrollReference.houseNumberParticular"]').type('1');//CASA

    cy.get('[name="payrollReference.cityParticular"]').type('MONTERÍA');//CIUDAD
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollReference.infoResidenceParticular"]').type('De esquina');//INFORMACION DE RESIDENCIA

    //Referencia Estudiantil------------------------------------------------------------------------------------------------------------------------

    cy.get('[name="payrollReference.check"]').check();

   /*  cy.get('[name="payrollReference.typeIdentityStudent"]').type('CÉDULA DE CIUDADANÍA');
    cy.get('.MuiAutocomplete-popper').click();

    const idestudiantilAleatorio = generarIdentificacion();
    cy.get('[ñname="payrollReference.identificationStudent"]').type(idestudiantilAleatorio);

    const nombreestudiantilAleatorio = faker.name.firstName();
    cy.get('[name="payrollReference.nameStudentReference"]').type(nombreestudiantilAleatorio);

    const apellidoestudiantilAleatorio = faker.name.lastName();
    cy.get('[name="payrollReference.lastNameStudentReference"]').type(apellidoestudiantilAleatorio);

    cy.get('[name="payrollReference.genderStudent"]').type('MASCULINO');

    const telefonoestudianteAleatorio = generarTelefono();
    cy.get('[name="payrollReference.studentReferencePhone"]').type(telefonoestudianteAleatorio);

    const emailestudianteAleatorio = faker.internet.email();
    cy.get('[name="payrollReference.studentReferenceEmail"]').type(emailestudianteAleatorio); */

    cy.get('[name="payrollReference.studentReferenceFaculty"]').type('INGENIERIA');

   /*  cy.get('[name="payrollReference.typeAddressStudent"]').type('CARRERA')
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollReference.streetNumberStudent"]').type('45');

    cy.get('[name="payrollReference.prefixStudent"]').type('23');

    cy.get('[name="payrollReference.houseNumberStudent"]').type('1');

    cy.get('[name="payrollReference.cityStudent"]').type('SAN ZENON');
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollReference.infoResidenceParticular"]').type('De esquina');
 */
    cy.get('[name="buttonNextStep"]').click();
}