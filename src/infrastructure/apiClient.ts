import { Notyf } from 'notyf';
import { HttpClient, createHttpClient } from './httpClient'
import { API_URL } from '@__/config'

export class ApiClient {
  private readonly httpClient: HttpClient;
  private readonly notifier: Notyf

  constructor () {
    this.httpClient = createHttpClient({
      baseURL: API_URL
    })
    
    this.notifier = new Notyf({
      duration: 3000,
      position: {
       x: 'center',
       y: 'top' 
      }
    });
  }

  async sendMessage(email: string, message: string): Promise<void> {
    try {
      await this.httpClient.post('/contact', {
        email,
        message
      })

      this.notifier.success('Thanks!')
    } catch(error) {
      this.notifier.error('Something went wrong!')
    }
  }
}
