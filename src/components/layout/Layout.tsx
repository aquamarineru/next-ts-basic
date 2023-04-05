import { FC, PropsWithChildren } from 'react'
import Header from './header/Header'
import { IMeta } from '../seo/meta.interface'
import Meta from '../seo/Meta'

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, title, description }) => {
    return (
        <Meta title={title} description={description}>
            <Header />
            <main>{children}</main>
        </Meta>
    )
}

export default Layout
