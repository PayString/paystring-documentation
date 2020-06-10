// The following errors are because there are no correct way to import these yet.
// @ts-expect-error
import { Redirect } from '@docusaurus/router'
import React from 'react'

const Home: React.FC = () => {
  return <Redirect to="/docs/payid-overview" />
}

export default Home
