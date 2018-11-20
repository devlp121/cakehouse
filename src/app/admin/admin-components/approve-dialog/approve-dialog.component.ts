import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-approve-dialog',
  templateUrl: './approve-dialog.component.html',
  styleUrls: ['./approve-dialog.component.scss']
})
export class ApproveDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<any>) { }

  ngOnInit() {
  }

}
