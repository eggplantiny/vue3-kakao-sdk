import { ref } from 'vue'
import { Kakao } from './kakao'

export const kakao = ref<typeof Kakao>({} as typeof Kakao)

export function initialized () {
  if (!window.Kakao) {
    return false
  }

  if (Object.keys(window.Kakao).length === 0) {
    return false
  }

  return window.Kakao.isInitialized()
}

export function closureInitializeScript (scriptUrl: string, scriptId: string, apiKey: string) {
  return () => new Promise<void>((resolve, reject) => {
    if (initialized()) {
      return resolve()
    }

    const script = document.createElement('script')
    script.src = scriptUrl
    script.defer = true
    script.onload = () => {
      if (!initialized()) {
        window.Kakao.init(apiKey)
      }

      kakao.value = window.Kakao
      resolve()
    }

    script.onerror = error => reject(error)
    script.id = scriptId
    document.body.appendChild(script)
  })
}
