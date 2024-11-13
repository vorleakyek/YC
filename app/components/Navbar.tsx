import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.png';
import {auth, signOut, signIn} from '@/auth';

const Navbar = async () => {

  const session = await auth();

  return (
    <header className="px-5 py-5 bg-white shadow-sm font-work-sans">
      <nav className='flex justify-between items-center'>
        <Link href='/'>
          <Image src={logo} alt="logo" width={145} height={30} />
        </Link>

        <div className='flex items-center gap-5 text-black'>
          {session && session?.user ? (
            <>
              <Link href='/startup/create'>
                <span>Create</span>
              </Link>

              <form action={async () => {
                'use server';
                await signOut({redirectTo: '/'})}
                }>
                <button type='submit'>Logout</button>
              </form>

              <Link href={`/users/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>

            </>
            ) : (
              <form action={async () => {
                "use server";
                await signIn('github');
              }}>
                <button type='submit'>
                  Login
                </button>


              </form>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar;