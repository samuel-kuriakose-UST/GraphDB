import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Node, Edge } from '@swimlane/ngx-graph';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  nodes: Node[] = [];
  links: Edge[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Call the API to get the nodes and links data
    this.http.get('http://localhost:3000/api/nodes').subscribe((data: any) => {
      // Map the response data to Node objects
      this.nodes = data.map((item: { id: any; label: any; }) => {
        return {
          id: item.id,
          label: item.label
        };
      });
    });

    this.http.get('http://localhost:3000/api/edges').subscribe((data: any) => {
      // Map the response data to Link objects
      this.links = data.map((item: { source: any; target: any; label: any; }) => {
        return {
          source: item.source,
          target: item.target,
          label: item.label,
          // data: item.data
        };
      });
    });

    console.log(`Nodes data from API:\n${this.nodes}\n\nEdges data from API:\n${this.links}`)
  }

  // USER GUI COMPONENT BELOW
  node1: string="";
  node2: string="";
  relation: string="";



  

  Add() {
    const body = {
      node1Name: this.node1,
      node2Name: this.node2,
      relationship: this.relation
    };

    this.http.post('http://localhost:3000/api/add', body).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
}

