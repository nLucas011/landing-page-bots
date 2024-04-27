"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Footer() {
  const { push } = useRouter();

  return (
    <footer className="xl:mx-5rem sticky pt-10rem bottom-0 start-0 rounded-lg shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="xl:flex items-center justify-between">
          <div>
            <Link
              href="/"
              className="scroll-m-20 text-xl font-semibold tracking-tight hover:text-gray-400 hover:transition-all hover:ease-out"
            >
              Discord Bot
            </Link>
            <p className="text-base font-medium text-balance xl:w-[25rem] w-full text-gray-500">
              A modal dialog that interrupts the user with important content and
              expects a response.
            </p>
          </div>
          <ul className="flex items-center text-sm font-medium mb-0 text-gray-400">
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Politicas
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Documentação
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contato
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-2 border-gray-200 opacity-40 xs:mx-auto" />
        <span className="block text-sm xs:text-center text-gray-400">
          © {new Date().getFullYear()}
          <a href="/" className="hover:underline ml-1">
            Discord bot™
          </a>
          . Todos os Direitos Reservados.
        </span>
      </div>
    </footer>
  );
}
