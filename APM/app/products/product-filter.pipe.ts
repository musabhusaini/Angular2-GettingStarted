import { Pipe, PipeTransform } from 'angular2/core';
import { IProduct } from './product';

@Pipe({
	name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
	transform(value: IProduct[], args: string[]): IProduct[] {
		if (!args[0]) {
			return value;
		}

		let filter: string = args[0].toLocaleLowerCase();
		return value.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filter) != -1);
	}
}