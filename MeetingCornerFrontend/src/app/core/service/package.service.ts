import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private Http: HttpClient) { }
  getAllPackages()  {
    return this.Http.get("/api/Meeting/GetAllPackages");//to be replaced by dotnet api 
  }
}
