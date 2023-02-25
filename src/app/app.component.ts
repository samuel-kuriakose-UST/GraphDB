import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';
}


// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Edge, Node } from '@swimlane/ngx-graph';
// // import { nodes, links } from './data';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   title = 'GraphNode-AngularApp';
  
//   nodes:Node =[];

//   constructor(private http: HttpClient) {}

//   ngOnInit() {
//     this.get_ngxNodes();
//     this.get_ngxEdges();
    
//   }
// // NGX-GRAPH COMPONENT BELOW
// // nodes: Node[] = nodes;
// // links: Edge[] = links;


// // nodes1:{} | undefined;
// // links1:{} | undefined;


// get_ngxNodes() {
//   this.http.get('http://localhost:3000/api/nodes').subscribe((response) => {
//     // this.nodes1 = response;
//     // const nodes2 = response;
//     // console.log(`nodes data from data.ts: ${JSON.stringify(nodes)}\n`);

//     // console.log(`ngx Node data from Neo4j: \n\n${JSON.stringify(this.nodes1)}\n`);
//   });
// }

// get_ngxEdges() {
//   this.http.get('http://localhost:3000/api/edges').subscribe((response) => {
//     // this.links1 = response;
//     // console.log(`ngx Edge data: \n\n${JSON.stringify(this.links1)}\n`);
//   });
// }


// // USER GUI COMPONENT BELOW
//   node1: string="";
//   node2: string="";
//   relation: string="";



  

//   Add() {
//     const body = {
//       node1Name: this.node1,
//       node2Name: this.node2,
//       relationship: this.relation
//     };

//     this.http.post('http://localhost:3000/api/add', body).subscribe(response => {
//       console.log(response);
//     }, error => {
//       console.log(error);
//     });
//   }
// }
