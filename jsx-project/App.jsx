import {defineComponent, ref} from 'vue'
export default defineComponent({
  setup() {
    const name = ref('lihh')

    return () => (
      <div>
        我的姓名是：{name.value}
      </div>
    )
  }
})