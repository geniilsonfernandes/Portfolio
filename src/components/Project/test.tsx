import { render, screen } from '@testing-library/react'

import Project from '.'

describe('<Project />', () => {
  it('should render the heading', () => {
    render(<Project />)

    expect(
      screen.getByRole('heading', { name: /Project/i })
    ).toBeInTheDocument()
  })
})
