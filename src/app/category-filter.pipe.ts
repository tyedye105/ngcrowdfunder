import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'categoryFilter',
  pure: false
})
export class CategoryFilterPipe implements PipeTransform {

  transform(input: Project[], category){
    var output: Project[] = [];
    if( category === "all") {
      output = input
      return output
    } else {
    for (var i = 0; i < input.length; i++) {
      if (input[i].category === category ) {
        output.push(input[i]);
        }
      }
    }
    return output;
  }

}
