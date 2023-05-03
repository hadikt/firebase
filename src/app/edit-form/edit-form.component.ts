import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';
import { Route, Router } from '@angular/router';
// import { HeroService } from '../hero.service';
@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent {
  productForm!:FormGroup
item: any;
  constructor(private fb:FormBuilder ,private hero:HeroService ,private router:Router){
    this.productForm=this.fb.group({
      title:['',[Validators.required]],
      desc:['',[Validators.required]],
      price:['',[Validators.required]],
    })
  }

ngOnInit(){
 this.getDataById();  
}
getDataById(){
let id=localStorage.getItem('doc_id')
this.hero.getproductById(id).then((data:any)=>{
  // console.log(data);
  this.productForm=this.fb.group ({
    title: data.title,
    desc: data.desc,
    price: data.price
  })

})
}

updateProduct(){
  const product = this.productForm.value;
  // console.log(product);
  let id = localStorage.getItem('doc_id')
  this.hero.updateProduct(id,product).then((res)=>{
    console.log(res);
    alert("data updated successfully")
    this.productForm.reset();
      this.router.navigate([''])
  })
  
}
}

