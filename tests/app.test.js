import { mount } from '@vue/test-utils';
import App from 'App.vue';

let wrapper;
let vm;

describe('App组件测试', () => {
  beforeEach(() => {
    wrapper = mount(App);
  });
  afterEach(() => {
    vm && vm.$destroy();
    wrapper && wrapper.destroy();
  });
  it('Content', () => {
    expect(wrapper.find('.text').text()).toEqual('Hello World!');
  });
});
