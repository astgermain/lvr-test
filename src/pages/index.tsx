import type { ReactElement } from 'react'
import Layout from './layout'
import type { NextPageWithLayout } from './_app'
import HomePage from '../components/HomePage'

const Page: NextPageWithLayout = () => {
  return <HomePage />
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Page