import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(text: string): string {
     if (!text) {
      return "";
    }else{
      let transformedText: string = text.split(" ").map(word => word[0].toLocaleUpperCase() + word.substring(1)).join(" ");
      return transformedText;
    }
  }

}
