import { render, screen } from '@testing-library/react';
import App from './App';

test('test for sary project', () => {
    render( < App / > );
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});