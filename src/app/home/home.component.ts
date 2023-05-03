import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';
import { product } from '../interface/product';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products!:product[];
  
  constructor(private router:Router, private hero
    :HeroService){}
    ngOnInit(){
      this.getproduct()
    }
getproduct(){
  this.hero.getproduct().subscribe((data:product[])=>{
    this.products=data
  })
}

  addproduct(){
  this.router.navigate(['/addform'])
  }
  editproduct(id:any){
    console.log(id);
    localStorage.setItem('doc_id',id)
    
    this.router.navigate(['/editform'])
  }
  deleteproduct(id:any){
   let okconfirm = confirm("Are you sure")
   if(okconfirm){
    this.hero.deleteproduct(id)
   }
  }
}
