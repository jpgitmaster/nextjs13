import React from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import styles from './styles/Utils.module.scss';

const Breadcrumbs = () => {
  const pathname: any = usePathname()
  const activeLink: any = pathname?.split('/')
  activeLink.shift();
  const breadcrumbs = activeLink.map((path: any, i: any) => {
      return { breadcrumb: path, href: '/' + activeLink.slice(0, i + 1).join('/') };
  });
  return (
    <div className={styles.breadcrumbs}>
      <ol>
        {breadcrumbs.map((breadcrumb: any, i: number) => 
        (i != 0) && 
          <li key={i} className={i == (breadcrumbs.length - 1) ? styles.active : ''}>
            <Link href={breadcrumb.href}>
              {breadcrumb.breadcrumb.replaceAll("_", " ")}
            </Link>
          </li>
        )}
      </ol>
    </div>
  );
};

export default Breadcrumbs;