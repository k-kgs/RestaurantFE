import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {restaurant} from '../../../../interfaces/interface'
@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  message:any;
  constructor(private http: HttpClient) { }
  authenticateAdmin(obj:any){
    let url = environment.API_ENDPOINT + "/getAdminDetails";
    return this.http.post(url, obj);
  }

}
