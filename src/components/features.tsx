import React from 'react'

const Features: React.FC = () => {
  const features = [
    {
      title: 'Easy to Use',
      imageUrl: '/img/undraw_docusaurus_mountain.svg',
      description:
        'Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.',
    },
    {
      title: 'Focus on What Matters',
      imageUrl: '/img/undraw_docusaurus_tree.svg',
      description:
        'Docusaurus lets you focus on your docs, and we will do the chores. Go ahead and move your docs into the <code>docs</code> directory.',
    },
    {
      title: 'Powered by React',
      imageUrl: '/img/undraw_docusaurus_react.svg',
      description:
        'Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.',
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
