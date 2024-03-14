import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AssetResponse, DataResponse } from './contracts/asset-response';
import { CryptoService } from './services/crypto.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CryptoListComponent } from './crypto-list/crypto-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CryptoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crypto';
  assets: AssetResponse[] = [];

  constructor(private cryptoSvc: CryptoService) { }

  ngOnInit() {
    this.loadAllAssets();
  }

  loadAllAssets() {
    this.cryptoSvc.getAllAssets().subscribe(
      {
        next: (response: DataResponse) => {
          this.assets = response.data;
          console.log(this.assets);
        },
        error: (err: any) => {
          console.log(err);
        }
      }
    );
  }





}
