import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;

  constructor() { }
  getUserPayment() {
    const dataList = [
      {

        shop_name: 'แม่ปุ้ย',
        id: 'คุณกอ',
        order_id: 'hhh',
        order_number: '1',
        pm_totalpric: '200',
        pd_img: 'fff',
        pm_status: 'จ่ายแล้ว',
      },
      {

        shop_name: 'แม่ปุ้ย',
        id: 'คุณกอ',
        order_id: '002',
        order_number: '100',
        pm_totalpric: '200',
        pd_img: 'fff',
        pm_status: 'จ่ายแล้ว',
      },
    ];
    return dataList;
  }
  getUserDoparcel() {
    const dataList = [
      {

        shop_name: 'แม่ปุ้ย',
        id: 'คุณกอ',
        order_id: 'hhh',
        pd_number: '1',
        pm_totalpric: '200',
        tracking_no: 'fff',
        pm_status: 'จ่ายแล้ว',
      },
      {

        shop_name: 'แม่ปุ้ย',
        id: 'คุณกอ',
        order_id: 'hhh',
        pd_number: '100',
        pm_totalpric: '200',
        tracking_no: 'fff',
        pm_status: 'จ่ายแล้ว',
      },
    ];
    return dataList;
  }
  getUserReport() {
    const dataList = [
      {

        shop_name: 'แม่ปุ้ย',
        order_id: 'hhh',
        order_number: '1',
        pm_totalpric: '200',
        pd_img: 'fff',
        pm_date: '25/06/2563',
      },
      {

        shop_name: 'แม่ปุ้ย',
        id: 'คุณกอ',
        order_id: '002',
        order_number: '100',
        pm_totalpric: '200',
        pd_img: 'fff',
        pm_date: '25/06/2563',
      },
    ];
    return dataList;
  }
}
