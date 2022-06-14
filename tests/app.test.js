import { mount } from '@vue/test-utils';
import App from 'App.vue';

describe('App组件测试', () => {
  const wrapper = mount(App);
  it('Content', () => {
    expect(wrapper.text()).toContain('Hello World!');
  });
});
