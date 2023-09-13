import { Component } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeesService } from 'src/app/service/employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  employees: Employee[] = [];

  constructor(private employeesService: EmployeesService) {}

  async ngOnInit() {
    this.employees = await this.employeesService.getEmployees();
  }
}
