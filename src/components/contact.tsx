import React, { useState, useCallback, useMemo } from 'react'
import { formSubmitted } from '../utils/typewritter'

// Copied from payid code: common/community.tsx
const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const isValidEmail = (val: string | undefined): boolean => {
  return !!(val && emailRegex.test(val))
}

const contact = () => {
  const [email, setEmail] = useState<string>('')
  const [errorMsg, setErrorMsg] = useState<string>('')
  const [success, setSuccess] = useState<boolean>(false)
  const [submitting, setSubmitting] = useState<boolean>(false)

  const handleInputChange = ({
    target: { value },
  }: {
    target: { value: string }
  }) => {
    setEmail(value)
    setErrorMsg('')
  }

  const validEmail = useMemo(() => {
    return isValidEmail(email)
  }, [email])

  const handleSubmit = useCallback(() => {
    setErrorMsg('')
    if (isValidEmail(email)) {
      // TODO: Update tracking to Segment
      if (typeof window !== 'undefined') {
        if (typeof window.heap !== 'undefined') {
          window.heap.track('newsletter', { email })
        }
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'conversion', {
            send_to: 'AW-877332159/jdvuCLLdpdQBEL-NrKID',
          })
          window.gtag('event', 'conversion', {
            send_to: 'AW-616173950/7ehtCOKFvNYBEP6i6KUC',
          })
        }
      }

      const formData = `email=${email}`

      setSubmitting(true)
      fetch('https://go.ripple.com/l/105572/2020-06-15/cspx4n', {
        mode: 'no-cors',
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
        .then(() => {
          setEmail('')
          setErrorMsg('')
          setSuccess(true)
        })
        .catch((err) => {
          setErrorMsg('Error sending email.')
          console.error(err)
        })
        .finally(() => {
          setSubmitting(false)
        })

      fetch(
        `https://script.google.com/macros/s/AKfycbyT7zjGQMQKaSrE9ef1NuvAFGKGUc8cnnUGSFo7V5Q6HWeBx-DL/exec?${formData}`,
        {
          mode: 'no-cors',
        },
      ).catch(() => {})

      formSubmitted({
        email,
        form_name: 'documentation_newsletter',
      })
      window.analytics.identify({ email })
    } else {
      setErrorMsg('Invalid email.')
    }
  }, [email, setErrorMsg, setEmail, setSuccess, setSubmitting])

  return (
    <div className="newsletter">
      <label className="title">Sign Up for the Newsletter</label>
      <div className="input-group">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
        >
          {!success && (
            <>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="text-input email-input"
                value={email}
                onChange={handleInputChange}
                disabled={submitting}
              />
              <button
                type="submit"
                disabled={!validEmail || submitting}
                className={`button contact-btn ${
                  !validEmail ? 'disabled' : ''
                }`}
              >
                Contact Us
              </button>
            </>
          )}
        </form>
        {success && (
          <div className="alert alert--success margin-vert--sm" role="alert">
            Successfully subscribed!
          </div>
        )}
        {errorMsg && (
          <div className="alert alert--danger margin-vert--sm" role="alert">
            {errorMsg}
          </div>
        )}
      </div>
    </div>
  )
}

export default contact
