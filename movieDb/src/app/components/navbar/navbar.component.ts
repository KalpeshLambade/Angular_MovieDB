import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isMobileSearchOpen = false;
  searchTerm = ''


  constructor(private router:Router){

  }
  ngOnInit(){

  }
  
  toggleMobileSearch() {
    this.isMobileSearchOpen = !this.isMobileSearchOpen;
  }

  onSearchTermChange(newSearchTerm: string) {
    this.searchTerm = newSearchTerm
    this.router.navigate(['/search'],
    {
      queryParams : {"movie_name" : this.searchTerm}
    });
  }


}
