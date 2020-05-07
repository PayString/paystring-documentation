import React from 'react'
import Open from '../../static/img/features/open.svg'
import Standard from '../../static/img/features/standard.svg'
import Experience from '../../static/img/features/experience.svg'
import Currency from '../../static/img/features/currency.svg'
import Business from '../../static/img/features/business.svg'
import Developer from '../../static/img/features/developer.svg'

interface Feature {
  title: string
  image: React.StatelessComponent<React.SVGAttributes<SVGElement>>
  description: string
}

const Features: React.FC = () => {
  const features = [
    {
      title: 'Open and free',
      image: Open,
      description: 'Any company is welcome to use this free and open standard',
    },
    {
      title: 'Simple Universal Standard',
      image: Standard,
      description: 'Customers can use a single PayID across any network',
    },
    {
      title: 'Improved Experience',
      image: Experience,
      description:
        'PayID is simpler, easier to use, and less prone to errors than existing payments IDs',
    },
    {
      title: 'Currency Agnostic',
      image: Currency,
      description:
        'Supports payments in any currency from Bitcoin to ACH to credit networks',
    },
    {
      title: 'Business Friendly',
      image: Business,
      description:
        'PayID increases network reach to more wallets, currencies, and payment scenarios',
    },
    {
      title: 'Developer Friendly',
      image: Developer,
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
                    <props.image />
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
