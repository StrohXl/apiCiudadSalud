import '../styles/globals.css'
import { Layout } from 'antd';
import 'antd/dist/reset.css';
import { useRouter } from 'next/router';
import { FloatButton } from 'antd';
import Nav from '../components/Nav';
import {ArrowUpOutlined} from "@ant-design/icons"
const { Header, Content } = Layout;
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return <Layout>

      <div>
        {router.pathname == '/'? '': (
            <Header className='flex justify-end items-center'>
            <Nav />
          </Header>
        )}
        <Content >
          <Component {...pageProps} />
        </Content>
        <FloatButton.BackTop icon={<ArrowUpOutlined />} type={'primary'} />

      </div>


  

  </Layout>
}

export default MyApp
