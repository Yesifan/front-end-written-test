import '@testing-library/jest-dom';
import { render } from '@testing-library/vue';
import HelloWorld from './index.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const { getByText } = render(HelloWorld, {
      props: { msg },
    });
    expect(getByText(msg)).toBeInTheDocument();
  });
});
