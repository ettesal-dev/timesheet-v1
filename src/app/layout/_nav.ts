import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  
  {
    name: 'داشبورد',
    url: './dashboard',
    iconComponent: { name: 'cil-speedometer' }
    
  },
  {
    name: 'ثبت',
    url: './submit',
    iconComponent: { name: 'cil-list-rich' }
    
  },
  {
    name: 'گزارش ها',
    url: './report',
    iconComponent: { name: 'cil-calendar' }
    
  },
  {
    name: 'تنظیمات',
    url: './setting',
    iconComponent: { name: 'cil-clock' }
    
  },
  
  
];
