import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import {Directive, HostListener, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  data: any;
  router: any;
  navbarDash: any;
  drop: any;
  mySidenav: any;

  constructor(public shared:ApiService,private el: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit(): void {
    this.data = this.shared.getInOut()

  }


  isShown: boolean = false ;
  // menuVarriable:boolean= false;
  // menu_icon_varriable:boolean=false;
  // data:string="Login signup";


  // loginToggel(){
    
  //   this.isShown = ! this.isShown;

  // }

  // logoutToggel(){
  //   this.isShown = ! this.isShown;
  // }

  // loginToggel(){
   
  //   // if(localStorage.)
  //   this.isShown = ! this.isShown;

  // }

  // logoutToggel(){
  //   this.isShown = ! this.isShown;
  // }



  // logout(){
  //   localStorage.removeItem('user');
  //   this.isShown = ! this.isShown;
  // }

  menuVarriable:boolean= false;
  menu_icon_varriable:boolean=false;
  
  openMenu(){
    this.menuVarriable =! this.menuVarriable;
    this.menu_icon_varriable=!this.menu_icon_varriable;
  }






  status(){
    if(localStorage.getItem("user") === null){
      this.isShown = false ;
      localStorage.removeItem('user');

    }else{
      this.isShown= true;
    }
  }


  aboutus(){
    // Navigate silently to /view
this.router.navigate(['/aboutus'], { skipLocationChange: true });
  }



  //component code

openNav() {
    // document.getElementById("mySidenav").style.width = "250px";
   this.mySidenav.style.width = "250px";
  }
  
closeNav() {
    // document.getElementById("mySidenav").style.width = "0";
  this.mySidenav.style.width = "0";
  }
  
}
