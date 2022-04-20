import { HttpClient,HttpEvent,HttpHandler,HttpInterceptor, HttpRequest } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router} from'@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService  implements HttpInterceptor {

  constructor(private http:HttpClient ,private router:Router) { }
  isShown: boolean = false ;


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let tokenizedReq =req.clone({
      setHeaders:{
        Authorization :'Bearer xx,yy,zz'
      }
    })
    return next.handle(tokenizedReq)




    // throw new Error('Method not implemented.');
  }

  message: any;
  inout: any;


  setMessage(data: any){
    this.message=data

  }
  getMessage(){
    return this.message
  }





    setInOut(data1: any){
    this.inout=data1
  }
  getInOut(){
    return this.inout
  }



  
  postEmployee(data :any){
    return this.http.post<any>("http://localhost:3000/employeeList/",data);
  }
  getEmployee(){
    return this.http.get<any>("http://localhost:3000/employeeList/");
  }

  putEmployee(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/employeeList/"+id,data);

  }
  deleteEmployee(id :number){
   return this.http.delete<any>("http://localhost:3000/employeeList/"+id);
  }
  



// loggedIn(){
//   return !!localStorage.getItem('token');
// }

//   logoutUser(){
//     this.router.navigate(['/login'])
//     localStorage.removeItem('token');
//   }



  // getToken(){
  //   return localStorage.getItem('token')
  // }

}
