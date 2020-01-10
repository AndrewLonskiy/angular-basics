import { Pipe, PipeTransform } from '@angular/core';
import {Post} from "../app.component";

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(postsNew: Post[], search: string = '', field: string = 'title'): Post[] {
    if (!search.trim()) {
      return postsNew
    }

    return postsNew.filter(post => {
      return post[field].toLowerCase().includes(search.toLowerCase())
    })
  }

}
