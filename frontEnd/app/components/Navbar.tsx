"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import foto from '../../public/avatar.jpeg';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpent, setIsOpent] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  const { data: session } = useSession();

  useEffect(() => {
    setIsClient(true);
  }, []);

  async function handleExit() {
    await signOut({ redirect: false });
    router.replace('/');
  }

  function closeMobileMenu() {
    setIsOpen(false);
  }

  return (
    <>
      {isClient &&
        <main className="top-1 w-full bg-white shadow z-10">
          <div className="container mx-auto flex items-center justify-between px-4 py-6">
            <h1 className="text-2xl font-bold text-gray-800">Meu Site</h1>

            {/* Menu desktop */}
            <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
              <Link href="/importacao">Home</Link>
              <Link href="/usuarios">Usuário</Link>
              <Link href="/suspeita">Suspeitas</Link>

              <div className="relative">
                <button
                  onClick={() => setIsOpent(prev => !prev)}
                  className="flex items-center text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                >
                  <Image className="w-8 h-8 rounded-full" src={foto} alt="user photo" />
                </button>
                <div className={`absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg divide-y divide-gray-100 z-50 ${isOpent ? 'block' : 'hidden'}`}>
                  <div className="px-4 py-3 text-sm text-gray-900">
                    <div>{session?.user.name}</div>
                    <div className="font-medium truncate">{session?.user.email}</div>
                  </div>
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
                    </li>
                    <li>
                      <Link href="/settingsUsuario" className="block px-4 py-2 hover:bg-gray-100">Settings</Link>
                    </li>
               
                  </ul>
                  <div className="py-2">
                    <button onClick={handleExit} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                      Sign out
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Botão de menu mobile */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Menu mobile */}
          <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
              <button onClick={() => setIsOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col items-center justify-center space-y-6 py-10 text-lg font-medium text-gray-700">
              <Link href="/importacao" onClick={closeMobileMenu}>Home</Link>
              <Link href="/usuarios" onClick={closeMobileMenu}>Usuário</Link>
              <Link href="/suspeita" onClick={closeMobileMenu}>Suspeitas</Link>
              <button onClick={() => { handleExit(); closeMobileMenu(); }} className="text-red-600">
                Sair
              </button>
            </div>
          </div>
        </main>
      }
    </>
  );
}
