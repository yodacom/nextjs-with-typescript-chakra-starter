import NextLink from "next/link";
import Layout from "../components/Layout";
import { Heading, Link } from "@chakra-ui/core";

const AboutPage = () => (
  // <Flex flexDirection="column" alignItems="center">

  <Layout title="About | Next.js + TypeScript Example">
    <Heading as="h1">About</Heading>
    <p>This is the about page</p>
    <NextLink href="/" passHref>
      <Link>Go home</Link>
    </NextLink>
  </Layout>
  // </Flex>
);

export default AboutPage;
