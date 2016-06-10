import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import 'rxjs/Rx';	// Load all features.

import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductService } from './products/product.service';

@Component({
	selector: 'pm-app',
	templateUrl: 'app/app.component.html',
	directives: [ ROUTER_DIRECTIVES ],
	providers: [ ProductService, HTTP_PROVIDERS, ROUTER_PROVIDERS ]
})
@RouteConfig([
	{ path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
	{ path: '/products', name: 'Products', component: ProductListComponent },
	{ path: '/product/:id', name: 'ProductDetail', component: ProductDetailComponent }
])
export class AppComponent {
	pageTitle: string = 'Acme Product Management';
}