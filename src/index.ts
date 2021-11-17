import { App } from 'vue'
import { defaultKakaoSdkOptions, VueKakaoSdkOptions } from './options'
import { closureInitializeScript, initialized, kakao } from './vueKakaoSDK'

let initializeScript: () => Promise<void>

function initialize () {
  return initializeScript()
}

export function useKakao () {
  return { kakao, initialize }
}

export * from './kakao'
export * from './options'

export default {
  async install (Vue: App, options: Partial<VueKakaoSdkOptions>  = {}) {

    if (!options.apiKey) {
      throw Error(`You have to pass 'apiKey' in options`)
    }

    const initializedScript = initialized()

    const { scriptUrl, scriptId, apiKey } = { ...defaultKakaoSdkOptions, ...options }

    if (!initializedScript && initializeScript === undefined) {
      initializeScript = closureInitializeScript(scriptUrl, scriptId, apiKey)
      initializeScript()
    }
  }
}
