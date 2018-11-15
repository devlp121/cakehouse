import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectCount'
})
export class ObjectCountPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
