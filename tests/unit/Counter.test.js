import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter.vue', () => {

  it('inizio del counter con valore 0', () => {
    const wrapper = shallowMount(Counter);
    expect(wrapper.vm.count).toBe(0);
  });

})
