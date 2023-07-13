import { ProductService } from './../product.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  propLegal = 'qualquer';

  constructor(
    private productService: ProductService,
    private router: Router,
    ) {  }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.showMenssage("Produto criado com sucesso!");
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
