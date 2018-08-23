import {Component} from '@angular/core';

import {Recipe} from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
  })

export class RecipeListComponent{
recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'This is simply test', 'https://ugc.kn3.net/i/origin/http://puraenergia.dinta.cl/wp-content/uploads/post-14-dieciocho-de-septiembre-02.jpg'),
  new Recipe('A Test Recipe', 'This is simply test', 'https://ugc.kn3.net/i/origin/http://puraenergia.dinta.cl/wp-content/uploads/post-14-dieciocho-de-septiembre-02.jpg')

];

}
