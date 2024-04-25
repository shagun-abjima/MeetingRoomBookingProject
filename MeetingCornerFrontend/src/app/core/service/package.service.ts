import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private Http: HttpClient) { }
  getAllPackages()  {
    return this.Http.get("https://onlinetestapi.gerasim.in/api/Meeting/GetAllPackages");//to be replaced by dotnet api 
  }
  addNewPackage(obj:any){
    return this.Http.post("https://onlinetestapi.gerasim.in/api/Meeting/createPackage",obj);
  }
  getPackageById(packageId:number){
    return this.Http.get("https://onlinetestapi.gerasim.in/api/Meeting/GetPackgeById?id="+packageId)
  }
  updatePackage(obj:any){
    return this.Http.post("https://onlinetestapi.gerasim.in/api/Meeting/updatePackage",obj)
  }
}
