import Link from 'next/link';
// import React from 'react'

const Header = () => {
  return (
    <header>
      <div id="logo">
        <a href="/">
          <img src="icon.png" />
        </a>
      </div>
      <nav>
        <Link href="/about/">About</Link>
        <Link href="/albums/">Albums</Link>
      </nav>
    </header>
  )
}

export default Header;