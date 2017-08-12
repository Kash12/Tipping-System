import {  
    Injectable  
} from '@angular/core';  
import {  
    Http,  
    Headers,  
    RequestOptions,  
    Response  
} from '@angular/http';  
import {  
    Observable,  
    Subject  
} from 'rxjs/Rx';  
import 'rxjs/Rx'; //get everything from Rx    
import 'rxjs/add/operator/toPromise';  
import {  
    ILadder  
} from './ILadder';  
@Injectable()  
export class LadderService {  
    private jsonFileURL: string = "./public/ladder.json";  
    constructor(private http: Http) {}  
    //    
    getTeams(): Observable < ILadder[] > {  
        return this.http.get(this.jsonFileURL).map((response: Response) => {  
            return <ILadder[] > response.json()  
        }).catch(this.handleError);  
    }  
    //    
    private handleError(errorResponse: Response) {  
        console.log(errorResponse.statusText);  
        return Observable.throw(errorResponse.json().error || "Server error");  
    }  
}  