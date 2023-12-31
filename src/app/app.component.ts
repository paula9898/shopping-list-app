import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  loadedFeature = 'recipe';
  loadedOption = 'ToShoppingList';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  onManage(option: string) {
    this.loadedOption = option;
  }
}
