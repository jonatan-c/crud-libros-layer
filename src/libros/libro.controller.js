const libroService = require("../libros/libro.service");
const { libroDTO } = require("../libros/libroDTO");

module.exports = {
  async getLibros(req, res) {
    const libro = await libroService.getLibros(req.body);
    return res.send(libroDTO(libro));
  },

  async getLibro(req, res) {
    const libro = await libroService.getLibro(req.params.id);

    if (!libro) return res.status(404).send("El libro no existe");

    return res.send(libroDTO(libro));
  },

  async createLibro(req, res) {
    if (!req.body.titulo) return res.status(400).send("El titulo es requerido");
    if (!req.body.autor) return res.status(400).send("El autor es requerido");
    if (!req.body.editorial)
      return res.status(400).send("La editorial es requerida");
    if (!req.body.fecha) return res.status(400).send("La fecha es requerida");
    if (!req.body.precio) return res.status(400).send("El precio es requerido");
    if (!req.body.categoria)
      return res.status(400).send("La categoria es requerida");

    const libro = await libroService.createLibro(req.body);

    return res.send(libroDTO(libro));
  },

  async updateLibro(req, res) {
    if (!req.params.id) {
      return res.status(400).send("El id no existe");
    }
    const libro = await libroService.updateLibro(req.params.id, req.body);

    return res.send("Libro actualizado");
  },

  async deleteLibro(req, res) {
    if (!req.params.id) {
      return res.status(400).send("El id no existe");
    }
    const libro = await libroService.deleteLibro(req.params.id);
    if (!libro) {
      return res.status(404).send("El libro no existe");
    } else {
      return res.send("Libro eliminado");
    }
  },
};
