import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError } from 'rxjs';
import { ToastService } from '../services/toast-service';
import { Router } from '@angular/router';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toast = inject(ToastService);
  const router = inject(Router);

  return next(req).pipe(
    catchError(error => {
      if (error) {
        switch (error.status) {
          case 400:
            toast.error(error.error);
            if (error.error.errors) {
              const modalStateErrors = [];
              for (const key in error.error.errors) {
                if (error.error.errors[key]) {
                  modalStateErrors.push(error.error.errors[key]);
                }
              } 
              throw modalStateErrors.flat();
            } else {
              toast.error(error.error);
            }
            break;
          case 401:
            toast.error("Unathorized");
            break;
          case 404:
            router.navigateByUrl("/not-found");
            break;
          case 500:
            toast.error("Server error");
            break;
          default:
            toast.error("The unexpected happened!");
            break;
        }
      }
      throw error;
    })
  )
};
