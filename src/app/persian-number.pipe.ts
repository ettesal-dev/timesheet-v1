import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'persianNumber'
})
export class PersianNumberPipe implements PipeTransform {

  transform(value: any): any {
    if (typeof value === 'number') {
      return value.toString().replace(/\d/g, function (match) {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return persianDigits[parseInt(match)];
      });
    }
    return value;
  }

}
