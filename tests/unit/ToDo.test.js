import { shallowMount } from '@vue/test-utils';
import ToDo from '@/components/ToDo.vue';

describe('ToDo.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ToDo);
  });

  it.only('non visualizzare lista se vuota', () => {
    expect(wrapper.contains('ul')).toBe(false);
  });

  it.only('Add Todo', () => {
    /*
    let s = 'Nuova Nota';
    let todoInput = wrapper.find('.new-todo');
    todoInput.element.value = s;
    todoInput.trigger('input');

    wrapper.find('.add').trigger('click');
    */
    addTodo('Nuova Nota');
    expect(todoList()).toContain('Nuova Nota');
  });

  it.only('Remove Todo', () => {
    addTodo('Cose da fare');
    addTodo('Nota nei Todo');
    let delButton = wrapper.find('ul > li:first-child .remove');
    delButton.trigger('click');
    expect(todoList()).not.toContain('Cose da fare Delete');
  });
  
  function addTodo(val){
    let s = val;
    let todoInput = wrapper.find('.new-todo');
    todoInput.element.value = s;
    todoInput.trigger('input');
    wrapper.find('.add').trigger('click');
  }

  function todoList(){
    return wrapper.find('ul').text();
  }
  
})
