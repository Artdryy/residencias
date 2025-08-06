import { catchError } from "../../helpers/catch.error.js";

class BaseService {
  // Constructor que recibe un repositorio
  // y lo asigna a una propiedad de la clase
  constructor(repository) {
    this.repository = repository;
  }

    // Métodos para manejar la lógica de negocio

    // Método para crear un nuevo registro
  async create(data) {
    // Utiliza el repositorio para crear un nuevo registro
    // y maneja errores con catchError
    const [result, error] = await catchError(this.repository.create(data));
    if (error) throw error;
    return result;
  }

  async getAll(params = {}) {
    const [result, error] = await catchError(this.repository.getAll(params));
    if (error) throw error;
    return result;
  }

  async update(data) {
    const [result, error] = await catchError(this.repository.update(data));
    if (error) throw error;
    return result;
  }

  async delete(data) {
    const [result, error] = await catchError(this.repository.delete(data));
    if (error) throw error;
    return result;
  }
}

export default BaseService;
