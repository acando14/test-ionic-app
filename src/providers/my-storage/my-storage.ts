import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class MyStorageProvider {
  constructor(private storage: Storage) {
  }

  saveKey(key: String, value) {
      this.storage.set(key, value)
  }

  saveObject(key:String, object:Object) {
      this.storage.set(key, JSON.stringify(object)
      )
  }

  getKey(key: String, callback:Function) {
      this.storage.get(key).then((val) => {
        callback(val);
      });
  }

  getObject(key:String, callback:Function) {
      this.storage.get(key).then((val) =>{
          callback(JSON.parse(val));
      })
  }

  clear(key:String) {
      this.storage.clear(key);
  }
}
