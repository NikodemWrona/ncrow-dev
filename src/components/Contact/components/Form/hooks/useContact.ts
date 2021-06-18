import { useApiClient } from '@__/infrastructure'

type Payload = { email: string; message: string }

type ContactFormController = {
  sendMessage: (payload: Payload) => void
}

export const useContactFormController = (): ContactFormController => {
  const apiClient = useApiClient()

  const sendMessage = (payload: Payload): void => {
    void apiClient.sendMessage(payload.email, payload.message)
  }


  return {
    sendMessage
  }
}
