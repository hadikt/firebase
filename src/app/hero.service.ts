import { Injectable } from '@angular/core';
import { product } from './interface/product';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private fs:Firestore) { }

  addProduct(product:product){
  product.id=doc(collection(this.fs,'id')).id
  return addDoc(collection(this.fs,'product'),product)
  }


  getproduct():Observable<product[]>{
  let productref = collection(this.fs,'product')
  return collectionData(productref,{'idField':'doc_id'})as Observable<product[

  ]>
  }
   // getproductid
 async  getproductById(id:any):Promise<any>{
  let docref = doc(this.fs,"product",id)
  try{
    
 const docsnap = await getDoc(docref)
 if(docsnap.exists()){
  return docsnap.data()
 }else{
  console.log('document is missing');
  
 }
 
}
  catch(error){
console.log(error);

  }
 }
 updateProduct(id:any,product:any){
  let docref = doc(this.fs,'product',id)
  return updateDoc(docref,product)
 }

 deleteproduct(id:any){
let docref = doc(this.fs,'product',id)
return deleteDoc(docref)
 }
}
