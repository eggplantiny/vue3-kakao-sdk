export interface VueKakaoSdkOptions {
  apiKey: string;
  scriptUrl: string;
  scriptId: string;
}

export const defaultKakaoSdkOptions: VueKakaoSdkOptions = {
  apiKey: '',
  scriptUrl: 'https://developers.kakao.com/sdk/js/kakao.min.js',
  scriptId: 'kakao_script'
}
