import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter.vue';

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
    wrapper.find('.increment').trigger('click');
    expect(wrapper.vm.count).toBe(1);
  });

  it('visualizzazione valore del contatore', () => {
    expect(wrapper.find('.count').html()).toContain(0);
    wrapper.find('.increment').trigger('click');
    expect(wrapper.find('.count').html()).toContain(1);
  });

  //NEW TEST

  it('decremento del contatore quando clicco', () => {
    expect(wrapper.vm.count).toBe(0);
    wrapper.find('.increment').trigger('click');//1
    wrapper.find('.increment').trigger('click');//2
    wrapper.find('.decrement').trigger('click');//1
    expect(wrapper.vm.count).toBe(1);
  });

  it('Contatore Minimo 0', () => {
    expect(wrapper.vm.count).toBe(0);
    wrapper.find('.increment').trigger('click');//1
    wrapper.find('.decrement').trigger('click');//0
    wrapper.find('.decrement').trigger('click');//0
    expect(wrapper.vm.count).toBe(0);
  });

  it('Contatore Decrement Invisible quando 0', () => {
    wrapper.setData({
      count : 2
    });
    wrapper.find('.decrement').trigger('click');//1
    wrapper.find('.decrement').trigger('click');//0
    expect(wrapper.find('.decrement').isVisible()).toBe(false);
    wrapper.find('.increment').trigger('click');//1
    expect(wrapper.find('.decrement').isVisible()).toBe(true);
  });


})
