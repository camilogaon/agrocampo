import { Component } from '@angular/core';
import { ActivAdminService } from './services/activ-admin.service';
import { NavbarVisibilityServiceService } from './services/navbar-visibility-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public navbarVisibilityService: NavbarVisibilityServiceService) {}
}
