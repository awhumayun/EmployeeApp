import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeePositionComponent } from './components/employee-position/employee-position.component';
import { EmployeesServiceService } from './services/employees-service.service';

@NgModule({
  declarations: [AppComponent, EmployeeComponent, EmployeePositionComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [EmployeesServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
