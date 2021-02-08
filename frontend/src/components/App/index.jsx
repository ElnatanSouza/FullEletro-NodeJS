import { lazy, Suspense } from 'react'

const Menu = lazy(() => import('../Menu'))
const Footer = lazy(() => import('../Footer'))



const App = () => {
    return (
        <>
            <Suspense
                fallback={<img src="http://gifmania.com.br/wp-content/uploads/2020/01/carregando.gif" alt="Loading" />}>
                <Menu />
            </Suspense>
            <Suspense fallback={<img src="https://www.blogson.com.br/wp-content/uploads/2017/10/d9933c4e2c272f33b74ef18cdf11a7d5.gif" alt="Aguarde!" />}>
                <Footer />
            </Suspense>
        </>
    )
}
export default App
