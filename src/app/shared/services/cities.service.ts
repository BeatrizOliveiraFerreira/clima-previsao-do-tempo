import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as jsSearch from 'js-search';

import { CityTypeaheadItem } from '../models/city-typeahead-item.model';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) {
  }

  getCities(query: string): Observable<CityTypeaheadItem[]> {
    return this.http.get<CityTypeaheadItem[]>('assets/db/cities.json');   }


// http://openweathermap.org/img/wn/${this.weather.icon}@2x.png

// return this.httpClient.get<Course[]>('https://jsonplaceholder.typicode.com/posts');   }



//   return this.http.get<{country: string}[]>('assets/db/cities.json')
// .pipe(
//   map(cities => {
//     const search = new jsSearch.Search('geonameid');
//     search.addIndex('country');
//     search.addIndex('name');
//     search.addDocuments(cities);
//     return search.search(query);
//   }),
// );
// }
// }

}


