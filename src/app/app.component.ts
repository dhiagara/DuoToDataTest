import { Component } from '@angular/core';
import { AuthService } from './serivice/auth.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public type: ChartType = 'line';

  public labels: Label[] = ['', '', '', '', '', ''];

  public datasets: ChartDataSets[] = [
    {
      label: '# of Votes',
      data: [, , , , ,],
      backgroundColor: '#AD35BA',
      borderColor: [
        '#AD35BA',
      ],
      borderWidth: 2,
      pointBorderColor: "#fff",
      pointBackgroundColor: "rgba(173, 53, 186, 0.1)",

    },

  ];


  constructor(private srv: AuthService) { }
  data: any;
  result2: any;
  awsData: [];
  result: any;
  names: [];
  sentiments: [number];
  posts;
  myChart;
  postsComments;

  ngOnInit() {
    this.srv.getData().subscribe(res => {
      console.log("résss", res)
      this.result = res;
      this.posts = this.result[0].posts;
      console.log(this.result[0].posts)
      this.names = this.result[0].posts.map(r => r.post_date)
      this.sentiments = this.result[0].posts.map(r => {
        var sum = []
        this.postsComments = r.post_comments
        r.post_comments.forEach(element => {
          sum[0] = element.Joy
          sum[1] = element.Fear
          sum[1] = element.Anger

        }
        );
        return Math.max.apply(null, sum);
        ;
      });
      this.labels = this.names
      console.log("this.sentiments", this.sentiments)
      this.datasets.map(data => data.data = this.sentiments)

    });
    this.getDatafromAws();
    this.getMoyenRegion();


  }

  getDatafromAws() {
    this.srv.getDatafromAWS().subscribe(r => {
      this.result2 = r;
      var t: any = [...this.result2.prices]
      console.log("wawawa", t)
      this.awsData = t;
    })
  }
  getMoyenRegion() {
    var tabl: any = this.awsData
    console.log("waaaaaaaaaaaaaaaa", tabl.attributes)
    tabl.forEach(a => {
      console.log("waaaaaaaaaaaaaaaa", a.attributes)
      if (a.attributes == "ap-northeast-3") {

      }

    })
  }

}
