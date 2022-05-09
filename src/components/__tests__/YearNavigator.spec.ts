import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import YearNavigator from '../YearNavigator.vue'

describe('YearNavigator', () => {
  it('renders properly', () => {
    const wrapper = mount(YearNavigator, { props: { actualYear: 2022 } })
    expect(wrapper.text()).toContain('2022')
  })

  it('clickes next year', () => {
    const wrapper = mount(YearNavigator, { props: { actualYear: 2023 } })
    const button = wrapper.find('.next-button');
    button.trigger('click');
    expect(wrapper.text()).toContain('2023')
  })

  it('clickes previous year', () => {
    const wrapper = mount(YearNavigator, { props: { actualYear: 2021 } })
    const button = wrapper.find('.prev-button');
    button.trigger('click');
    expect(wrapper.text()).toContain('2021')
  })
})
