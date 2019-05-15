import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });

  it('inizio del counter con valore 0', () => {
    const wrapper = shallowMount(Counter);
    expect(wrapper.vm.count).toBe(0);
  });
  
  it('incremento del contatore quando clicco', () => {
    wrapper.find('button').trigger('click');
    expect(wrapper.vm.count).toBe(1);
  });

  it('visualizzazione valore del contatore', () => {
    expect(wrapper.find('.count').html()).toContain(0);
    
    wrapper.find('button').trigger('click');
    
    expect(wrapper.find('.count').html()).toContain(1);
  });



})
