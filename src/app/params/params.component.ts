import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.css']
})
export class ParamsComponent implements OnInit {
  param1: any;
  param2: any;
  qp: any;
  constructor(private route: ActivatedRoute) { 
  
  }

  ngOnInit(){
    this.route.paramMap.subscribe(params=>{
      console.log(params);
      this.param1=params.get('param');
      this.param2=params.get('param2');
    });
    this.route.queryParamMap.subscribe(params=>{
      console.log(params);
      this.qp=params.get('qp');
    });
    /*
    this.route.snapshot.paramMap
    this.route.snapshot.queryParamMap
    */
  }

}
