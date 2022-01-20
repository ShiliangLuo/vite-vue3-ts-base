import { defineComponent, ref } from 'vue'

const JSXTest = defineComponent({
  name: 'JSXTest',
  setup() {
    const msg = ref('jsx测试')

    return () => {
      return (
        <div><p>{msg.value}</p>
        </div>
      )
    }
  },
})

export default JSXTest
