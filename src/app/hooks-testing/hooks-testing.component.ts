import { AfterContentInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-hooks-testing',
  standalone: true,
  imports: [],
  templateUrl: './hooks-testing.component.html',
  styleUrl: './hooks-testing.component.scss'
})
export class HooksTestingComponent implements OnChanges,OnInit,DoCheck,AfterContentInit {
  @Input() userId:number=0;
  @Input()items:{price:number}[]=[];
  // @ContentChild('tabTitle') tabTitle: ElementRef|any;
  // @ContentChild('tabContent') tabContent!:ElementRef|any;
  ngOnChanges(changes: SimpleChanges): void {
      console.log('************onchages get callled************');
      console.log('changes====>',changes);
      // if(changes['userId']){
      //   console.log('here is user id====>',this.userId);
        
      // }
      
  }
  ngOnInit(): void {
    console.log('************onInit get callled************');
  }
  ngDoCheck(): void {
    console.log('************ngDoCheck get callled************');
    console.log('check values',this.items);
  }
  ngAfterContentInit(): void {
    console.log('************ngAfterViewInit  callled************');
      // console.log('tab title====>',this.tabTitle.nativeElement.textContent);
      // console.log('tab title====>',this.tabContent.nativeElement.textContent);
      
  }

}
