import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Node, Edge } from '@swimlane/ngx-graph';
import * as shape from 'd3-shape';
import { transition } from 'd3-transition';
import { select } from 'd3-selection';
import * as d3Transition from 'd3-transition';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  nodes: Node[] = [];
  links: Edge[] = [];
  // nodes: Node[] = nodes;
  // links: Edge[] = links;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.feedNgxData();

  }

  // ngOnChanges() {
    // this.feedNgxData();
  // }

  // USER GUI COMPONENT BELOW
  node1: string = "";
  node2: string = "";
  relation: string = "";
  searchNodeName: string = "";

  DisplayGraph() {
    this.feedNgxData();
  }

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

  SearchNode() {
    // const body = {
    // name:this.searchNodeName
    // };
    this.http.get('http://localhost:3000/api/filteredNodes/' + this.searchNodeName).subscribe((data: any) => {
      this.nodes = data.map((item: { id: any; label: any; }) => {
        const response1 = {
          id: item.id,
          label: item.label
        };
        console.log(`filterNodesAPI response: \n ${JSON.stringify(response1)}`);
        return response1;
      });
    });

    this.http.get('http://localhost:3000/api/filteredEdges/' + this.searchNodeName).subscribe((data: any) => {
      console.log(data);
      this.links = data.map((item: { source: any; target: any; label: any; }) => {
        const response2 = {
          source: item.source,
          target: item.target,
          label: item.label,
        };
        console.log(`filterEdgesAPI response: \n ${JSON.stringify(response2)}`);
        return response2;
      });
    });

    console.log(`Nodes data from API:\n${JSON.stringify(this.nodes)}\n\nEdges data from API:\n${JSON.stringify(this.links)}`)


  }

  feedNgxData() {
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
    console.log(`Nodes data from API:\n${JSON.stringify(this.nodes)}\n\nEdges data from API:\n${JSON.stringify(this.links)}`);
  }

}

