import React from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import styles from './styles/Utils.module.scss';

const Breadcrumbs = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  // console.log(router)
  // console.log(pathname)
  // console.log(searchParams)
  // const linkPath = router.asPath.split('/');
  // linkPath.shift();

  // const breadcrumbs = linkPath.map((path: any, i: any) => {
  //     return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') };
  // });
  return (
    <div className={styles.breadcrumbs}>
      {/* <ol>
        {breadcrumbs.map((breadcrumb: any, i: number) => 
        (i != 0) && 
          <li key={i} className={i == (breadcrumbs.length - 1) ? styles.active : ''}>
            <Link href={breadcrumb.href}>
              {breadcrumb.breadcrumb.replaceAll("_", " ")}
            </Link>
          </li>
        )}
      </ol> */}
    </div>
  );
};

export default Breadcrumbs;