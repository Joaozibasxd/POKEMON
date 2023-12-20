import {ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {map, timer} from "rxjs";

export const homeResolver: ResolveFn<boolean> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>{
  return timer(500).pipe(map(() => true));
};
