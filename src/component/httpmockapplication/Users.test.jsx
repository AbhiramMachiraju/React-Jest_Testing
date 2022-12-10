import { render, screen } from '@testing-library/react'
import { Users } from './Users'
import { rest } from 'msw'
import { server } from '../../mocks/server'

/*
  
    msw_reference :  https://mswjs.io/docs/getting-started/integrate/node 

*/


describe('Users', () => {
  test('renders correctly', () => {
    render(<Users />)
    const textElement = screen.getByText('Users')
    expect(textElement).toBeInTheDocument()
  })

  test('renders a list of users', async () => {
    render(<Users />)
    const users = await screen.findAllByRole('listitem')
    expect(users).toHaveLength(3)
  })

  test('renders error', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/users',
        (req, res, ctx) => {
          return res(ctx.status(500))
        }
      )
    )
    render(<Users />)
    const error = await screen.findByText('Error fetching users')
    expect(error).toBeInTheDocument()
  })
})