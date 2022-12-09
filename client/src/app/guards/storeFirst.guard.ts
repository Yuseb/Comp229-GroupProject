import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProductStoreComponent } from '../product-store/product-store.component';


@Injectable()
export class StoreFirstGuard
{
  private firstNavigation = true;

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
    if (this.firstNavigation)
    {
      this.firstNavigation = false;
      if (route.component !== ProductStoreComponent)
      {
        this.router.navigateByUrl('/');
        return false;
      }
    }
    return true;
  }
}
