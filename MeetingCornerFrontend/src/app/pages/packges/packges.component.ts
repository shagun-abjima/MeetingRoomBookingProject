import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../core/service/package.service';

@Component({
  selector: 'app-packges',
  templateUrl: './packges.component.html',
  styleUrl: './packges.component.css'
})
export class PackgesComponent implements OnInit {
packagesArray:any[]=[];
constructor(private pkgservice: PackageService){

}
ngOnInit(): void {
  
  this.loadPackages();
}
loadPackages(){
  this.pkgservice.getAllPackages().subscribe((res:any)=>{
    this.packagesArray=res.data;

  })
}
}
