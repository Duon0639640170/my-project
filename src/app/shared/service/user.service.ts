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
    pd_number: '1',
    pm_totalpric: '200',
    pm_img: 'fff',
    pm_status: 'จ่ายแล้ว',
      },
      {
      
        shop_name: 'แม่ปุ้ย',
        id: 'คุณกอ',
        order_id: '002',
        pd_number: '100',
        pm_totalpric: '200',
        pm_img: 'fff',
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
        order_id: '002',
        pd_number: '100',
        pm_totalpric: '200',
        tracking_no: 'fff',
        pm_date: '12/02/2563',
      },
    ];
    return dataList;
  }
  getUserReport() {
    const dataList = [
      {

    shop_name: 'แม่ปุ้ย',
    order_id: 'hhh',
    pd_number: '1',
    pm_totalpric: '200',
    tracking_no: 'fff',
    pm_date: 'จ่ายแล้ว',
      },
      {
      
        shop_name: 'แม่ปุ้ย',
        id: 'คุณกอ',
        order_id: '002',
        pd_number: '100',
        pm_totalpric: '200',
        tracking_no: 'fff',
        pm_status: '25/06/2563',
      },
    ];
    return dataList;
  }
}
