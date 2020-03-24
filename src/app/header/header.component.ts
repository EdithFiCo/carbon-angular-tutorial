import { Component, OnInit, HostBinding } from '@angular/core';





@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
// @HostBinding('class.bx--header') headerClass = true;
export class HeaderComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
