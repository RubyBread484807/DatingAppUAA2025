import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: string): number {
    const today = new Date(); // 04/11/2025
    const birthDay = new Date(value); // 04/11/2000

    let age = today.getFullYear() - birthDay.getFullYear(); // 2025 - 2000 = 25
    const monthDiff = today.getMonth() - birthDay.getMonth(); // 11 - 11 = 0

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDay.getDate())) {
      // false || (true && false)
      age--;
    } 
  
    return age;
  }

}
