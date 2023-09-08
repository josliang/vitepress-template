---
layoutClass: m-page-layout
outline: [1, 2]
---

<script setup>
</script>
<style lang='scss'></style>

# java

## index


### Title <Badge type="info" text="default" />
### Title <Badge type="tip" text="^1.9.0" />
### Title <Badge type="warning" text="beta" />
### Title <Badge type="danger" text="caution" />

```diff
-VITE_APP=ab#cd`ef
+VITE_APP="ab#cd`ef"
```

::: code-group

```sh [npm]
$ npm add -D vitepress
```

```sh [pnpm]
$ pnpm add -D vitepress
```

```sh [yarn]
$ yarn add -D vitepress
```

```sh [bun]
$ bun add -D vitepress
```

:::

:::tip
提示
:::
:::warning
提示
:::
:::danger
提示
:::
:::info 
```ts
javascript: void (function () {
    document.scrollingElement.scrollIntoView({ behavior: 'smooth' })
})()
```
:::
::: details 模拟实现 new 运算符 
<<< @/code/snippets/java/test.js 
:::

```ts {2}
javascript: void (function () {
    document.scrollingElement.scrollIntoView({ behavior: 'smooth' })
})()
```


```js
export default {
  data() {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  }
}
```


```js
export default {
  data () {
    return {
      msg: 'Highlighted!' // [!code hl]
    }
  }
}
```


```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```


```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```





```ts {1}
// line-numbers is disabled by default
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers {1}
// line-numbers is enabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```