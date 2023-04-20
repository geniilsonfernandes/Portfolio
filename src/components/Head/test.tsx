import { render, screen } from '@testing-library/react'

import Head from '.'

describe('<Head />', () => {
  it('should render the heading', () => {
    render(<Head />)

    expect(screen.getByRole('heading', { name: /Head/i })).toBeInTheDocument()
  })
})
