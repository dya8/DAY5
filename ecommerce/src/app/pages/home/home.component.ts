import { Component } from '@angular/core';
import { CardsComponent } from "../../ui/cards/cards.component";
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home',
  imports: [CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent 
{
  constructor(private api: ApiService) { }


  data: any
  ngOnInit() {
    this.api.getProducts().subscribe((res:any) => {
      this.data = res.products;
      console.log(this.data);
      
    });

}
}
