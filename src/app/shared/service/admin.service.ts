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
        
        pd_id: '1',
        id: '1',
        pm_date: '12/02/2563',
        pm_totalpric: 'ddd',
        pd_img: 'ddddd',
        pm_img: 'fff',
      },
      {
      
        pd_id: '2',
        id: '1',
        pm_date: '02121212168',
        pm_totalpric: 'ddd',
        pd_img: 'ddddd',
        pm_img: 'fff',
      },
    ];
    return dataList;
  }
  getAdminParcel() {
    const dataList = [
      {
       
        // shop_nameFull: 'joy',
        pd_id: '1',
        name: 'hh',
        order_date: 'กก',
        pm_status: 'นำส่ง'
      },
      {

        
        // shop_nameFull: 'joy',
        pd_id: '1',
        name: 'hh',
        order_date: 'กก',
        pm_status: 'รับ'
      },
    ];
    return dataList;
  }
  getAdminReport() {
    const dataList = [
      {

    shop_name: 'ไก่ทอด',
    order_name: 'คุณกอ',
    order_number: '002',
    pd_price: '100',
    pm_totalpric: '200',
    pm_img: 'fff',
    rp_date: '01/02/2563',
      },
      {
      
        shop_name: 'อ่อมหอยจุ๊บ',
        order_name: 'คุณกอ',
        order_number: '002',
        pd_price: '100',
        pm_totalpric: '200',
        pm_img: 'fff',
        rp_date: '01/02/2563',
      },
    ];
    return dataList;
  }
}
