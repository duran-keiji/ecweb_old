import {Component, Inject, NgModule} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

//MAT_DIALOG_DATAは各コンポーネントでimportして使用する必要あり

@NgModule({
    declarations: [],
    imports: [],
    exports:[
        Component,
        Inject,
        MatDialog,
        MatDialogRef,
    ]
  })
export class AsDialogModule {}