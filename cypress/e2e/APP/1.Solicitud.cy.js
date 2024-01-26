import{generarTelefono, generarFechaAleatoriaa, generarafiliacion, generarIdentificacion, generarFechanacimmiento, porcentajeBeneficiario}from '../funciones.cy'
import faker from 'faker'


describe('Registro de app', () => {

    it('Registrando usuario', () =>{
    cy.visit("https://appqa.miliv2.com/");

//------------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------Inicio de Sesion----------------------------------------------------------------------------------------------------------------------------

    cy.get('[data-testid="4e0bd032-4d48-43ea-8760-21e17c8b3975"]').click();
    cy.wait(1000)
    cy.get('[data-testid="1"]').click()


    cy.get('[data-testid="dc9b9c6c-6ce0-44e8-826d-dc3947f5ebc2"]').type('1143462281');

    cy.get('[data-testid="c7679544-0b38-4210-ba13-fa35c0d47903"]').type('123456');

    cy.get('[data-testid="19e19576-23fa-4695-a1e4-1a4be6f6d213"]').click();


//--------------------------------------------------------------------------------------------------------------------------------------------

    cy.get('[data-testid="721b4f41-7eb4-4526-a7a6-d426ffbc0543"]').click()//SOLICITAR
    cy.wait(3000)


    cy.get('[data-testid="EkIlYXl856LK6Itp7gdK79"]').click();//LINEA S2
    cy.wait(5000)

    /* cy.get('[tabindex="0"]').click() */


    /* cy.wait(7000) */


    cy.get('[data-testid="565f7f2c-45f7-4f41-ad9e-2fceff6ecb57"]').click()//SOLICITA TU CREDITO


    cy.wait(7000)


//-------------CUENTANOS SOBRE TI-------------------------------------------------------------------------------------------------------------------------
//------------------STEP 1--------------------------------------------------------------------------------------------------------------------------


    const fechaexpedicion = generarFechaAleatoriaa();
    cy.get('[data-testid="327aa03c-6426-47b5-b7b6-faab1e981e19"]').type(fechaexpedicion);//FECHA DE EXPEDICION


    cy.get('[data-testid="0f18e890-9471-11ee-9202-23123419631f"]').click();
    cy.get('[data-testid="CALAMAR"]').click();

    const fechanacimiento = generarFechanacimmiento();
    cy.get('[data-testid="d3c10cee-a225-451b-a9a8-fd9ec1f74c0f"]').type(fechanacimiento);//FECHA DE NACIMIENTO


    const numerofijo = generarTelefono();
    cy.get('[data-testid="67418a3b-3022-4a63-b83d-d584ce82f3e6"]').type(numerofijo);//TELEFONO FIJO



    cy.get('[data-testid="8aac29f3-413f-4d59-9736-618c52bac7cq"]').click()//CIUDAD DE NACIMIENTO
    cy.get('[data-testid="s4_dTPWx8FSyP4O6WOg6Z"]').click()



    cy.get('[data-testid="8aac29f3-413f-4d59-9736-618c52bacc9c"]').click();//GENERO
    cy.get('[data-testid="1"]').click();




    cy.get('[data-testid="4002c70a-d205-4c09-8266-504c02398eda"]').click();//CONTINUAR
    cy.wait(5000)


//------------INFORMACION PARA EL SEGURO--------------------------------------------------------------------------------------------------------------------------
//------------------STEP 1 1/2--------------------------------------------------------------------------------------------------------------------------


cy.get('[data-testid="edac617c-9db2-4e68-9b9e-623bba9d53e8"]').click();//TIPO DE PARENTESCO
cy.get('[data-testid="7"]').click();



const nombrecompleto = faker.name.findName();
cy.get('[data-testid="b7b4ed46-771e-495b-8f93-59950b4d4440"]').type(nombrecompleto)//NOMBRE COMPLETO


const procentajeb = porcentajeBeneficiario();//PORCENTAJE BENFEICIARIO
cy.get('[data-testid="fe44e812-9b04-4b14-b8a3-6c0e2187c9b70"]').type(procentajeb)

cy.wait(3000)

cy.get('[data-testid="efaaa039-e4c1-4442-8d33-05ada6527fbb"]').click();//CONTINUAR



//-----------------INFORMACION DE RESIDENCIA---------------------------------------------------------------------------------------------------------------------------
//------------------STEP 2--------------------------------------------------------------------------------------------------------------------------


cy.get('[data-testid="c4169ee0-06ba-434a-8d85-bc622ad03893"]').click();//CIUDAD
cy.get('[data-testid="1sXyG9Hg5nyMv5khReksA"]').click();


cy.get('[data-testid="4961f456-f90f-48e1-811b-c4fb49760786"]').click();//TIPO DE VIA
cy.get('[data-testid="2"]').click();


cy.get('[data-testid="17562340-4c3e-4f31-a5f6-6a7a598986c5"]').type("30")//N° DE VIA

cy.get('[data-testid="7698adde-9af0-47d5-8cf1-d30894a1511b"]').type("20")//NOMENCLATURA

cy.get('[data-testid="506441f4-6ab3-442f-857c-5274ff5eaa98"]').type("45")//NOMENCLATURA



cy.get('[data-testid="06dcabd3-2f20-4f2e-b41e-f6bad7fdfcb6"]').type("DE ESQUINA")//INFORMACION RESIDENCIAL


cy.get('[data-testid="614ff010-9474-11ee-b0cc-a90808db3a99"]').click();//ESTRATO
cy.get('[data-testid="4"]').click();


cy.get('[data-testid="ca893f54-fc1a-44dd-ac00-0e5a0ce32a0b"]').click()//CONTINUAR






//-----------------INFORMACION GENERAL---------------------------------------------------------------------------------------------------------------------------
//------------------STEP 3--------------------------------------------------------------------------------------------------------------------------

cy.wait(3000)

cy.get('[data-testid="da880ec0-950c-11ee-82a9-3dc99027d51b"]').click();//HIJOS
cy.get('[data-testid="2"]').click();



cy.get('[data-testid="a2a6ce03-e65a-4c6d-80ad-b13b5b188317"]').type('80')//PESO
cy.get('[data-testid="0f939df0-950d-11ee-b407-0f3304c89b6b"]').type("1.70")//ESTATURA


/* cy.get('[data-testid="ed3738a3-b92a-45fc-913f-f13ab902ca09"]').click();//TIPO DE VIVIENDA
cy.get('[data-testid="1"]').click(); */

cy.get('[data-testid="b4d2ea78-4497-4392-8faa-1e0fc399e199"]').click();//PERSONAS A CARGO
cy.get('[data-testid="2"]').click();

cy.get('[data-testid="d5c6fa8a-0b57-49a8-a623-561641150a44"]').click();//NIVEL ACADEMICO
cy.get('[data-testid="6"]').click();

cy.get('[data-testid="c8a786e9-dcd0-4fa7-894d-0081cc8cd46c"]').click();//ESTADO CIVIL
cy.get('[data-testid="1"]').click();

cy.get('[data-testid="c46f8d7c-7c23-41fc-b3a1-58dff0801ab7"]').click();//ENTIDAD BANCARIA
cy.get('[data-testid="15"]').click();

cy.get('[data-testid="0ac8647b-5a7f-4606-8a14-12e89d0861fa"]').click();//CIUDAD SUCURSAL
cy.get('[data-testid="N6GtYwcWgRc0aS2ugIX-4"]').click();

cy.get('[data-testid="8a5c2134-cd9b-4899-a835-2ef770663e9f"]').click();//TIPO DE CUENTA BANCARIA
cy.get('[data-testid="1"]').click();


const cuentabancaria = generarafiliacion();
cy.get('[data-testid="c576a9f3-fa54-4e8a-93a8-bf72a3724ba6"]').type(cuentabancaria)//N° DE CUENTA BANCARIA


cy.get('[data-testid="a87e6ffb-a29a-42be-b82d-87011a5d50af"]').type("1000")//ACTIVOS
cy.get('[data-testid="27cc8660-950e-11ee-b4de-e1121d618a2c"]').type("1000")//PASIVOS


cy.get('[data-testid="37234218-652e-470b-8951-e5bc7f1a1d00"]').click();//EJERCE CARGOS PUBLICOS
cy.get('[data-testid="1"]').click();

cy.get('[data-testid="c74913c0-950e-11ee-a6f6-9f9f0b11a297"]').click();//RECONOCIMIENTO PUBLICO
cy.get('[data-testid="2"]').click();

cy.get('[data-testid="9da1c72d-a3c0-45c0-836d-c74a455323ec"]').click();//PERSONA EXPUESTA PÚBLICA
cy.get('[data-testid="2"]').click();


cy.get('[data-testid="30ed0b6c-90e8-4032-ac63-324d841f26a2"]').type("45000")//CODIGO CIUU

cy.get('[data-testid="f7e2c9e0-950e-11ee-914b-4db0a973c8a9"]').click();//MANEJA RECURSOS PUBLICOS
cy.get('[data-testid="2"]').click();


cy.get('[data-testid="7f15bdc9-9c3a-40dd-b41f-3b8631e4c06b"]').type("1000")//OTROS INGRESOS
cy.get('[data-testid="eb193dab-2db9-4d49-8fa1-c8dfc4d35ca8"]').type("1000")//GASTOS FINANCIEROS
cy.get('[data-testid="74f99ae0-950e-11ee-b352-2f5b48fcd277"]').type("1000")//GASTOS PERSONALES



cy.get('[data-testid="f2e2d8fe-ab76-4059-be05-32f6409d6a60"]').click();//ACTIVIDAD PRINCIPAL
cy.get('[data-testid="ESTUDIANTE"]').click();


cy.get('[data-testid="ca6e5db0-9510-11ee-b66d-4536041e5971"]').type("MARACAIBO");//UNIVERSIDAD

cy.get('[data-testid="5bac5efa-514a-49e3-8efd-f43c820889c9"]').click();//ALGUN INGRESO
cy.get('[data-testid="2"]').click();




cy.get('[data-testid="181ec7bf-bafd-4301-b0e3-9977b42b77e4"]').click()//CONTINUAR


cy.wait(5000)


//-----------------INFORMACION DE REFERENCIAS---------------------------------------------------------------------------------------------------------------------------
//------------------STEP 4--------------------------------------------------------------------------------------------------------------------------

//REFERENCIA FAMILIAR-------------------------------------------------------------------------------------------------------------------------------------------------------

const nombref = faker.name.firstName();
cy.get('[data-testid="cde40be2-410c-4ab7-a538-f5e514b5f491"]').type(nombref);//NOMBRE

const apellidof = faker.name.lastName();
cy.get('[data-testid="cde40be3-410d-4ab7-a539-f5e514b5f492"]').type(apellidof);//APELLIDO


cy.get('[data-testid="a86405b0-985a-11ee-b16b-430dd7ebe2cd"]').click();
cy.get('[data-testid="IDHZdB5LXYOzqi9AnZkwI"]').click();//PARENTESCO


const telefonof = generarTelefono();
cy.get('[data-testid="2d0963ba-cea3-4d02-99a9-07a9a4d8cf34"]').type(telefonof);//TELEFONO


cy.get('[data-testid="258df270-f36d-4a93-9ac1-4fb5ff85e3c3"]').click();//CIUDAD
cy.get('[data-testid="N6GtYwcWgRc0aS2ugIX-4"]').click();

cy.get('[data-testid="ca649458-6dae-4d93-b00d-2b50237fd360"]').click();//BARRIO
cy.get('[data-testid="14"]').click();


cy.get('[data-testid="52f77db0-e832-4894-9507-a5d12f7ebe84"]').type("50");//DIRECCION
cy.get('[data-testid="6240f6a6-7e53-45a7-8553-74fd45be6dbe"]').type("20");//NUMERO
cy.get('[data-testid="2c61f937-20b2-47bb-82b7-9285fee06c8d"]').type("15");//CASA

cy.get('[data-testid="d2e6ac3e-8c36-4a49-ab64-9fb102112c3c"]').type("NINGUNA");//INFORMACION RESIDENCIAL



//REFERENCIA PARTICULAR-----------------------------------------------------------------------------------------------------------------------------------------------

const nombrep = faker.name.firstName();
cy.get('[data-testid="8f1bdab0-985a-11ee-8f30-453652e7b4d0"]').type(nombrep);

const apellidop = faker.name.lastName();
cy.get('[data-testid="97d83d19-5db4-4c8b-902c-e08e477c6769"]').type(apellidop);


const telefonop = generarTelefono();
cy.get('[data-testid="b0398907-acce-4879-8824-86a9a3bc1d7d"]').type(telefonop);


cy.get('[data-testid="05317c8d-6bb7-4282-9ef0-4bb11011d8d8"]').click();//CIUDAD
cy.get('[data-testid="8"]').click();

cy.get('[data-testid="ab61b4f5-e3cf-46e1-959c-d1902afb8540"]').click();//TIPO DE VIA
cy.get('[data-testid="14"]').click();

cy.get('[data-testid="46548d58-419f-4839-b661-43fe24fcdffb"]').type("20");
cy.get('[data-testid="0981c95c-2053-4de3-8672-0f7c3c8cb812"]').type("90");
cy.get('[data-testid="61eb21d9-16dd-4f0a-97bf-82b92e55d418"]').type("60");

cy.get('[data-testid="326c62ec-7f4c-43d0-bea4-b31aeb506f45"]').type("NINGUNA");


//REFERENCIA ESTUDIANTIL-----------------------------------------------------------------------------------------------------------------------------------------------


cy.get('[data-testid="f2374940-9517-11ee-8bf2-8f77b423a5e5"]').click();
cy.get('[data-testid="1"]').click();//


const idestudiantil = generarIdentificacion();//
cy.get('[data-testid="1b1fee96-85bd-466f-bb4b-32137255fc95"]').type(idestudiantil);


const nombree = faker.name.firstName();//
cy.get('[data-testid="c1a98490-9518-11ee-8165-f9ca7b08435c"]').type(nombree);


const apellidoe = faker.name.lastName();//
cy.get('[data-testid="e656f6cf-24a4-4802-b751-e436a6bc4d1d"]').type(apellidoe);


cy.get('[data-testid="cbb8e570-9518-11ee-8182-81d19edb7afd"]').click()
cy.get('[data-testid="1"]').click();//GENERO


const telefonoE = generarTelefono();
cy.get('[data-testid="9b668f31-66ef-457e-9502-2d83782913b8"]').type(telefonoE);//NUMERO DE TELEFONO


const correoAleatorioe = faker.internet.email();//CORREO
cy.get('[data-testid="d79a4730-9518-11ee-885f-ff2729d4c4a7"]').type(correoAleatorioe);


const facultade = faker.name.jobTitle();
cy.get('[data-testid="54dade49-a942-4958-9201-9a90557a89c4"]').type(facultade);//FACULTAD


cy.get('[data-testid="e4bd50b0-9518-11ee-b474-55446f9114af"]').click()
cy.get('[data-testid="N6GtYwcWgRc0aS2ugIX-4"]').click();//CIUDAD


cy.get('[data-testid="12dbdb0a-d723-4e58-ade4-c3da0746964c"]').click()
cy.get('[data-testid="2"]').click();//TIPO DE VIA


cy.get('[data-testid="ee41afa0-9518-11ee-91aa-dd953b8f555b"]').type("21");//DIR 1
cy.get('[data-testid="e86b458e-be49-4209-a7c7-f610b669d2af"]').type("14");//DIR 2
cy.get('[data-testid="f79e8960-9518-11ee-9da4-29f96b09e52b"]').type("24");//DIR 3


cy.get('[data-testid="5a63771e-c0d4-4f0d-a257-184d01c249b2"]').type("NINGUNA");//INFORMACION ADICIONAL


cy.get('[data-testid="921ae5eb-1de3-4e45-b2dd-e49ff3b8461f"]').click();//CONTINUAR
cy.wait(3000)


//-----------------SEGURO DE VIDA---------------------------------------------------------------------------------------------------------------------------
//------------------STEP 4 1/2--------------------------------------------------------------------------------------------------------------------------


cy.get('[data-testid="54fbd570-951b-11ee-8415-0d454077741b"]').click()
cy.get('[data-testid="2"]').click();//CANCER


cy.get('[data-testid="61ac4700-951b-11ee-9d03-13a7a1912283"]').click()
cy.get('[data-testid="2"]').click();//SIDA


cy.get('[data-testid="831aa658-b481-4bd7-981c-101875d5104f"]').click()
cy.get('[data-testid="2"]').click();//ACCIDENTE CEREBROVASCULAR


cy.get('[data-testid="9ab15cb4-94d0-473d-af0c-6a8a0b9d2518"]').click()
cy.get('[data-testid="2"]').click();//HIPERTENSION ARTERIAL


cy.get('[data-testid="6f297e70-951b-11ee-b1a3-cd39ab11661c"]').click()
cy.get('[data-testid="2"]').click();//DIABETES


cy.get('[data-testid="54c5a5f2-d4e4-46fa-abfa-1915c19877a0"]').click()
cy.get('[data-testid="2"]').click();//ENFERMEDADES DE LAS ARTERIAS CORONARIAS


cy.get('[data-testid="d118c0a0-951b-11ee-9bae-2fce1fdda825"]').click()
cy.get('[data-testid="2"]').click();//INFARTO


cy.get('[data-testid="991cdc8c-a8ba-4fa9-b376-34455d21478a"]').click()
cy.get('[data-testid="2"]').click();//Tiene alguna limitación física o mental


cy.get('[data-testid="dd737110-951b-11ee-bde5-933ed14d0f52"]').click()
cy.get('[data-testid="2"]').click();//Le han diagnosticado o tratado alguna enfermEDAD



const fechadiagnostico = generarFechaAleatoriaa();
cy.get('[data-testid="327aa03c-6426-47b5-b7b6-faab1e981e19"]').type(fechadiagnostico);//FECHA DE DIAGNOSTICO



cy.get('[data-testid="2524a678-651c-46a7-b851-4e139e971378"]').type("ANALGESICOS");//TRATAMIENTO
cy.get('[data-testid="e937d4f0-951b-11ee-9653-d93811e76659"]').type("ESTABLE");//ESTADO ACTUAL


cy.get('[data-testid="cabeee08-41d4-41fe-8f4c-8b22a8c2155a"]').click()
cy.get('[data-testid="2"]').click();//EMBARAZDA

cy.get('[data-testid="f88d75e0-951b-11ee-a02d-c54912905039"]').click()
cy.get('[data-testid="2"]').click();//PRIMIGESTANTE

cy.get('[data-testid="be79b900-1a73-4ee4-9659-0e60a5dc6744"]').click()
cy.get('[data-testid="1"]').click();//TIEMPO DE GESTACION

cy.get('[data-testid="02683230-951c-11ee-88bf-b3288ad2718b"]').click()
cy.get('[data-testid="2"]').click();//ERES PENSIONADO

cy.get('[data-testid="41b2b2e3-15b3-44e4-b644-9b2cc8c6813c"]').click()
cy.get('[data-testid="2"]').click();//CONSUME BEBIDADS ALCOHOLICAS

cy.get('[data-testid="0b6ab6f0-951c-11ee-a8bd-c74db45df4a9"]').type("COLICOS");//NOMBRE DE LA ENFERMEDAD
cy.get('[data-testid="7c8d3ca2-f4f6-435a-8b80-2cee24164312"]').type("DOLORES DE CABEZA");//SECUELAS
cy.get('[data-testid="159f5310-951c-11ee-83da-294e082a5025"]').type("NINGUNA");//OBSERVACIONES
cy.get('[data-testid="c05d5e2f-ad52-4586-976f-95d3cc3e6b0a"]').type("PSICOLOGIA");//TRATAMIENTO ACTUAL
cy.get('[data-testid="1d9d3910-951c-11ee-abd4-39b4afd10174"]').type("CALMANTES");//TRAMIENTOS MEDICOS


cy.get('[data-testid="181ec7bf-bafd-4301-b0e3-9977b42b77e4"]').click();//CONTINUAR



//-----------------SEGURO DEL ESTADO O COLPENSIONES---------------------------------------------------------------------------------------------------------------------------
//------------------STEP 5--------------------------------------------------------------------------------------------------------------------------


const nafiliacion = generarafiliacion();
cy.get('[data-testid="6217d2b0-951e-11ee-8349-c17838d7fed7"]').type(nafiliacion, {force:true});

cy.get('[data-testid="6b31f390-951d-11ee-8c7b-33a801a13b69"]').click();//Nacionalidad
cy.get('[data-testid="2"]').click();

cy.get('[data-testid="4ca40353-9626-478f-99f1-d90ca40dd5dc"]').click();//Fondos a cuentas
cy.get('[data-testid="2"]').click();

cy.get('[data-testid="78b4d050-951d-11ee-8965-514d2b3bc688"]').click();//Ingresos
cy.get('[data-testid="2"]').click();

cy.get('[data-testid="b2fb35eb-8a86-43a4-8c81-0e7d41f1f00d"]').click();//Tarjeta americana
cy.get('[data-testid="2"]').click();

cy.get('[data-testid="846277e0-951d-11ee-8642-19ddd2307b7e"]').click();//Nacio en estados unidos
cy.get('[data-testid="2"]').click();

cy.get('[data-testid="4c6569b3-1de8-4c33-9701-1507a4f93457"]').click();//Vivio en estados unidos
cy.get('[data-testid="2"]').click();

cy.get('[data-testid="90f3a1a0-951d-11ee-882a-1b0e7bb0d3d9"]').click();//Moneda Extranjera
cy.get('[data-testid="2"]').click();

cy.get('[data-testid="f6cf4b39-5752-4599-9866-b84d352f8652"]').click();//Siguientes Actividades
cy.get('[data-testid="IMPORTACIONES"]').click();

cy.get('[data-testid="9f687f80-951d-11ee-ac32-b36e81bdbaa1"]').click();//Obligaciones tributarias
cy.get('[data-testid="2"]').click();

cy.get('[data-testid="f375969e-ad73-4f7d-a02b-f7cd38fbcae9"]').click();//Profesion
cy.get('[data-testid="1"]').click();

cy.get('[data-testid="ab075a00-951d-11ee-a61e-b9152f695665"]').type("INGENIERO DE SISTEMAS");//Especifique profesion

cy.get('[data-testid="0abb514b-9acf-436c-a647-78ba70b217f9"]').click();////Informacion suministrada
cy.get('[data-testid="2"]').click();

cy.get('[data-testid="b48db4c0-951d-11ee-8701-89ad28db7d67"]').click();//Recursos del contrato
cy.get('[data-testid="2"]').click();

cy.get('[data-testid="470b07a4-a040-4d20-893f-0f21296b19a2"]').click();//Declarado judicialmente
cy.get('[data-testid="2"]').click();

cy.get('[data-testid="e930781f-024f-41a9-bebf-e5a7a4055ddd"]').click();//Declaraciones en documentos
cy.get('[data-testid="2"]').click();

cy.get('[data-testid="e930781f-024f-41a9-bebf-e5a7a4055ddd"]').click();//Leido y entendido el documento
cy.get('[data-testid="1"]').click();


cy.get('[data-testid="b6fa5d8c-331e-4fc8-9562-f774b65ee39f"]').type('10000000');//Solicitud de incremento
cy.get('[data-testid="d2fd4d30-951d-11ee-8ae0-3d87b0eccdca"]').type('10000000');//Valor de prima


cy.get('[data-testid="cb9eb470-951d-11ee-ad45-0d35a37d2157"]').click();//Peligro su vida
cy.get('[data-testid="1"]').click();

cy.get('[data-testid="e11b7f90-951d-11ee-abf9-b1890474be12"]').type('ACCIDENTE VIAL');//ESPECIFIQUE EL PELIGRO


cy.get('[data-testid="9861734e-5d92-4d11-9e19-eb4c4c40d6cc"]').click();//Algun medicamento
cy.get('[data-testid="1"]').click();

cy.get('[data-testid="8b5007fb-f676-4e0e-ad28-b2719b7447df"]').type('NAPROXENO');//Especifique medicamentos



cy.get('[data-testid="24061540-951e-11ee-9881-ffaf7ac7af5c"]').type('SANITAS');
cy.get('[data-testid="b7548920-cdcd-4357-a847-6185e8f6aee8"]').type('COOMEVA');


cy.get('[data-testid="33149b10-951e-11ee-950a-e1004ac2f55d"]').click();//Fuma o consume
cy.get('[data-testid="1"]').click();


cy.get('[data-testid="bbd0efd2-087a-49e0-aae0-56c36672abe9"]').type('CIGARRILLO');//ESPECIFIQUE


cy.get('[data-testid="181ec7bf-bafd-4301-b0e3-9977b42b77e4"]').click()//Continuar


cy.wait(38000)



//-----------------DOCUMENTOS---------------------------------------------------------------------------------------------------------------------------
//------------------STEP 5--------------------------------------------------------------------------------------------------------------------------


cy.get('[data-testid="74811d9a-0d37-42ae-8618-8f4e1f96d6a6"]').click()//Continuar

})
})