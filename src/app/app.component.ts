import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
declare  const PlainDraggable: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'drag-poc';
  position:any;
  
ngOnInit(){


    this.position = "(" + 373+", " + 123 +")";
}
  newPosition(event:any){
    const boundingRect = event.currentTarget.getBoundingClientRect();
    const element = event.currentTarget;
    
    // const x = event.pageX - boundingRect.left;
    const x = element.offsetLeft;
    const y = element.offsetTop;

    this.position = "(" + x+", " + y +")";
    console.log('yeah',x,y);
  }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

}
