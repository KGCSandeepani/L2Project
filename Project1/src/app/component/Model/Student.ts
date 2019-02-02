export interface student  {
    id : String,
    name : String,
    password : String;
    availability :boolean;
    batch : number;
    username : String;
    email : String;
    phoneNo : number;
    l1s1 : number;
    l1s2 : number;
    l2s1 : number;
    l2s2 : number;
    cgpa : number;
    //organization1 : String;
    //organization2 : String;
    //organization3 : String;
    //organization4 : String;
    //organization5 : String;
    interest1 : String;
    interest2 : String;
    interest3 : String; 
    cv : File;  
    uploadPdfUrl; 
    selectedCompany : String;
    position: DoubleRange[]
}