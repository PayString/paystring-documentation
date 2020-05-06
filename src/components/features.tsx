import React from 'react'

interface Feature {
  title: string
  imageUrl: string
  description: string
}

const Features: React.FC = () => {
  const features = [
    {
      title: 'Open and free',
      imageUrl: '/img/features/open.svg',
      description: 'Any company is welcome to use this free and open standard',
    },
    {
      title: 'Simple Universal Standard',
      imageUrl: '/img/features/standard.svg',
      description: 'Customers can use a single PayID across any network',
    },
    {
      title: 'Improved Experience',
      imageUrl: '/img/features/experience.svg',
      description:
        'PayID is simpler, easier to use, and less prone to errors than existing payments IDs',
    },
    {
      title: 'Currency Agnostic',
      imageUrl: '/img/features/currency.svg',
      description:
        'Supports payments in any currency from Bitcoin to ACH to credit networks',
    },
    {
      title: 'Business Friendly',
      imageUrl: '/img/features/business.svg',
      description:
        'PayID increases network reach to more wallets, currencies, and payment scenarios',
    },
    {
      title: 'Developer Friendly',
      imageUrl: '/img/features/developer.svg',
      description:
        'Built on existing secure web standards, and easy to deploy in a few lines of code',
    },
  ]

  return (
    <>
      {features && features.length && (
        <section className="features">
          <div className="container">
            <div className="row">
              {features.map((props: Feature) => (
                <div key={props.title} className="col col--4 feature">
                  <div>
                    <img
                      className="featureImage"
                      src={props.imageUrl}
                      alt={props.title}
                    />
                  </div>
                  <h3>{props.title}</h3>
                  <p>{props.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Features
