import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'แดชบอร์ด',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'นัดหมายทั้งหมด',
    path: '/books',
    icon: <Icon icon="mdi:paper-outline" width="24" height="24" />,
  },
  {
    title: 'รายการสั่งซื้อ',
    path: '/buy',
    icon: <Icon icon="solar:cart-5-linear" width="24" height="24" />,
  },
  {
    title: 'ผู้ใช้งาน',
    path: '/user',
    icon: <Icon icon="tabler:user" width="24" height="24" />,
  },
  {
    title: 'นักกายภาพบำบัด',
    path: '/physical',
    icon: <Icon icon="mingcute:idcard-line" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'นักกายภาพ', path: '/path1' },
      { title: 'นักกายภาพ', path: '/projects/path2' }    ],
  },
  {
    title: 'OLDK Shop',
    path: '/oldkshop',
    icon: <Icon icon="mingcute:tag-line" width="24" height="24" />,
  },
  {
    title: 'การเงิน  ',
    path: '/finance',
    icon: <Icon icon="mdi:graph-line" width="24" height="24" />,
  },
  {
    title: 'Master Content',
    path: '/mastercontent',
    icon: <Icon icon="ic:outline-folder" width="24" height="24" />,
  },
  {
    title: 'Admin and Log  ',
    path: '/adminlog',
    icon: <Icon icon="flowbite:badge-check-solid" width="24" height="24" />,
  },
];