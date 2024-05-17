import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TestComponent from '../TestComponent.vue'

describe('TestComponent', () => {
  it('mounts correctly', () => {
    const wrapper = mount(TestComponent, {
      props: {
        num1: 0,
        num2: 0
      }
    })
    
    expect(wrapper.exists()).toBe(true)
  })

  it('calculates and displays the correct sum', () => {
    const num1 = 5
    const num2 = 7
    const wrapper = mount(TestComponent, {
      props: {
        num1,
        num2
      }
    })
    
    expect(wrapper.text()).toContain(`Sum of ${num1} and ${num2} is ${num1 + num2}`)
  })
})
