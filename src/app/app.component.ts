import {Component} from '@angular/core';
import {NbMenuItem, NbSidebarService} from '@nebular/theme';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard-starter';
  items: NbMenuItem[] = [
    {
      title: 'Profile',
      icon: 'person-outline',
    },
    {
      title: 'Change Password',
      icon: 'lock-outline',
    },
    {
      title: 'Privacy Policy',
      icon: {icon: 'checkmark-outline', pack: 'eva'},
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
    },
  ];
  menu: NbMenuItem[] = [
    {
      title: 'Vehicle',
      icon: 'home-outline',
      link: '/pages/dashboard',
      home: true,
      children: [
        {
          title: 'Form Inputs',
          link: '/pages/forms/inputs',
        },
        {
          title: 'Form Layouts',
          link: '/pages/forms/layouts',
        },
        {
          title: 'Buttons',
          link: '/pages/forms/buttons',
        },
        {
          title: 'Datepicker',
          link: '/pages/forms/datepicker',
        },
      ]
    },
    {
      title: 'Vehicle',
      icon: 'home-outline',
      link: '/pages/dashboard',
      home: true,
    },
    {
      title: 'Vehicle',
      icon: 'home-outline',
      link: '/pages/dashboard',
      home: true,
    }
  ];

  lightCard: CardSettings = {
    title: 'Light',
    iconClass: 'nb-lightbulb',
    type: 'primary',
  };

  rollerShadesCard: CardSettings = {
    title: 'Roller Shades',
    iconClass: 'nb-roller-shades',
    type: 'success',
  };

  wirelessAudioCard: CardSettings = {
    title: 'Wireless Audio',
    iconClass: 'nb-audio',
    type: 'info',
  };

  coffeeMakerCard: CardSettings = {
    title: 'Coffee Maker',
    iconClass: 'nb-coffee-maker',
    type: 'warning',
  };

  statusCards: CardSettings[] = [this.lightCard, this.coffeeMakerCard, this.wirelessAudioCard, this.rollerShadesCard];

  constructor(private sidebarService: NbSidebarService) {
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true);

    return false;
  }
}
