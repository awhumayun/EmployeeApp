import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  baseURL = 'https://localhost:7117/Employees';

  constructor(private http: HttpClient) {}

  async getEmployees(): Promise<Employee[]> {
    let employees: Employee[] = [];

    await this.http
      .get<any>(this.baseURL)
      .toPromise()
      .then((data) => (employees = data));

    return employees;
  }
}
