import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    MatButtonModule,
    MatSlideToggleModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatDialogModule,
    MatSortModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatTabsModule,
    MatGridListModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatStepperModule,
    MatSliderModule,
    MatTooltipModule,
  ],
  exports: [
    MatButtonModule,
    MatSlideToggleModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatDialogModule,
    MatSortModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatTabsModule,
    MatGridListModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatStepperModule,
    MatSliderModule,
    MatTooltipModule,
  ],
})
export class MaterialModule {}
