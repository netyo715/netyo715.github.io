import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TestPage = () => (
  <Layout>
    <SEO title="テスト用のページ" />
    <h1>これはテスト用のページです</h1>
    <p>簡単に作れる</p>
    <Link to="http://jp.op.gg/summoner/userName=netyo">netyo - OP.GG</Link>
  </Layout>
)

export default TestPage
