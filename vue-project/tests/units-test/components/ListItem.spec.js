import {mount, createLocalVue} from "@vue/test-utils";
import Vuex from "vuex";
import ListItem from "@/components/atoms/ListItem.vue"

const localVue = createLocalVue();
const taskName = "Buy bread";
localVue.use(Vuex);

describe("ListItem component", ()=>{
  test("is a vue instance", () =>{
    const wrapper = mount(ListItem, { localVue,propsData: {title}});
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.is(ListItem)).toBeTruthy();
    expect(wrapper.vm.title).toEqual(taskName)
  })
})