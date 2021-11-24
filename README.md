# vue3-kakao-sdk

[Kakao SDK](https://developers.kakao.com/tool) plugin wrapped with Vue3 Composition API

Now you can easily use Kakao SDK with Vue3

Just like this!
```vue
<script setup lang="ts">
import { useKakao } from 'vue3-kakao-sdk'
const { kakao } = useKakao()

const onClickLogin = () => {
  kakao.value.Auth.login({
    success (success) {
      console.log(success)  //  profit!
    },
    fail (err) {
      console.error(err)
    }
  })
}
</script>
```

## Intall

### Yarn or NPM
```
# yarn
yarn add vue3-kakao-sdk

# npm
npm install vue3-kakao-sdk
```

## How to use this plugin? 🧐

```js
//  main.js
import { createApp } from 'vue'
import { createVueKakaoSdk } from 'vue3-kakao-sdk'

// You have to pass your "Kakao SDK Javascript apiKey"
const app = createApp(App)
  .use(createVueKakaoSdk('Your Kakao API Javascript Key 😊'))
  .mount('#app')
```

```vue
//  App.vue

// then you can call kakao sdk with
<script setup lang="ts">
import { useKakao } from 'vue3-kakao-sdk'
const { kakao } = useKakao()

const onClickLogin = () => {
  kakao.value.Auth.login({
    success (success) {
      console.log(success)  //  profit!
    },
    fail (err) {
      console.error(err)
    }
  })
}

// or like this
const onClickShareStory = () => {
  window.Kakao.Story.share({
    url: 'https://github.com/eggplantiny/vue-kakao-sdk',
    text: 'Test story share with vue-kakao-sdk'
  })
}
</script>
```

## Use kakao SDK on mount
Kakao SDK cannot be used immediately because loading the Kakao script is asynchronous.

If you want to use this plugin as soon as it is mounted do like this at once

(or just stay few seconds 😂 plugin will load script automatically)

```vue

<script setup lang="ts">
import { onMounted } from 'vue'
import { useKakao } from 'vue3-kakao-sdk'

const { kakao, initialize } = useKakao()

onMounted(async () => {
  await initialize()
  kakao.value.Auth.login({
    success(success) {
      console.log(success)  //  yass!
    },
    fail(err) {
      console.error(err)
    }
  })
})
</script>
```

## If you wanna use Kakao SDK on Vue2.x?
Please use [Previous Version](https://www.npmjs.com/package/vue-kakao-sdk).


## Options

|Key|Description|Type|Default|
|------|---|---|---|
|* apiKey|Your Kakao SDK Javascript Key|String|* required|
|scriptUrl|Link of kakao SDK|String|https://developers.kakao.com/sdk/js/kakao.min.js|
|scriptId|Script ID of kakao SDK|String|kakao_script|
|callback|Callback function of script loaded|Function|null|

## Author

[eggplantiny](https://github.com/eggplantiny)

## License
MIT
