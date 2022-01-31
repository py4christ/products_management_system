import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padding'
})
export class PaddingPipe implements PipeTransform {

  transform(id: any, pads: number): any {
      let text = id.toString().padStart(pads, 0);
      return text;
    }

  }


