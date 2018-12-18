import { Restaurant } from "./restaurant/restaurant.model";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import  {MEAT_API} from "../app.api"

@Injectable()
export class RestaurantsService{
    constructor(private http: Http){}
    
    restaurants(): Observable<Restaurant[]> {
      return this.http.get(`${MEAT_API}/retaurants`)
      .subscribe(Response = Response.json());
    }
}