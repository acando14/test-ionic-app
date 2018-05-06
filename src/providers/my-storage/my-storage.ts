import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class MyStorageProvider {
  constructor(private storage: Storage) {
  }

  saveKey(key: string, value) {
      this.storage.set(key, value)
  }

  saveObject(key:string, object:Object) {
      this.storage.set(key, JSON.stringify(object)
      )
  }

  getKey(key: string, callback:Function) {
      this.storage.get(key).then((val) => {
        callback(val);
      });
  }

  getObject(key:string, callback:Function) {
      this.storage.get(key).then((val) =>{
          callback(JSON.parse(val));
      })
  }

  clear(key:string) {
      this.storage.remove(key);
  }
}
