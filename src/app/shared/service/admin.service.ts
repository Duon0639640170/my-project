import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  [x: string]: any;

  constructor() { }
  getAdminShop() {
    const dataList = [
      {
        id: 1,
        // shop_nameFull: 'joy',
        shop_name: 'joy',
        shop_img: 'hh',
        shop_address: 'กก',
        shop_tel: '02121212168'
      },
      {

        id: 2,
        // shop_nameFull: 'joy',
        shop_name: 'joy',
        shop_img: 'hh',
        shop_address: 'กก',
        shop_tel: '02121212168'
      },



    ];
    return dataList;
  }
  getAdminPayment() {
    const dataList = [
      {
        pm_id: '1',
        user_id: '1',
        pd_id: '1',
        pm_totalpric: '02121212168',
        pm_img: 'ddd',
        pm_date: 'ddddd',
        pm_status: 'จ่ายแล้ว',
      },
      {
        pm_id: '1',
        user_id: '1',
        pd_id: '1',
        pm_totalpric: '02121212168',
        pm_img: 'ddd',
        pm_date: 'ddddd',
        pm_status: 'จ่ายแล้ว',
      },
    ];
    return dataList;
  }
}
