import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { Noto_Serif_KR } from 'next/font/google'
import { IBM_Plex_Sans_KR } from 'next/font/google'

const noto_serif_kr = Noto_Serif_KR({
  subsets: ['latin'],
  weight: '900',
})
const ibm = IBM_Plex_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

const Header = () => {
  return (
    <header className="sticky top-0 flex items-center justify-between bg-white py-10 opacity-[80%] dark:bg-[#030712] dark:text-white">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className={noto_serif_kr.className + ' flex items-center justify-between'}>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-3xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div
        className={ibm.className + ' flex items-center space-x-4 font-[400] leading-5 sm:space-x-6'}
      >
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-[400] font-medium text-gray-900 dark:text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          ))}
        {/* <SearchButton /> */}
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
