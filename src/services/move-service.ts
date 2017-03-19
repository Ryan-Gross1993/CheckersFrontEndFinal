import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MoveService {
    public data: any;
    responseData: any = [{}];
    private url: string = "https://warm-spire-37520.herokuapp.com/playerMove/";
    private initUrl: string = "https://warm-spire-37520.herokuapp.com/newGame/";

      initialState:any ;

    constructor(private http: Http){
    }

    getInitialState(){
        return this.http.get(this.initUrl);
    }

    submitMove(firstCoordinate: string, secondCoordinate: string) {

        this.data = {
            "firstCoordinate": firstCoordinate,
            "secondCoordinate": secondCoordinate
        };

        console.log("Before new data: ")
        // this.http.post(this.url, this.data).subscribe(response => {
        //     this.responseData = response.json();
        //     console.log("in response data: ");
        //     console.log(this.responseData);
        //     console.log("\n new data! \n");
        // });


        // return this.responseData;
        return this.http.post(this.url, this.data);
    }



    submitFirstSelectedPiece(selectedPiece: number, boardState:any ){

      return this.http.post(this.url, this.data, boardState)
    }

}
