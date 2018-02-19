import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
    id = 'chart1';
    width = 580;
    height = 400;
    type = 'column2d';
    dataFormat = 'json';
    dataSource;
    title = '';
  constructor(private _service: HttpService) {


    
    _service.getUserList().subscribe((response) => {
        this.dataSource = {
            "chart": {
                "caption": "Employees by Skills",
                "subCaption": "Top 5 skills",
                // "numberprefix": "$",
                "theme": "fint"
            },
            "data": [
                {
                    "label": "C#",
                    "value": "40"
                },
                {
                    "label": ".NET",
                    "value": "30"
                },
                {
                    "label": "AngularJS",
                    "value": "23"
                },
                {
                    "label": "Java",
                    "value": "22"
                },
                {
                    "label": "ReactJS",
                    "value": "10"
                }
            ]
        }
    });
  }

  ngOnInit() {
  }

}
