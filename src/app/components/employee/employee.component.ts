import { Component } from '@angular/core';
import { EmployeesServiceService } from 'src/app/services/employees-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  employees: any;

  constructor(private employeesService: EmployeesServiceService) {}

  async ngOnInit() {
    this.employees = await this.employeesService.getEmployees();
    console.log(this.employees);
  }
}
