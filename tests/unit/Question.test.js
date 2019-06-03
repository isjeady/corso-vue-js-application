import { shallowMount } from '@vue/test-utils';
import Question from '@/components/Question.vue';

describe('Question.vue', () => {
  let wrapper,title,body;

  beforeEach(() => {
    title = 'il Titolo';
    body = 'Descrizione...';
    wrapper = shallowMount(Question, {
      propsData: {
          dataQuestion: {
              title: title,
              body: body
          }
      }
    });
  });

  it('sono presenti le due proprieta titolo e body', () => {
    see(title);
    see(body);
  });

  it ('Edit Mode', () => {
    expect(wrapper.contains('input[name=title]')).toBe(false);
    click('#edit');
    expect(wrapper.find('input[name=title]').element.value).toBe(title);
    expect(wrapper.find('textarea[name=body]').element.value).toBe(body);
  });

  it ('nascondere il button di edit in modalità modifica', () => {
    expect(wrapper.contains('#edit')).toBe(true);
    click('#edit');
    expect(wrapper.contains('#edit')).toBe(false);
  });
  

  it ('aggiornamento delle proprietà durante la modifica', () => {
    click('#edit');//view del form
    let editTitle = 'Edit del Titolo';
    let editBody = 'Edit del Body';
    //scrivo nelle input
    type(editTitle, 'input[name=title]');
    type(editBody, 'textarea[name=body]');
    //aggiorno
    click('#update');
    //verifico esistenza delle proprietà
    see(editTitle,'#lbltitle');
    see(editBody,'#lblbody');
  });


  it ('Annullo operazione di Edit', () => {
      click('#edit');//view del form
      let editTitle = 'Edit del Titolo';
      let editBody = 'Edit del Body';
      //scrivo nelle input
      type(editTitle, 'input[name=title]');
      type(editBody, 'textarea[name=body]');

      click('#cancel');

      see(title,'#lbltitle');
      see(body,'#lblbody');
  });




   // Helper Functions
  let see = (text, selector) => {
    let wrap = selector ? wrapper.find(selector) : wrapper;
    expect(wrap.html()).toContain(text);
  };

  let type = (text, selector) => {
    let node = wrapper.find(selector);
    node.element.value = text;
    node.trigger('input');
  };

  let click = selector => {
    wrapper.find(selector).trigger('click');
  };

})
