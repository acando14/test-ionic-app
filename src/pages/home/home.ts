import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MyStorageProvider} from "../../providers/my-storage/my-storage";

const KEY_USER_LIST = "userList";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  currentId = 1;

  userList = [
    {
      id:this.currentId,
      username:"alex",
      age:"16"
    }
  ];

  constructor(public navCtrl: NavController, private myStorage: MyStorageProvider) {
    this.myStorage.getObject(
        KEY_USER_LIST,
        (val) => {
          this.userList = val;
        }
    )
  }

  add(){
    this.userList.push({
      id:this.currentId++,
      username:"",
      age:""
    })
  }

  save(){
    this.myStorage.saveObject(
        KEY_USER_LIST,
        this.userList
    );
  }

  clear(){
    this.userList = [];
    this.myStorage.clear(
        KEY_USER_LIST
    )
  }
}
