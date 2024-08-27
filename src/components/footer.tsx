"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export function Footer() {
  const { push } = useRouter();

  return (
    <footer className=" text-white rounded-lg shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="xl:flex items-center justify-between">
          <div>
            <Link
              href="/"
              className="scroll-m-20 text-xl font-semibold tracking-tight hover:text-gray-400 transition-all ease-out"
            >
              Discord Bot
            </Link>
            <p className="text-base font-medium xl:w-[25rem] w-full text-gray-400 mt-2">
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
                Políticas
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
        <hr className="my-4 border-gray-700 opacity-40" />
        <span className="block text-sm text-center text-gray-400">
          © {new Date().getFullYear()}
          <Link href="/" className="hover:underline ml-1">
            Discord Bot™
          </Link>
          . Todos os Direitos Reservados.
        </span>
      </div>
    </footer>
  );
}
