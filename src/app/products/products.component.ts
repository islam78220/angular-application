import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,

  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  public products :any;
public Keyword:string ="";

  constructor() {
  }
  ngOnInit() {
    this.products=[

        {"id" :1,"name":"computer","price":4300 },
        {"id" :2,"name":"phone","price":1222 },
        {"id" :3,"name":"airpods","price":1342 }

      ];


  }


  deleteProduct(p: any) {
    let index = this.products.indexOf(p);
    this.products.splice(index,1);

  }

  search() {
    let result=[];
    for(let p of this.products){
      if(p.name.includes(this.Keyword)){
        result.push(p);

      }
    }
this.products =result;
  }
}
