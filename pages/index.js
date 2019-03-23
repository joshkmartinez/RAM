import React from 'react'
import Head from 'next/head'
import { Flex, Text, Image } from 'rebass'
const Index = () => (
  <React.Fragment>
    <Head>
      <title>RAM</title>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      />
    </Head>
    <Flex alignItems="center" justifyContent="center">
      <Text>Would you like to download some RAM?</Text>
    </Flex>
    <Flex alignItems="center" justifyContent="center">
      <Text>I thought so...</Text>
    </Flex>
  </React.Fragment>
)

export default Index
