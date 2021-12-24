const libroDAO = require("../libros/libroDAO");

module.exports = {
  async getLibros(libro) {
    return await libroDAO.getLibros(libro);
  },

  async getLibro(id) {
    return await libroDAO.getLibro(id);
  },

  async createLibro(libro) {
    return await libroDAO.createLibro(libro);
  },

  async updateLibro(id, libro) {
    return await libroDAO.updateLibro(id, libro);
  },

  async deleteLibro(id) {
    return await libroDAO.deleteLibro(id);
  },
};
