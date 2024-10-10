import Layout from "layout"
import { Link } from "react-router-dom"

function Home () {
  return (
    <div>
      <Layout>
        <Link to={"/posts"}> zzz</Link>
      </Layout>
      
    </div>
  )
}

export default Home