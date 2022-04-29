import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/vue';

import { menu } from './mock'
import Menu from './index.vue';

describe('unlimited-menu', () => {
  
  describe('first floor', ()=>{
    it.each(menu)('has item: $name ', ({name}) => {
      const { getByText } = render(Menu, { propsData: { menu } });
      expect(getByText(name)).toBeInTheDocument()
    })
  })


  describe('second floor', ()=>{
    describe.each(menu)('the parent: $name ', ({name, children}) => {
      it.each(children)('the child: $name ', async (child)=>{
        const { getByText } = render(Menu, { propsData: { menu } });
        expect(() => getByText(child.name)).toThrow()
        await fireEvent.click(getByText(name))
        expect(getByText(child.name)).toBeInTheDocument()
      })
    })
  })

});