import React, { ReactNode } from "react";
import NextLink from "next/link";
import Head from "next/head";
import { Link, Flex } from "@chakra-ui/core";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <Flex ml={20} direction="column">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <NextLink href="/" passHref>
          <Link>Home</Link>
        </NextLink>{" "}
        |{" "}
        <NextLink href="/about" passHref>
          <Link>About</Link>
        </NextLink>{" "}
        |{" "}
        <NextLink href="/users" passHref>
          <Link>Users List</Link>
        </NextLink>{" "}
        |{" "}
        <NextLink href="/api/users" passHref>
          <Link>Users API</Link>
        </NextLink>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay(Footer)</span>
    </footer>
  </Flex>
);

export default Layout;
