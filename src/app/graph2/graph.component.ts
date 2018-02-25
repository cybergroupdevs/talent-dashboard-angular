import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph2',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent2 implements OnInit {
    id = 'chart2';
    width = 500;
    height = 300;
    type = 'pie3d';
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
                "theme": "fint",
                "exportEnabled": "1",
                "showlegend": "1",
                "exportMode": "client"
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
