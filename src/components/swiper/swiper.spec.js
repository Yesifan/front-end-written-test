import '@testing-library/jest-dom';
import { render } from '@testing-library/vue';
import { delay } from '../../lib/utils'
import Swiper from './index.vue';


describe('swiper.vue', () => {
  it('has move', async () => {
    const { container } = render(Swiper);
    const ul = container.querySelector("ul.card")
    expect(ul).toHaveStyle('left: 0px;')
    await delay(2000)
    expect(ul).toHaveStyle('left: -600px;')
  });
});
