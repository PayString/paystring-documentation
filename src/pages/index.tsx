import React from 'react'
// The following errors are because there are no correct way to import these yet.
// @ts-expect-error
import Layout from '@theme/Layout'
// @ts-expect-error
import Link from '@docusaurus/Link'
// @ts-expect-error
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
// @ts-expect-error
import useBaseUrl from '@docusaurus/useBaseUrl'
//We need to update these images
//import Features from '../components/features'

const Home: React.FC = () => {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout description="PayID allows the use of human-readable addresses to transmit value in the currency of your choice.">
      <header className="hero hero--primary heroBanner">
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className="buttons">
            <Link
              className="button button--outline button--secondary button--lg"
              to={useBaseUrl('docs/payid-overview')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  )
}

export default Home
