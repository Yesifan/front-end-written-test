import '@testing-library/jest-dom';
import { screen } from '@testing-library/vue';
import message from './index'
import { delay } from '../../lib/utils'


describe('message.vue', () => {
  message("show the message!")

  it('show message', () => {
    expect(screen.getByText("show the message!")).toBeInTheDocument()
  });
  
  it('and hide meesage', async () => {
    await delay(1100)
    expect(() => screen.getByText("show the message!")).toThrow()
  });
 
});