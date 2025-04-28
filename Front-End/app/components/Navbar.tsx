"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import foto from '../../public/avatar.jpeg';

const menuItems = [
  { label: 'Home', href: '/importacao', roles: ['Administrador', 'Financeiro'] },
  { label: 'Usuário', href: '/usuarios', roles: ['Administrador'] },
  { label: 'Suspeitas', href: '/suspeita', roles: ['Administrador', 'Financeiro'] },
  // { label: 'Dashboard', href: '/dashboard', roles: ['Administrador', 'Usuario'] },
  // { label: 'Gerenciar Usuários', href: '/admin/users', roles: ['Administrador'] },
  // { label: 'Configurações', href: '/admin/settings', roles: ['Administrador'] },
  // { label: 'Meu Perfil', href: '/perfil', roles: ['Usuario'] },
  // { label: 'Ajuda', href: '/ajuda', roles: ['Administrador', 'Usuario', 'Outro'] },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

  const filteredMenu = menuItems.filter(item => item.roles.includes(session?.user?.role));
console.log(session?.user.role)
console.log(filteredMenu)
  return (
    <>
      {isClient && (
        <main className="top-1 w-full bg-white shadow z-10">
          <div className="container mx-auto flex items-center justify-between px-4 py-6">
            <h1 className="text-2xl font-bold text-gray-800">
              <Link href="/importacao">Meu Site</Link>
            </h1>
 
            <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
              {filteredMenu.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
 
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(prev => !prev)}
                  className="flex items-center text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                >
                  <Image className="w-8 h-8 rounded-full" src={foto} alt="user photo" />
                </button>

                <div className={`absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg divide-y divide-gray-100 z-50 ${isDropdownOpen ? 'block' : 'hidden'}`}>
                  <div className="px-4 py-3 text-sm text-gray-900">
                    <div>{session?.user?.name}</div>
                    <div className="font-medium truncate">{session?.user?.email}</div>
                  </div>
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <Link href="/dashboard" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link href="/meuPerfil" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                        Meu Perfil
                      </Link>
                    </li>
                  </ul>
                  <div className="py-2">
                    <button onClick={handleExit} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                      Sair
                    </button>
                  </div>
                </div>
              </div>
            </ul>

            {/* Botão mobile */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
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
              {filteredMenu.map((item, index) => (
                <Link key={index} href={item.href} onClick={closeMobileMenu}>
                  {item.label}
                </Link>
              ))}
              <button onClick={() => { handleExit(); closeMobileMenu(); }} className="text-red-600">
                Sair
              </button>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
