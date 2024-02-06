'use client'

import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

type ActiveLinkProps = LinkProps & {
  children: React.ReactNode
}

export const ActiveLink = ({ href, children, ...rest }: ActiveLinkProps) => {
  const pathname = usePathname()

  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  const isActive = pathname === href.toString()

  return (
    <>
      <Link
        href={href}
        className={`${
          isActive
            ? 'text-green1 dark:text-white font-semibold underline-active transform transition-transform duration-200 hover:scale-110'
            : 'text-green2'
        } `}
        {...rest}
      >
        {children}
      </Link>
    </>
  )
}
