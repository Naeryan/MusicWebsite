import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HeaderComponent }   from './header.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ HeaderComponent ],
    bootstrap:    [ HeaderComponent ]
})
export class HeaderModule { }