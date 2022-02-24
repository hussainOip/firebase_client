import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firebase_client';

  data: Array<any> = [];
  msg = '';

  searchPosts(e:any){
    new Promise(async (resolve, reject)=>{
      const response = await axios.get('http://localhost:5001/testproject-38ed0/us-central1/searchPost?search='+e.target.value);
      if(response.data.success){
        resolve(this.data = response.data.data);
      }else console.log(this.data);
    });
  }

}
