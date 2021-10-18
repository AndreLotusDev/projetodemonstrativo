import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FooterComponent } from './footer/footer.component';

import { routing } from './app.routes';
import { AboutUsComponent } from './about-us/about-us.component';
import { QuickDescriptionComponent } from './about-us/quick-description/quick-description.component';
import { WhyDatalakehouseComponent } from './about-us/why-datalakehouse/why-datalakehouse.component';
import { FreeNoCodeComponent } from './about-us/free-no-code/free-no-code.component';
import { HowPlataformWorksSectionComponent } from './about-us/how-plataform-works-section/how-plataform-works-section.component';
import { IntegrationWithDataSourcesComponent } from './about-us/integration-with-data-sources/integration-with-data-sources.component';
import { HowItWorksSectionComponent } from './about-us/how-it-works-section/how-it-works-section.component';
import { SuccessStoriesSectionComponent } from './about-us/success-stories-section/success-stories-section.component';
import { ScheduleAPersonalizedScenarioComponent } from './about-us/schedule-apersonalized-scenario/schedule-apersonalized-scenario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    QuickDescriptionComponent,
    WhyDatalakehouseComponent,
    FreeNoCodeComponent,
    HowPlataformWorksSectionComponent,
    IntegrationWithDataSourcesComponent,
    HowItWorksSectionComponent,
    SuccessStoriesSectionComponent,
    ScheduleAPersonalizedScenarioComponent
  ],
  imports: [
    routing,
    BrowserModule,
    TooltipModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
