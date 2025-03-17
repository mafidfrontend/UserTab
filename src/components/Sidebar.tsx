'use client';

import { sidebarItems } from '@/constants';
import { SidebarItemTypes } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-full w-48 p-4 border-2 rounded-xl">
      <ul className="flex flex-col gap-2">
        {sidebarItems.map((item: SidebarItemTypes) => (
          <Link key={item.id} href={item.path}>
            <li
              className={`p-2 border-2 rounded-md transition ${
                pathname === item.path && 'text-sky-800'
              }`}
            >
              {item.label}
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  );
}
