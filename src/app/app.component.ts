import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IInformation} from './model/IInformation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  showMenu = false;
  darkModeActive: boolean;
  information: IInformation;
  breakpoint: number;
  rowHeight: string;

  constructor(public router: Router) {
    this.darkModeActive = false;
    this.breakpoint = window.innerWidth;
    this.rowHeight = '1:1';
    this.information = {
      instagram: 'https://www.instagram.com/williampossos/',
      facebook: 'https://www.facebook.com/Will.i.am.Stibent/',
      linkedin: 'https://www.linkedin.com/in/william-stibent-possos-navia-2bb510133/',
      github: 'https://github.com/WilliamPossos/',
      name: 'William Stibent P',
      title: 'Software Engineer',
      description: 'Whit time I have improved and learned a lot about teamwork, organization, software patterns, system security\n' +
        '          and application development with Java, C#, Spring frameworks for Java, .NET framework and JavaScript, HTML, CSS, Sencha ExtJS. I\n' +
        '          have worked with continuous integration and deployment in Azure Cloud and well, this is me, someone who is always interested in\n' +
        '          learning and helping in the construction of great things.',
      achievements: [
        {
          name: 'Certification',
          image: 'https://images.youracclaim.com/size/340x340/images/a9848abf-f8bd-474d-a9b4-6086da11a916/Oracle_Associates_Badge__1_.png',
          url: 'https://www.youracclaim.com/badges/9d20cbab-28e6-4a8b-9ca9-44ef0bb997f5',
          description: 'Oracle Certified Associate, Java SE 8 Programmer',
          type: 'Backend'
        },
        {
          name: 'Certification',
          image: 'https://images.youracclaim.com/size/340x340/images/6a254dad-77e5-4e71-8049-94e5c7a15981/azure-fundamentals-600x600.png',
          url: 'https://www.youracclaim.com/badges/0cd5d0f9-9bd1-44ab-849d-2237d911b72a/',
          description: 'Microsoft Certified: Azure Fundamentals',
          type: 'Cloud'
        },
      ],
      experience: [
        {
          name: 'Bizagi',
          location: 'Bogotá DC. Colombia',
          image: 'https://www.extropy.biz/wp-content/uploads/2014/09/engine_logo.png'
        },
        {
          name: 'Seratic',
          location: 'Popayán, Cauca. Colombia',
          image: 'https://static.wixstatic.com/media/551fb7_d2cb02d492ce4683acba13896feaabfa~mv2.png/v1/fill/w_181,h_44,al_c,q_85,usm_0.66_1.00_0.01/seratic.webp'
        },
        {
          name: 'Somos',
          location: 'Popayán, Cauca. Colombia',
          image: 'assets/somos.png'
        },
        {
          name: 'Unicauca',
          location: 'Popayán, Cauca. Colombia',
          image: 'https://www.estudiartepreu.com/wp-content/uploads/2014/03/uni-cauca.jpg'
        }
      ]
    } as IInformation;
  }

  ngOnInit(): void {
    this.changeCardsColumns();
  }

  toggleMenu(): void {
  }

  ngOnDestroy(): void {
  }

  onResize(event: any): void {
    this.changeCardsColumns();
  }

  onchangeRowHeightGrid(event: any): void {
    this.changeRowHeightGrid();
  }

  private changeCardsColumns(): void {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
  }

  private changeRowHeightGrid(): void {
    this.rowHeight = (window.innerWidth <= 400) ? '3:2' : '7:1';
  }

}
