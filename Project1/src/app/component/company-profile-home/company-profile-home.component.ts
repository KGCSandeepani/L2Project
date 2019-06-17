import { Component, OnInit } from '@angular/core';
import { DataPassService } from '../Services/data-pass.service';

@Component({
  selector: 'app-company-profile-home',
  templateUrl: './company-profile-home.component.html',
  styleUrls: ['./company-profile-home.component.css']
})
export class CompanyProfileHomeComponent implements OnInit {

  KEY = 'logger';
  value: string ;

  

  constructor(private data : DataPassService) { }

  ngOnInit() {
    this.value = this.data.getMessage();
  }
  ngOnChanges() {
    // this.items = this.db.list('feedItem', db => db.orderByChild("name")).valueChanges();

  }

  send() {
    // this.chat.sendMessage(this.message);
    
    // this.afStorage.upload(this.filePath, this.selectedFile).then(() => {
    //   const ref = this.afStorage.ref(this.filePath);
    //   const downloadUrl = ref.getDownloadURL().subscribe(url => {
    //     this.urlForSave = url;
    //     console.log("Uploaded " + this.urlForSave);
    //     this.sendToDatabase(this.urlForSave);
    //    this.number++;
    //   })
    // });

    

  }
  sendToDatabase(url:string){
    // var messagesRef = firebase.database().ref('feedItem');
    // messagesRef.push({
    //   name: "sample name",
    //   feedItem: this.feedItem,
    //   photoURL:url
    // });

    // this.feedItem = "";
    // this.selectedFile=null;
  }

  upload(event) {
    console.log(event);
    // this.selectedFile=event.target.files[0];
    
  }
  

}
