import { shallowMount } from '@vue/test-utils';
import Coupon from '@/components/Coupon.vue';

describe('Coupon.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Coupon);
    wrapper.setData({
      coupons: [
          {
              code: '50OFF',
              message: '50% Off!',
              discount: 50
          }
      ]
    })
  });

  it('validazione dei coupon', () => {
    enterCouponCode('50OFF');
    expect(wrapper.html()).toContain('Coupon Riscosso: 50% Off!');
  });

  it('validazione di un coupon non valido', () => {
    enterCouponCode('9999999FF');
    expect(wrapper.html()).toContain('Coupon Non Valido');
  });

  it ('evento emesso quando un codice valido viene inserito', () => {
    enterCouponCode('50OFF');
    console.log(wrapper.emitted().scontoEvento[0]);
    expect(wrapper.emitted().scontoEvento).toBeTruthy();
    expect(wrapper.emitted().scontoEvento[0]).toEqual([50]);
  });

  
  function enterCouponCode(code) {
    let coupon = wrapper.find('input.coupon-code');
    coupon.element.value = code;
    coupon.trigger('input');
  } 
  
})
