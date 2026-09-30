const baseURL = import.meta.env.VITE_API_URL || ''

interface FetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  headers?: Record<string, string>
  body?: unknown
}

async function request<T>(
  path: string,
  options: FetchOptions = {},
): Promise<T> {
  const url = baseURL ? `${baseURL}${path}` : path

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...options.headers,
  }

  try {
    const response = await fetch(url, {
      method: options.method || 'GET',
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined,
    })

    if (!response.ok) {
      const message = `API Error: ${response.status} ${response.statusText}`
      console.error(message)
      throw new Error(message)
    }

    return await response.json()
  } catch (error) {
    const message = error instanceof Error ? error.message : 'API request failed'
    console.error(message)
    throw error
  }
}

export const api = {
  get: <T = unknown>(path: string) => request<T>(path, { method: 'GET' }),
  post: <T = unknown>(path: string, body: unknown) =>
    request<T>(path, { method: 'POST', body }),
  put: <T = unknown>(path: string, body: unknown) =>
    request<T>(path, { method: 'PUT', body }),
  delete: <T = unknown>(path: string) => request<T>(path, { method: 'DELETE' }),
}
