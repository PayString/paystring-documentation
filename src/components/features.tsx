import React from 'react'

const Features: React.FC = () => {
  const features = [
    {
      title: 'Open and free',
      imageUrl: '/img/undraw_docusaurus_mountain.svg',
      description: 'Any company is welcome to use this free and open standard',
    },
    {
      title: 'Simple Universal Standard',
      imageUrl: '/img/undraw_docusaurus_tree.svg',
      description: 'Customers can use a single PayID across any network',
    },
    {
      title: 'Improved Experience',
      imageUrl: '/img/undraw_docusaurus_react.svg',
      description:
        'PayID is simpler, easier to use, and less prone to errors than existing payments IDs',
    },
    {
      title: 'Currency Agnostic',
      imageUrl: '/img/undraw_docusaurus_mountain.svg',
      description:
        'Supports payments in any currency from Bitcoin to ACH to credit networks',
    },
    {
      title: 'Business Friendly',
      imageUrl: '/img/undraw_docusaurus_tree.svg',
      description:
        'PayID increases network reach to more wallets, currencies, and payment scenarios',
    },
    {
      title: 'Developer Friendly',
      imageUrl: '/img/undraw_docusaurus_react.svg',
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
              {features.map((props) => (
                <div className="col col--4 feature">
                  <div className="text--center">
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
