import { defineComponent, ref, Ref } from 'vue'

const Test = defineComponent({
  name: 'Test',
  setup() {
    const msg: Ref<string> = ref('测试')

    return () => {
      return (
        <div>
          <p>{msg.value}</p>
        </div>
      )
    }
  },
})

export default Test
