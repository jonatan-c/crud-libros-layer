const createDTO = (libro) => {
  return {
    id: libro._id,
    titulo: libro.titulo,
    autor: libro.autor,
    editorial: libro.editorial,
    fecha: libro.fecha,
    precio: libro.precio,
    categoria: libro.categoria,
  };
};

const libroDTO = (libros) => {
  if (Array.isArray(libros)) {
    return libros.map((libro) => createDTO(libro));
  } else {
    return createDTO(libros);
  }
};

module.exports = { libroDTO };
// const single = (resource, authUser) => ({
//   id: resource._id,
//   username: resource.username,
//   email: resource.email,
// });

// const multiple = (resources, authUser) =>
//   resources.map((resource) => single(resource, authUser));

// module.exports = {
//   single,
//   multiple,
// };
