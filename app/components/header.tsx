import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/about/">About</Link>
          </li>
          <li>
            <Link href="/albums/">Albums</Link>
          </li>
          <li>
            <Link href="/dashboards/">Dashboards</Link>
          </li>
          <li>
            <Link href="/dashboards/users/">User Dashboards</Link>
          </li>
          <li>
            <Link href="/dashboards/analytics/">Analytics</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <br />
    </>
  )
}

export default Header;