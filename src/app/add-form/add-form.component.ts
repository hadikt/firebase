import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent {

  productForm!:FormGroup
  constructor(private fb:FormBuilder, private hero:HeroService, private router:Router ){
    this.productForm=this.fb.group({
      title:['',[Validators.required]],
      desc:['',[Validators.required]],
      price:['',[Validators.required]],
    })
  }
addProduct(){
  const product = this.productForm.value;
  console.log(product);
  this.hero.addProduct(product).then((res)=>{
    if(res){
      alert('Data added successfully');
      this.productForm.reset();
      this.router.navigate([''])
    }else{
      console.log('data not added');
      
    }
  })
  
}
}
