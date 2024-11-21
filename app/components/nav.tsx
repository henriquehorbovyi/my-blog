import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
}
export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row justify-between items-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10"> 
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="transition-all hover:text-red-400 dark:hover:text-blue-500 flex align-middle relative py-1 px-2 m-1">
                {name}
              </Link>
            ))}
          </div>
 
          <ThemeSwitch />
        </nav>
      </div>
    </aside>
  );
}