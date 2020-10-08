import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ProfilePage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>I'm netyo</h1>
    <Link to="https://github.com/netyo715">netyo715 - github</Link> <br />
    <Link to="https://atcoder.jp/users/netyo715">netyo715 - AtCoder</Link> <br />
    <Link to="https://jp.op.gg/summoner/userName=netyo">netyo - OP.GG</Link>
  </Layout>
)

export default ProfilePage
