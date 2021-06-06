import { ApiClient } from '../apiClient'

export const useApiClient = (): ApiClient => {
  const apiClient = new ApiClient()


  if (!apiClient) {
    throw new Error('DietitianApiClient has not been configured')
  }

  return apiClient
}


