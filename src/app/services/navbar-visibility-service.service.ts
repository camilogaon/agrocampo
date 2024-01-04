import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarVisibilityServiceService {

  private isVisible: boolean = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  getVisibility(): boolean {
    return this.isVisible;
  }
  constructor() { }
}
