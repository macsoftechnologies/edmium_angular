import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-university-dashboard",
  templateUrl: "./university-dashboard.component.html",
  styleUrls: ["./university-dashboard.component.scss"],
})
export class UniversityDashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public mbarChartLabels: string[] = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  public barChartType: string = "bar";
  public barChartLegend: boolean = true;

  public barChartColors: Array<any> = [
    {
      backgroundColor: "rgba(105,159,177,0.2)",
      borderColor: "rgba(105,159,177,1)",
      pointBackgroundColor: "rgba(105,159,177,1)",
      pointBorderColor: "#fafafa",
      pointHoverBackgroundColor: "#fafafa",
      pointHoverBorderColor: "rgba(105,159,177)",
    },
    {
      backgroundColor: "rgba(77,20,96,0.3)",
      borderColor: "rgba(77,20,96,1)",
      pointBackgroundColor: "rgba(77,20,96,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(77,20,96,1)",
    },
    {
      backgroundColor: "rgba(77,23,96,0.5)",
      borderColor: "rgba(77,20,96,1)",
      pointBackgroundColor: "rgba(77,23,96,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(77,23,96,1)",
    },
  ];
  public barChartData: any[] = [
    {
      data: [3, 20, 0, 0, 0, 20, 9, 20, 34, 56, 3, 4],
      label: "Contacted Students",
    },
    { data: [23, 0, 0, 0, 0, 10, 9, 0, 0, 0, 3, 14], label: "Applications" },
    { data: [3, 0, 10, 0, 10, 0, 9, 40, 14, 5, 3, 4], label: "Offers" },
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    let data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.random() * 100,
      Math.round(Math.random() * 100),
      Math.random() * 100,
      Math.round(Math.random() * 100),
    ];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }
}
