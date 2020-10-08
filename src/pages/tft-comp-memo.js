import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import TeamCompMemoTool from "../components/tft/tft-comp-memo-tool"

const TFTCompMemoPage = () => (
  <Layout>
    <SEO title="TFTの構成をメモするためのツール" />
    <TeamCompMemoTool />
  </Layout>
)

export default TFTCompMemoPage
