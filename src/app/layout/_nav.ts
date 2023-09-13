import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  
  {
    name: 'داشبورد',
    url: './dashboard',
    iconComponent: { name: 'cil-speedometer' }
    
  },
  {
    name: 'شیفت ها',
    url: './shifts',
    iconComponent: { name: 'cil-list-rich' }
    
  },
  {
    name: 'گزارش ها',
    url: './logs',
    iconComponent: { name: 'cil-calendar' }
    
  },
  {
    name: 'تعطیلات',
    url: './holidays',
    iconComponent: { name: 'cil-clock' }
    
  },
  {
    name: 'رویداد ها',
    url: './events',
    iconComponent: { name: 'cil-clock' }
    
  },
  
];
