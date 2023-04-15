import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
    name: 'sortBy'
})

export class SortByPipe implements PipeTransform {
    transform(heroes: Hero[], orderBy ?: keyof Hero | null): Hero[] {
        if (!orderBy) {
            return heroes;
        }
        else {
            return heroes.sort((a, b) => {
                if (a[orderBy] > b[orderBy]) {
                    return 1;
                } else if (a[orderBy] < b[orderBy]) {
                    return -1;
                } else {
                    return 0;
                }
            });
        }
    }
}