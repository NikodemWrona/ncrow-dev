import { HttpClient, createHttpClient } from './httpClient'
import { API_URL } from '@__/config'

export class ApiClient {
  private readonly httpClient: HttpClient

  constructor () {
    this.httpClient = createHttpClient({
      baseURL: API_URL
    })
  }

  sendMessage(email: string, message: string): Promise<void> {
    return this.httpClient.post('/contact', {
      email,
      message
    })
  }
}
