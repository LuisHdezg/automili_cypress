import {generarFechanacimmiento, generarTelefono, generarFechaAleatoriaa, generarIdentificacion, generarafiliacion, porcentajeBeneficiario} from '../funciones.cy'
import faker from 'faker'



describe("Validando Login de MILI Local", () => {
  it("Validando Inicio", () => {
    cy.visit("https://miliqa.miliv2.com/credits");



//Datos de entrada
cy.wait(3000)
    cy.get('[name="ctId"]').type("LIBRE INVERSION PLUS S2");
    cy.wait(1000);
    cy.get(".MuiAutocomplete-popper").click();
    cy.wait(2000);

    /* cy.get('[name="monto"]').click()
    cy.get('[name="vcDefVal"]').type('5000000') */


   /*  cy.get('input[name="slider2"]')
    cy.get('input[name="slider2"]').invoke('val', 10).trigger('input', {force:true})

    cy.wait(1000)
    cy.get('p#meses').should('have.text', '10 Meses') */



    /* cy.wait(15000) */
    /* cy.get('[name="idCode"]').type('SI');//Vendedor
    cy.wait(1000)
    cy.get(".MuiAutocomplete-popper").click();//CODIGO DEL VENDEDOR
    cy.get('[name="sSellerCode"]').type('1234567896', {force:true}) */


   /*  cy.get('[name="vcDefVal"]').click();
    cy.wait(2000);
    cy.get('[name="solicitar"]').click();
    cy.wait(1000); */


    //Modal de Cartera/Empresas-------------------------------------------------------------------------------------------------------

/* cy.get('[name="botoncartera1"]').click();
cy.wait(2000);  */

/* cy.wait(10000) */
cy.wait(2000);
const empresaAleatoria = faker.company.companyName();
cy.get('[name="creditCards.0.ccName"]').type(empresaAleatoria);
cy.get('[name="creditCards.0.ccFee"]').type('10000');
cy.get('[name="creditCards.0.ccBalance"]').type('150000');

cy.get('[data-testid="AddCircleIcon"]').click();
cy.wait(1000)

const empresaAleatoria1 = faker.company.companyName();
cy.get('[name="creditCards.1.ccName"]').type(empresaAleatoria1);
cy.get('[name="creditCards.1.ccFee"]').type('10000');
cy.get('[name="creditCards.1.ccBalance"]').type('150000');

cy.get('[data-testid="AddCircleIcon"]').click();
cy.wait(1000)

const empresaAleatoria2 = faker.company.companyName();
cy.get('[name="creditCards.2.ccName"]').type(empresaAleatoria2);
cy.get('[name="creditCards.2.ccFee"]').type('10000');
cy.get('[name="creditCards.2.ccBalance"]').type('150000');


/* cy.get('[id="registrarcartera"]').click(); */
cy.wait(2000);



//Registro de Cliente---------------------------------------------------------------------------------------------------------------


cy.wait(5000)
    cy.get('[name="payrollStaff.typeIdentity"]').type('CÉDULA DE CIUDADANÍA');//TIPO DE DOCUMENTO
    cy.get(".MuiAutocomplete-popper").click();

    cy.get('[name="payrollStaff.identification"]').type('1143462272');//IDENTIFICACION

    /* cy.get('[id="contenedorregistro"]').click();
    cy.wait(2000) */

    const fechaAleatoria = generarFechanacimmiento();//FECHA DE NACIMIENTO
    cy.get('[name="payrollStaff.birthDate"]').type(fechaAleatoria);


    cy.get('[name="payrollStaff.city"]').type('LOS PALMITOS');//LUGAR DE NACIMIENTO
    cy.get(".MuiAutocomplete-popper").click();

    cy.get('[name="payrollStaff.gender"]').type('MASCULINO');//GENERO
    cy.get(".MuiAutocomplete-popper").click();


    const telefonogeneralfijo = generarTelefono();//TELEFONO FIJO
    cy.get('[name="payrollStaff.landline"]').type(telefonogeneralfijo);

    const telefonogeneral = generarTelefono();//TELEFONO
    cy.get('[name="payrollStaff.cellPhone"]').type(telefonogeneral);


    /* const correoAleatorio = faker.internet.email();//CORREO */
    cy.get('[name="payrollStaff.email"]').type(/* correoAleatorio */"PRUEBASWOW@OUTLOOK.COM");


    cy.get('[name="payrollStaff.password"]').type('123456');//CONTRASEÑA
    cy.get('[name="payrollStaff.confirmPassword"]').type('123456');//REPETIR CONTRASEÑA


    const fechaAleatoria1 = generarFechaAleatoriaa();//FECHA DE EXPEDICION
    cy.get('[name="payrollStaff.expeditionDate"]').type(fechaAleatoria1);

    cy.get('[name="payrollStaff.expeditionPlace"]').type('BARANOA'); //LUGAR DE EXPEDICON
    cy.get('.MuiAutocomplete-popper').click();

    const  nombreAleatorio = faker.name.firstName();//PRIMER NOMBRE
    cy.get('[name="payrollStaff.firstName"]').type(nombreAleatorio);


    const segundonombreAleatorio = faker.name.firstName();//SEGUNDO NOMBRE
    cy.get('[name="payrollStaff.secondName"]').type(segundonombreAleatorio);


    const apellidoAleatorio = faker.name.lastName();//PRIMER APELLIDO
    cy.get('[name="payrollStaff.firstLastName"]').type(apellidoAleatorio);


    const segundoapellidoAleatorio = faker.name.lastName();//SEGUNDO APELLIDO
    cy.get('[name="payrollStaff.secondLastName"]').type(segundoapellidoAleatorio);


    const profesionAleatoria = faker.name.jobTitle();//CARGO
    cy.get('[name="payrollWork.position"]').type(profesionAleatoria);


    cy.get('[name="payrollWork.typeContract"]').type('INDEFINIDO');//TIPO DE CONTRATO
    cy.get('.MuiAutocomplete-popper').click();


    const fechacontratoAleatoria = generarFechaAleatoriaa();//FECHA DE INICIO DE CONTRATO
    cy.get('[name="payrollWork.contractStart"]').type(fechacontratoAleatoria);


    cy.get('[name="payrollWork.salary"]').type('10000000');//SALARIO
    cy.get('[name="payrollWork.net"]').type('10000000');//NETO


    cy.get('[name="payrollBank.typeAccount"]').type('AHORRO')//TIPO DE CUENTA
    cy.get('.MuiAutocomplete-popper').click();


    const cuentaAleatoria = generarIdentificacion();//CUENTA BANCARIA
    cy.get('[name="payrollBank.accountNumber"]').type(cuentaAleatoria)



    cy.get('[name="payrollBank.typeBank"]').type('BANCO DAVIVIENDA');//ENTIDAD BANCARIA
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollBank.typeBranch"]').type('EL CARMEN DE BOLIVAR');//SUCURSAL BANCARIA
    cy.get('.MuiAutocomplete-popper').click();

    //-----------------------------------------------------------------------------------------------------------------------------------

    cy.get('[name="payrollEconomyActivities.economyActivities"]').type('EMPLEADO');//ACTIVIDAD PRINCIPAL
    cy.get('.MuiAutocomplete-popper').click();


    const nombreEmpresa = faker.company.companyName();
    cy.get('[name="payrollEconomyActivities.peaCompanyName"]').type(nombreEmpresa)//NOMBRE DE LA EMPRESA

    const dirEmpresa = faker.address.streetAddress();
    cy.get('[name="payrollEconomyActivities.peaAddress"]').type(dirEmpresa);//DIRECCION DE LA EMPRESA


    cy.get('[name="payrollEconomyActivities.peaTypeCompany"]').type('PRIVADA');//TIPO DE EMPRESA
    cy.get('.MuiAutocomplete-popper').click();


    const telefonolaboral = generarTelefono();
    cy.get('[name="payrollEconomyActivities.peaWorkPhone"]').type(telefonolaboral);//TELEFONO LABORAL


    const correolaboral = faker.internet.email();
    cy.get('[name="payrollEconomyActivities.peaEmail"]').type(correolaboral);


    cy.get('[name="payrollEconomyActivities.department"]').type('QUINDÍO');//DEPARTAMENTO LABORAL
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollEconomyActivities.city"]').type('BUCARAMANGA');//CIUDAD LABORAL
    cy.get('.MuiAutocomplete-popper').click();

    const cargoactual = faker.name.jobTitle();//CARGO ACTUAL
    cy.get('[name="payrollEconomyActivities.peaPosition"]').type(cargoactual);


    cy.get('[name="payrollEconomyActivities.typeContract"]').type('INDEFINIDO');//TIPO CONTRATO
    cy.get('.MuiAutocomplete-popper').click();


    cy.get('[name="payrollEconomyActivities.peaAntiquity"]').type('15');//ANTIGUEDAD EN MESES


    cy.get('[name="payrollStaff.terCon"]').check();

    cy.wait(7000)

    /* cy.get('[name="siguiente"]').click(); */

//--------------------------------------------------------------------------------------------------------------------------------

    //Informacion general------------------------------------------------------------------------------------------

    cy.wait(13000)

    cy.get('[name="payrollResidence.psSons"]').type('SI'); //HIJOS
    cy.get('.MuiAutocomplete-popper').click();

    cy.wait(1000)

    cy.get('[name="payrollResidence.psWeight"]').type('70', {force:true})//PESO

    cy.wait(1000)

    cy.get('[name="payrollResidence.psHeight"]').type('1.70', {force:true})//ESTATURA

    cy.get('[name="payrollResidence.academicLevels"]').type('ESPECIALIZACIÓN');//NIVEL ACADEMICO
    cy.get('.MuiAutocomplete-popper').click();


    cy.get('[name="payrollResidence.maritalStatus"]').type('SOLTERO');//ESTADO CIVIL
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollWork.otherIncome"]').type('0',{force:true});//OTROS INGRESOS

    cy.get('[name="payrollWork.financialExpense"]').type('0',{force:true});//GASTOS PERSONALES

    cy.get('[name="payrollWork.personalExpense"]').type('0',{force:true});//GASTOS FINANCIEROS

    cy.get('[name="payrollWork.cCustomerActive"]').type('0',{force:true});//ACTIVO
    cy.get('[name="payrollWork.cCustomerPassive"]').type('0',{force:true});//PASIVO

    cy.get('[name="payrollWork.cCustomerCargoPublico"]').type('SI');//CARGO PULICO
    /* cy.wait(1000) */
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollWork.cCustomerRecPubl"]').type('SI');//RECONOCIMIENTO PUBLICO
    /* cy.wait(1000) */
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollWork.cCustomerRecPublEx"]').type('SI');//RELACION CON PERSONA PUBLICA
    /* cy.wait(1000) */
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollWork.cCustomerFFinCodigoCIIU"]').type('45000', {force:true});//CODIGO CIUU

    /* cy.wait(10000) */


    cy.get('[name="payrollWork.cCustomerManeRecPubl"]').type('NO');//RECURSOS PUBLICOS
    /* cy.wait(1000) */
    cy.get('.MuiAutocomplete-popper').click();



    //INFORMACION DE RESIDENCIA-------------------------------------------------------------------------------------------------------------------------------------------------

   /*  cy.get('[name="payrollResidence.typeHousing"]').type('FAMILIAR');//TIPO DE VIVIENDA */
    /* cy.get('.MuiAutocomplete-popper').click(); */


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


   /*  cy.get('[name="siguiente"]').click(); */



    //Referencia familiar-------------------------------------------------------------------------------------------------------------------------


    const  nombrefamiliarAleatorio = faker.name.firstName();//NOMBRE
    cy.get('[name="payrollReference.nameFamilyReference"]').type(nombrefamiliarAleatorio);


    const apellidofamiliarAleatorio = faker.name.lastName();//APELLIDO
    cy.get('[name="payrollReference.lastNameFamilyReference"]').type(apellidofamiliarAleatorio);


    cy.get('[name="payrollReference.relationShipsFamily"]').type('SOBRINO(A)')//RELACION FAMILIAR
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



    //Referencia Estudiantil

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
//---------------------------------------------------------------------------------------------------------------



/* cy.get('[name="siguiente"]').click(); */

//Beneficiarios--------------------------------------------------------------------------------------------------------------------------

cy.get('[name="payrollRelationships.0.rId"]').type('MADRE');//PARENTESCO
cy.get('.MuiAutocomplete-popper').click();

const nombreBeneficiario = faker.name.findName();//NOMBRE DE BENEFICIARIO
cy.get('[name="payrollRelationships.0.prName"]').type(nombreBeneficiario);

const porcentajeBeneficiario1 = porcentajeBeneficiario();//PORCENTAJE
cy.get('[name="payrollRelationships.0.prPercentage"]').type(porcentajeBeneficiario1);


cy.get('[id="bnbeneficiario"]').click();

cy.get('[name="payrollRelationships.1.rId"]').type('TIO(A)');//PARENTESCO
cy.get('.MuiAutocomplete-popper').click();

const generarNombreSinPuntos = () => {
  let nombreBeneficiario1 = faker.name.findName();

  // Verificar si el nombre contiene puntos y reemplazarlos con espacios
  while (nombreBeneficiario1.includes('.')) {
    nombreBeneficiario1 = faker.name.findName();
  }

  return nombreBeneficiario1;
};

const nombreBeneficiario12 = generarNombreSinPuntos();//NOMBRE DE BENEFICIARIO
cy.get('[name="payrollRelationships.1.prName"]').type(nombreBeneficiario12);

const porcentajeBeneficiario2 = porcentajeBeneficiario();//PORCENTAJE
cy.get('[name="payrollRelationships.1.prPercentage"]').type(porcentajeBeneficiario2);


cy.wait(5000);


    //Seguros de vida

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

    cy.get('[name="payrollLifeInsurance.ptName"]').type('2');//TIEMPO DE GESTACIÓN
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

    /* cy.get('[name="siguiente"]').click(); */


    //Informacion fianza, seguros del estado o colpensiones

    cy.wait(2000)

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

    /* cy.get('[name="siguiente"]').click(); */

    //Documentos---------------------------------------------------------------------------------------------------
    cy.wait(30000);
    /* cy.get('[name="siguiente"]').click(); */



    //Información de Codeudor----------------------------------------------------------------------------------------

    cy.get('[name="codeudor"]').click();
    cy.wait(2000);

    cy.get('[name="typeIdentity"]').type('CÉDULA DE CIUDADANÍA');//TIPO DE DOCUMENTO
    cy.wait(1000);
    cy.get('.MuiAutocomplete-popper').click();

    const idAleatorio = generarIdentificacion();//IDENTIFICACION
    cy.get('[name="identification"]').type(idAleatorio);



    const  fechaexpedicionAleatorio = generarFechaAleatoriaa();//FECHA DE EXPEDICION
    cy.get('[name="expeditionDate"]').type(fechaexpedicionAleatorio);



    const lugarexpedicionAleatorio = faker.address.city();//LUGAR DE EXPEDICION
    cy.get('[name="expeditionPlace"]').type(lugarexpedicionAleatorio);


    const  nombrecodeudorAleatorio = faker.name.firstName();//PRIMER NOMBRE
    cy.get('[name="firstName"]').type(nombrecodeudorAleatorio);


    const segundonombrecodeudorAleatorio = faker.name.firstName();//SEGUNDO NOMBRE
    cy.get('[name="secondName"]').type(segundonombrecodeudorAleatorio);


    const apellidocodeudorAleatorio = faker.name.lastName();//PRIMER APELLIDO
    cy.get('[name="firstLastName"]').type(apellidocodeudorAleatorio);


    const segundoapellidocodeudorAleatorio = faker.name.lastName();//SEGUNDO APELLIDO
    cy.get('[name="secondLastName"]').type(segundoapellidocodeudorAleatorio);


    const fechacodeudorAleatorio = generarFechanacimmiento();//FECHA DE APELLIDO
    cy.get('[name="birthDate"]').type(fechacodeudorAleatorio);


    const telefonocodeudorAleatorio = generarTelefono();//TELEFONO
    cy.get('[name="landline"]').type(telefonocodeudorAleatorio);


    const emailcodeudorAleatorio = faker.internet.email();//CORREO
    cy.get('[name="email"]').type(emailcodeudorAleatorio);


    cy.get('[name="gender"]').type('MASCULINO');//GENERO
    cy.get('.MuiAutocomplete-popper').click();


    cy.get('[name="city"]').type('SAHAGUN');//CIUDAD
    cy.get('.MuiAutocomplete-popper').click();


    cy.get('[name="typeAddress"]').type('VEREDA');//TIPO DE VIA
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="streetNumber"]').type('45');//NUMERO DE VIA

    cy.get('[name="prefix"]').type('23');//PREFIJO

    cy.get('[name="houseNumber"]').type('1');//CASA

    cy.get('[name="infoResidence"]').type('De esquina');//INFORMACION DE RESIDENCIA


    cy.get('[name="academicLevels"]').type('UNIVERSITARIO');//NIVEL ACADEMICO
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="maritalStatus"]').type('CASADO');//ESTADO CIVIL
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="typeHousing"]').type('FAMILIAR');//TIPO DE VIVIENDA
    cy.get('.MuiAutocomplete-popper').click();


    const empresaAleatorio = faker.company.companyName();//EMPRESA
    cy.get('[name="company"]').type(empresaAleatorio);


    const cargoAleatoria = faker.name.jobTitle();//CARGO
    cy.get('[name="position"]').type(cargoAleatoria);


    cy.get('[name="typeContract"]').type('INDEFINIDO');//TIPO DE CONTRATO
    cy.get('.MuiAutocomplete-popper').click();


    const fechacontratoAleatorio = generarFechaAleatoriaa();//FECHA INICIO DE CONTRATO
    cy.get('[name="contractStart"]').type(fechacontratoAleatorio);


    cy.get('[name="salary"]').type(10000000);//SALARIO


   /*  cy.wait(30000) */

    //SUBIR DOCUMENTOS

    /* cy.get('[name="crear"]').click();

    cy.wait(3000); */

//FUERA DEL MODAL PARA SOLICITAR EL CREDITO
    /* cy.get('[name="siguiente"]').click(); */



  });
});
