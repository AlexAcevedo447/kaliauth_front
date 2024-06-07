import { Injectable } from '@angular/core';
import ICommand from '@kaliauthdomain/contracts/command.interface';
import { CookieService } from 'ngx-cookie-service';

export type CookieConfig = { key: string; value?: string; expiresIn?: number };

@Injectable({
  providedIn: 'root',
})
export class StoreCacheKeyCommand implements ICommand<CookieConfig, void> {
  constructor(private readonly cookieService: CookieService) {}

  async execute(data?: CookieConfig): Promise<void> {
    if (data)
      this.cookieService.set(data.key, data?.value || '', data.expiresIn);
  }
}
