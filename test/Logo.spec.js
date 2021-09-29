import { mount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.vm).toBeTruthy()
  })
})

describe('simple test', () => {
  test('simple add', () => {
        expect(2+2).toBe(4);
  });
  test('simple add 1', () => {
    expect(2+1).toBe(5);
  })
})
