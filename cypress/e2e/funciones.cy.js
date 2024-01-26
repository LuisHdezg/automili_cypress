import faker from "faker";

//Generar Nit
export const generarNIT = () => {
    const longitudNit = faker.random.number({ min: 10, max: 15 });
    let nit = "";

    for (let i = 0; i < longitudNit; i++) {
      nit += faker.random.number({ min: 0, max: 9 });
    }
    return `${nit}`;
};
//---------------------------------------------------------------------------

//Generar Telefono
export const generarTelefono = () => {
    const longitudTelefono = faker.random.number({ min: 10, max: 10 });
    let telefono = "";

    for (let i = 0; i < longitudTelefono; i++) {
      telefono += faker.random.number({ min: 0, max: 9 });
    }
    return `${telefono}`;
  };
//----------------------------------------------------------------------------

//Generar Identificacion
export const generarIdentificacion = () => {
    const longitudIdentificacion = faker.random.number({ min: 8, max: 10 });
    let identificacion = "";

    for (let i = 0; i < longitudIdentificacion; i++) {
      identificacion += faker.random.number({ min: 0, max: 9 });
    }
    return `${identificacion}`;
  };

//----------------------------------------------------------------------------

//Generar Numero de Camara
export const generarcamara = () => {
    const longitudCamara = faker.random.number({ min: 8, max: 10 });
    let camara = "";

    for (let i = 0; i < longitudCamara; i++) {
      camara += faker.random.number({ min: 0, max: 9 });
    }
    return `${camara}`;
  };

//----------------------------------------------------------------------------

//Generar Numero de Resolución
export const generarResolucion = () => {
  const longitudResolucion = faker.random.number({ min: 8, max: 10 });
  let resolucion = "";

  for (let i = 0; i < longitudResolucion; i++) {
    resolucion += faker.random.number({ min: 0, max: 9 });
  }
  return `${resolucion}`;
};

//--------------------------------------------------------------------------------
//Generar Numero de Libro
export const generarlibro = () => {
    const longitudLibro = faker.random.number({ min: 8, max: 10 });
    let libro = "";

    for (let i = 0; i < longitudLibro; i++) {
      libro += faker.random.number({ min: 0, max: 9 });
    }
    return `${libro}`;
  };

//----------------------------------------------------------------------------
//Generar Numero de afiliacion
export const generarafiliacion = () => {
  const longitudAfiliacion = faker.random.number({ min: 5, max: 8 });
  let afiliacion = "";

  for (let i = 0; i < longitudAfiliacion; i++) {
    afiliacion += faker.random.number({ min: 0, max: 9 });
  }
  return `${afiliacion}`;
};

//----------------------------------------------------------------------------
//Generar Fecha Aleatoria
export const generarFechaAleatoria = () => {
    const dia = faker.random.number({ min: 1, max: 31 }).toString().padStart(2, '0');
    const mes = faker.random.number({ min: 1, max: 12 }).toString().padStart(2, '0');
    const año = faker.random.number({ min: 1957, max: 2023 });

    return `${año}-${mes}-${dia}`;
  };

//----------------------------------------------------------------------------

export const generarFechaAleatoriaa = () => {
    const dia = faker.random.number({ min: 1, max: 31 }).toString().padStart(2, '0');
    const mes = faker.random.number({ min: 1, max: 12 }).toString().padStart(2, '0');
    const año = faker.random.number({ min: 2023, max: 2023 });

    return `${año}-${mes}-${dia}`;
  };


//-----------------------------------------------------------------------------------

export const generarFechanacimmiento = () => {
  const dia = faker.random.number({ min: 1, max: 31 }).toString().padStart(2, '0');
  const mes = faker.random.number({ min: 1, max: 12 }).toString().padStart(2, '0');
  const año = faker.random.number({ min: 1965, max: 2005 });

  return `${año}-${mes}-${dia}`;
};

//------------------------------------------------------------------------------

export const porcentajeBeneficiario = ()=>{

  const porcentaje = faker.random.number({ min: 1, max: 50 }).toString().padStart(2, '1');

  return `${porcentaje}`

}
