import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, retry } from 'rxjs';
import { PropertyOtherOffline } from './property-other-offline';
import { PropertyRegDetMain } from './property-reg-det-main';
import { JsonPipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class BhuiyanService {
  private apiUrl = 'http://localhost:3000/api/KhasraMaster/getAll'; //1
  private apiUrlByBasra = 'http://localhost:3000/api/KhasraMaster/getByBasraNo/';
  private apiUrlByIdMaster = 'http://localhost:3000/api/General/getByIdMaster/';
  private joinApiIdMaster = 'http://localhost:3000/api/join/getByIdMaster/';
  private insertDataOffline = 'http://localhost:3000/api/Proper_Owner_Det_Offline/insert';
  private getOwnerDetailByIdMasterapi = 'http://localhost:3000/api/join/getOwnerDetailByIdMaster/'
  private insertNewRegistrationPropertyDetail = 'http://localhost:3000/api/propeRegMain/insertNewPropertyRegistration/'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }) //2
  }

  constructor(private httpclient: HttpClient) { } //3

  getAllKhasraMaster(): Observable<any> {
    return this.httpclient.get(this.apiUrl) //4
  }
  getByBasraNo(Basra: String): Observable<any> {
    return this.httpclient.get(this.apiUrlByBasra + Basra)
  }

  getByIdMasterGeneral(IdMaster: number): Observable<any> {
    //  return this.httpclient.get(this.apiUrlByIdMaster + IdMaster)
    return this.httpclient.get(this.joinApiIdMaster + IdMaster)
  }
  insertPropOtherOFfline(PrastvirBhuSwami: PropertyOtherOffline): Observable<any> {
    return this.httpclient.post(this.insertDataOffline, JSON.stringify(PrastvirBhuSwami), this.httpOptions)
  }

  getOwnerDetailByIdMaster(IdMaster: number): Observable<any> {
    return this.httpclient.get(this.getOwnerDetailByIdMasterapi + IdMaster)
  }

  insertProperty_RegistrationDetail_Main(PropertyRegistMain: PropertyRegDetMain) {
    return this.httpclient.post(this.insertNewRegistrationPropertyDetail, JSON.stringify(PropertyRegistMain), this.httpOptions)
  }

}
