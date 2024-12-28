import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
// my-navbar.component.ts
/*import { Component } from '@angular/core';

@Component({
  selector: 'app-my-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuOpen: boolean = false;
  cartOpen: boolean = false;
  userMenuOpen: boolean = false;

  // Toggle mobile menu
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Toggle dropdowns
  toggleDropdown(type: string) {
    if (type === 'cart') {
      this.cartOpen = !this.cartOpen;
      this.userMenuOpen = false; // Close other dropdown
    } else if (type === 'user') {
      this.userMenuOpen = !this.userMenuOpen;
      this.cartOpen = false; // Close other dropdown
    }
  }

  // Remove item from cart
  removeCartItem(itemId: number) {
    console.log(`Removing item with ID: ${itemId}`);
    // Logic to remove the item from your cart state
  }
}
*/
