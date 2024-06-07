import IDomainResponse from '@kaliauthdomain/contracts/response.interface';
import { Injectable } from '@angular/core';
import ICommand from '@kaliauthdomain/contracts/command.interface';
import { Message, MessageService } from 'primeng/api';
import { InfraNotificationResponse } from './notification.infraresponse';

type Severity = 'error' | 'success';

@Injectable({ providedIn: 'root' })
export class InfraNotificationCommand
  implements ICommand<Message & { severity: Severity }, IDomainResponse<void>>
{
  constructor(private messageService: MessageService) {}

  private message(severity: Severity, title?: string, message?: string) {
    this.messageService.add({
      severity,
      summary: title,
      detail: message,
    });
  }

  private async resolve(severity: Severity, title?: string, message?: string) {
    this.message(severity, title, message);
  }

  async execute(
    data: Message & { severity: Severity },
  ): Promise<IDomainResponse<void>> {
    return new InfraNotificationResponse({
      data: await this.resolve(data.severity, data.summary, data.detail),
    });
  }
}
