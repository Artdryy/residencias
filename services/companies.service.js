import CompaniesRepository from '../repositories/companies.repository.js';
import { catchError } from '../helpers/catch.error.js';

class CompaniesService {
  async createCompany(data) {
    const [result, error] = await catchError(CompaniesRepository.createCompany(data));
    if (error) throw error;
    return result;
  }

  async getCompanies() {
    const [result, error] = await catchError(CompaniesRepository.getCompanies());
    if (error) throw error;
    return result;
  }

  async updateCompany(data) {
    const [result, error] = await catchError(CompaniesRepository.updateCompany(data));
    if (error) throw error;
    return result;
  }

  async deleteCompany(data) {
    const [result, error] = await catchError(CompaniesRepository.deleteCompany(data));
    if (error) throw error;
    return result;
  }
}

export default new CompaniesService();
