import { Component } from '@angular/core';
     
@Component({
    selector: 'my-header',
    template: `
		<link rel="stylesheet" type="text/css" href="src/app/header/header.css">
    	<div class="header header-block">
    		<label class="header header-item">Home</label>
    		</div>
    	`
})

export class HeaderComponent {
}