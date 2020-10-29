import React, { useState, useMemo } from 'react'
import useThemeContext from '@theme/hooks/useThemeContext'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import Link from '@docusaurus/Link'

import Contact from './contact'

import developers from './developers'
import banners from './banners'

import './home.styles.css'

const homeCards = [
  {
    title: 'Getting Started',
    description:
      'Getting Started guide that covers basics that go beyond the sanbox.',
    icon: '/img/docs/home/getting-started.svg',
    whiteIcon: '/img/docs/home/getting-started-white.svg',
    url: '/getting-started',
  },
  {
    title: 'Deploy PayID',
    description:
      'Check the deployment options page to integrate payID in your project.',
    icon: '/img/docs/home/deploy.svg',
    whiteIcon: '/img/docs/home/deploy-white.svg',
    url: '/intro-deploy',
  },
  {
    title: 'Reference Implementation',
    description: 'Here you can find API Reference, Security and Metrics.',
    icon: '/img/docs/home/reference.svg',
    whiteIcon: '/img/docs/home/reference-white.svg',
    url: '/payid-reference-overview',
  },
]

const discordBackground = {
  backgroundImage: '/img/docs/home/join-discord.svg',
}

const discordSmallBackground = {
  backgroundImage: '/img/docs/home/join-discord-small.svg',
}

const Home = () => {
  const [currentBannerIdx, setCurrentBannerIdx] = useState(0)

  const { isDarkTheme } = useThemeContext()

  const { siteConfig } = useDocusaurusContext()
  const { customFields = {} } = siteConfig

  const currentBanner = useMemo(() => {
    return banners[currentBannerIdx]
  }, [currentBannerIdx])

  const changeBanner = (position: number) => {
    const length = banners.length
    let newIdx = 0
    if (position > 0) {
      if (currentBannerIdx !== length - 1) {
        newIdx = currentBannerIdx + 1
      }
    } else if (position < 0) {
      if (currentBannerIdx !== 0) {
        newIdx = currentBannerIdx - 1
      } else {
        newIdx = length - 1
      }
    }

    setCurrentBannerIdx(newIdx)
  }

  return (
    <>
      <div className="row">
        <div className="col col--6">
          <div className="markdown greetings">
            <h1 className="markdown-title">Start building with PayID</h1>
            <p>Explore how easily you can build with PayID</p>
            <a href={customFields.sandboxUrl} target="_blank">
              <button className="button">Sign Up for Sandbox</button>
            </a>
          </div>
        </div>
        <div className="col col--6 image-container">
          <img src={useBaseUrl('/img/docs/sandbox-image.png')} />
        </div>
      </div>
      <div className="row home-middle">
        {homeCards.map((homecard) => {
          return (
            <div
              className="col col--4 sm-p-20 centered-col"
              key={homecard.title}
            >
              <Link to={homecard.url}>
                <div className="home-card">
                  <div className="home-card-body">
                    <img
                      src={
                        isDarkTheme
                          ? useBaseUrl(homecard.whiteIcon)
                          : useBaseUrl(homecard.icon)
                      }
                      className="home-card-icon"
                    />
                    <h3 className="home-card-title">{homecard.title}</h3>
                    <p>{homecard.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
      <div className="markdown">
        <h2>Built by Developers</h2>
        <p>Explore what our developers are building.</p>
      </div>
      <div className="row home-middle built-by-developers">
        {developers.map((developer) => {
          return (
            <div
              className="col col--4 sm-p-20 centered-parent"
              key={`developer-${developer.title}`}
            >
              <a href={developer.link}>
                <div className="developer-card centered-col">
                  <div className="developer-card-top">
                    <img
                      src={
                        isDarkTheme
                          ? useBaseUrl(developer.whiteLogo)
                          : useBaseUrl(developer.logo)
                      }
                    />
                  </div>
                  <div className="developer-card-middle">
                    <div className="developer-card-title">
                      {developer.title}
                    </div>
                    <p>{developer.description}</p>
                  </div>
                </div>
                <div className="developer-info">
                  <div className="developer-image">
                    <img src={useBaseUrl(developer.userLogo)} />
                  </div>
                  <div className="developer-details">
                    <div className="details">{developer.userName}</div>
                    <div className="details">{developer.userdetail}</div>
                  </div>
                </div>
              </a>
            </div>
          )
        })}
        <div className="developer-btn">
          <a href={customFields.developerUrl} target="_blank">
            <button className="button">See More</button>
          </a>
        </div>
      </div>
      <div className="markdown">
        <h2>Get PayID Today</h2>
      </div>
      <div className="banner-container">
        <div className="banner-cards">
          {banners.map((banner, idx) => {
            return (
              <div
                className={`banner-card ${
                  idx === banners.length - 1 ? 'last-idx' : ''
                }`}
                key={`cards-${banner.text}`}
              >
                <div
                  className={`active-card ${
                    idx === currentBannerIdx ? 'active' : ''
                  }`}
                />
                <div
                  className="banner-card-image"
                  onClick={() => {
                    setCurrentBannerIdx(idx)
                  }}
                >
                  <img
                    src={
                      isDarkTheme
                        ? useBaseUrl(banner.logoWhite)
                        : useBaseUrl(banner.logo)
                    }
                  />
                </div>
              </div>
            )
          })}
        </div>
        <div className="banner-body">
          <div className="banner-arrow left" onClick={() => changeBanner(-1)}>
            <img src={useBaseUrl('/img/docs/home/banners/go-left.svg')} />
          </div>
          <div className="banner-content">
            <div className="banner-left">
              <img src={useBaseUrl(currentBanner.logoWhite)} />
              <p className="banner-text">{currentBanner.text}</p>
              <Link to="/getting-started">
                <button className="button">Get a PayID</button>
              </Link>
            </div>
            <div
              className="banner-right"
              style={{
                backgroundImage: `url(${useBaseUrl(currentBanner.banner)})`,
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%',
              }}
            />
          </div>
          <div className="banner-arrow right" onClick={() => changeBanner(1)}>
            <img src={useBaseUrl('/img/docs/home/banners/go-right.svg')} />
          </div>
        </div>
        <div className="banner-body-small">
          <div
            className="banner-small-top"
            style={{
              backgroundImage: `url(${useBaseUrl(currentBanner.banner)})`,
              backgroundSize: '100% 100%',
            }}
          />
          <div className="banner-small-bottom">
            <img src={useBaseUrl(currentBanner.logoWhite)} />
            <p className="banner-small-text">{currentBanner.text}</p>
            <Link to="/getting-started">
              <button className="button">Get a PayID</button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="discord-card"
        style={{
          backgroundImage: `url(${useBaseUrl(
            discordBackground.backgroundImage,
          )})`,
        }}
      >
        <img src={useBaseUrl('/img/docs/home/logo/discord.svg')} />
        <h2>Join Discord Community</h2>
        <a href={customFields.discordUrl} className="button" target="_blank">
          Join Discord
        </a>
      </div>
      <div
        className="discord-card-small"
        style={{
          backgroundImage: `url(${useBaseUrl(
            discordSmallBackground.backgroundImage,
          )})`,
        }}
      >
        <img src={useBaseUrl('/img/docs/home/logo/discord.svg')} />
        <h2 className="discord-small-text">Join Discord Community</h2>
        <a href={customFields.discordUrl} className="button" target="_blank">
          Join Discord
        </a>
      </div>
      <div className="divider" />
      <Contact />
    </>
  )
}

export default Home
