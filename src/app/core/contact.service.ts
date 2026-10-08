import { Injectable } from '@angular/core';
import { ContactMessage } from '../shared/models/contact-message.model';

const SIMULATED_LATENCY_MS = 600;

@Injectable({ providedIn: 'root' })
export class ContactService {
  // Stub: no backend is defined yet, so a message is "sent" after a short delay.
  sendMessage(message: ContactMessage): Promise<ContactMessage> {
    return new Promise((resolve) => setTimeout(() => resolve(message), SIMULATED_LATENCY_MS));
  }
}
