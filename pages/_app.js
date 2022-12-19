import '../styles/globals.css'
import { Layout } from 'antd';
import 'antd/dist/reset.css';
import { useRouter } from 'next/router';
import Nav from '../components/Nav';
const { Header, Content } = Layout;
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return <Layout>

      <div>
        {router.pathname == '/'? '': (
            <Header>
            <Nav />
          </Header>
        )}
        <Content>
          <Component {...pageProps} />
        </Content>

      </div>


  

  </Layout>
}

export default MyApp
