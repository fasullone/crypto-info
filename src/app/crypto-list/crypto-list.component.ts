import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AssetResponse, DataResponse } from '../contracts/asset-response';
import { CryptoService } from '../services/crypto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crypto-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crypto-list.component.html',
  styleUrl: './crypto-list.component.css'
})

export class CryptoListComponent {
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
