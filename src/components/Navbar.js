import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='Navbar' >
      <h3>NAVBAR</h3>
      <li><Link href="/quotes">Quotes</Link></li>
      <li><Link href="/proverbs">Proverbs</Link></li>
      <li><Link href="/dialogues">Dialogues</Link></li>

    </div>
  )
}

export default Navbar