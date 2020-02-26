

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = sessionStorage.getItem('token');
    console.log('holi', req.url);
    console.log('holiiii', req.url.search('/login'));
    if (req.url.search('/login') === -1) {
      req = req.clone({
        // headers: req.headers.set('Authorization', 'Bearer ' + token)
      });
    }
    return next.handle(req);
  }

}
