import { lazy } from 'solid-js'
import { Route, Router } from '@solidjs/router'
import Home from './home.tsx'

const Other = lazy(() => import('./other.tsx'))

export default function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/other" component={Other} />
    </Router>
  )
}
