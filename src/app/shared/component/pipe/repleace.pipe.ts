import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})

export class ReplacePipe implements PipeTransform {

  //metodo para transformação(o nome ou valor da propriedade onde esta o pipe, é o caracterie que vc quer mudar, e o segundo é o valor pelo qual eu quero substituir o caracterie)
  transform(value: string, char: string, valueToReplace:string): any {
    return value.replace(char, valueToReplace);

  }
}
