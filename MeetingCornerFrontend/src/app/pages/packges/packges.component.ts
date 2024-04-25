import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../core/service/package.service';

@Component({
  selector: 'app-packges',
  templateUrl: './packges.component.html',
  styleUrl: './packges.component.css'
})
export class PackgesComponent implements OnInit {
packagesArray:any[]=[];
packageObj={
  "packageId":0,
  "packageName":"",
  "packageCost":"",
  "packageDescription":"",
  "isPackageActive":false
}
isLoader:boolean=false;
constructor(private pkgservice: PackageService){

}
ngOnInit(): void {
  
  this.loadPackages();
}
loadPackages(){
  this.isLoader=true;
  this.pkgservice.getAllPackages().subscribe((res:any)=>{
    this.isLoader=false;
    this.packagesArray=res.data;
 
  })
}
createPackage(){
  this.pkgservice.addNewPackage(this.packageObj).subscribe((response:any)=>{
    if(response.Result){
      this.loadPackages();
      alert("Package Added!")
    }
    else{
      alert(response.Message)
    }
  })
}

editRecord(id:number){
this.pkgservice.getPackageById(id).subscribe((response:any)=>{
  if(response.Result){
    this.packageObj=response.data;
  }
  else{
    alert(response.Message)
  }
})
}

updatePackage(){
  this.pkgservice.updatePackage(this.packageObj).subscribe((response:any)=>{
    if(response.result){
      this.loadPackages();
      alert("Package Updated")
    }else{
      alert(response.Message)
    }
  })
}


}
