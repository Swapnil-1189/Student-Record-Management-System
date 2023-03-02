import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceExaService {

  

  constructor(private _http : HttpClient) { }

  postStudent(data:any)
  {
    return this._http.post<any>('http://localhost:3000/posts',data).pipe(map((resp:any)=> {
      return resp;
    }
    ))
  }

  getStudent()
  {
    return this._http.get<any>(' http://localhost:3000/posts').pipe(map((resp:any)=> {
      return resp}
    ))
  }

  updateStudent(data:any,id:number)
  {
    return this._http.put<any>(' http://localhost:3000/posts/'+id,data).pipe(map((resp:any)=> {
      return resp}
    ))
  }

  deleteStudent(id:number)
  {
    return this._http.delete<any>(' http://localhost:3000/posts/'+id).pipe(map((resp:any)=> {
      return resp}
    ))
  }
}
