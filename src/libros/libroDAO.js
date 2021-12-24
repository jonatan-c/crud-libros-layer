const libroModel = require("../libros/libro.model");

module.exports = {
  async getLibros(libro) {
    const libros = await libroModel.find(libro);
    return libros;
  },

  async getLibro(id) {
    const libro = await libroModel.findById(id);
    return libro;
  },

  async createLibro(libro) {
    const libroCreated = await libroModel.create(libro);
    return libroCreated;
  },

  async updateLibro(id, libro) {
    const libroUpdated = await libroModel.findByIdAndUpdate(id, libro);
    return libroUpdated;
  },

  async deleteLibro(id) {
    const libroDeleted = await libroModel.findByIdAndDelete(id);
    return libroDeleted;
  },
};
