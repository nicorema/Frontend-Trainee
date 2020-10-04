import React from 'react'
import Layout from '../components/common/layout/Layout'
import { FormattedMessage } from 'gatsby-plugin-intl'

const IndexPage = () => (
  <Layout title={<FormattedMessage id="index.title" />}>
    <div
      style={{
        fontSize: '1.3rem',
        fontWeight: 'normal',
        lineHeight: '6rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '1.9rem', fontWeight: 'bold' }}>
        <FormattedMessage id="index.personalInfo.title" />
      </h1>
      <address style={{ fontStyle: 'normal' }}>
        <ul>
          <li>
          <FormattedMessage id="index.personalInfo.createdBy" />
            Nicolás Restrepo Mantilla
          </li>
          <li>
          <FormattedMessage id="index.personalInfo.email" />
            <a href="mailto:nicolas.restrepo.mantilla@gmail.com">
              nicolas.restrepo.mantilla@gmail.com
            </a>
          </li>
        </ul>
      </address>
    </div>
  </Layout>
)

export default IndexPage
