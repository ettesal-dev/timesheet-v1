import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  
  {
    name: 'Profile',
    url: './profile',
    iconComponent: { name: 'cil-speedometer' }
    
  },
  {
    name: 'Report',
    url: './report',
    iconComponent: { name: 'cil-list-rich' }
    
  },
  {
    name: 'پنل مدیریت',
    url: './worklogger',
    iconComponent: { name: 'cil-calendar' }
    
  },
  {
    name: 'Work Shift',
    url: './workshift',
    iconComponent: { name: 'cil-clock' }
    
  },
  
];
