import {NgModule} from '@angular/core';
import {MatBadgeModule, MatIconModule, MatSidenavModule, MatListModule, MatTabsModule, MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
    imports: [
        MatBadgeModule,
         MatTabsModule,
         MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule],
    exports: [
        MatBadgeModule,
        MatTabsModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule]
})

export class MaterialModule {}
