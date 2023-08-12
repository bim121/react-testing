import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('TEST APP', () => {
  test('renders learn react link', async () => {
    render(<App />);
    const notHelloElem = screen.queryByText(/hello2/i)
    const dataElem = await screen.findAllByText(/data/i)
    const helloWorldElem = screen.getByText(/hello world/i)
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value/i)
    expect(helloWorldElem).toBeInTheDocument()
    expect(helloWorldElem).toHaveStyle({color: 'red'})
    expect(btn).toBeInTheDocument()
    expect(input).toMatchSnapshot()
  });

  test("CLICK EVENT", () => {
    render(<App />)
    const btn = screen.getByTestId('toggle-btn')
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
  })
})
