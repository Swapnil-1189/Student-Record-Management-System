import { Component,OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import {StudentDashModel} from './StudentDash.model';
import {ServiceExaService} from '../serv/service-exa.service';



@Component({
  selector: 'app-student-dash',
  templateUrl: './student-dash.component.html',
  styleUrls: ['./student-dash.component.css']
})
export class StudentDashComponent {

  formValue !:FormGroup;
  showAdd !:boolean;
  showUpdate !:boolean;

  studentObj:StudentDashModel=new StudentDashModel;
  studentAll:any;

  constructor(private formbuilder :FormBuilder, private api:ServiceExaService){

  }

  ngOnInit():void
  {
    this.formValue=this.formbuilder.group(
      {
        FName:[''],
        LName:[''],
        Email:[''],
        Mobile:[''],
        Fees:[''],
      }
    )

    }

    clickAddStudent()
    {
      this.formValue.reset();
      this.showAdd=true;
      this.showUpdate=false;
    }
  GetData()
  {
    this.studentObj.FName=this.formValue.value.FName;
    this.studentObj.LName=this.formValue.value.LName;
    this.studentObj.Email=this.formValue.value.Email;
    this.studentObj.Mobile=this.formValue.value.Mobile;
    this.studentObj.Fees=this.formValue.value.Fees;

    this.api.postStudent(this.studentObj).subscribe((resp)=>{
      console.log(resp),
      alert("student Record Added successfully ")
      
      this.formValue.reset();
    },
    err=>{
      alert("somthing went wrong....");
    }
      )

  }

  getAllDetail()
  {
    this.api.getStudent().subscribe(resp=>{
      this.studentAll=resp;
    })
  }

  deleteStudent(data:any)
  {
    this.api.deleteStudent(data.id).subscribe(resp=>
      {
        alert('Record Deletded Successfully');
        this.getAllDetail();

      })
  }

  onEdit(data:any)
  {
    this.showAdd=false;
    this.showUpdate=true;
    this.studentObj.id=data.id;
    this.formValue.controls['FName'].setValue(data.FName);
    this.formValue.controls['LName'].setValue(data.LName);
    this.formValue.controls['Email'].setValue(data.Email);
    this.formValue.controls['Mobile'].setValue(data.Mobile);
    this.formValue.controls['Fees'].setValue(data.Fees);

  }
  
  updateStudentDetails()
  {
    this.studentObj.FName=this.formValue.value.FName;
    this.studentObj.LName=this.formValue.value.LName;
    this.studentObj.Email=this.formValue.value.Email;
    this.studentObj.Mobile=this.formValue.value.Mobile;
    this.studentObj.Fees=this.formValue.value.Fees;

    this.api.updateStudent(this.studentObj,this.studentObj.id).subscribe(resp=>
      {
        alert("Record Update Successfully");
        this.formValue.reset();
        this.getAllDetail();
      })
  }
}
