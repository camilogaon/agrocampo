import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivAdminService  {

  private isVisible: boolean = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  getVisibility(): boolean {
    return this.isVisible;
  }
}
