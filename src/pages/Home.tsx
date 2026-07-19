import Hero from "../components/Hero"
import Pagination from "../components/Pagination"
import RecentBlogs from "../components/RecentBlogs"


const Home = () => {
  return (
    <div>
      <Hero title="THE BLOG"/>
      <div className="px-32 lg:px-112 py-60 ">
      <RecentBlogs />
      <Pagination postsPerPage={6} section="home"/>
      </div>
    </div>
  )
}

export default Home