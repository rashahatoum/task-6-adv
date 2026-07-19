import NewlettersSection from "../components/NewlettersSection"
import Pagination from "../components/Pagination"

const Newsletter = () => {
  return (
    <div className="px-32 lg:px-112 py-60 ">
      <NewlettersSection
        title="Stories and interviews"
        desc="Subscribe to learn about new product features, the latest in technology, solutions, and updates."
        placeholder="Enter your email"
        btn="Subscribe"
        privacy="We care about your data in our"
        link="privacy policy"
      />
      <Pagination 
      postsPerPage={3} 
      newsletterStyle=" 
      [&:nth-child(3)]:md:col-span-2 [&:nth-child(3)]:lg:col-span-3 
      lg:[&:nth-child(3)]:md:col-span-1 [&:nth-child(3)]:lg:col-span-1 "
      section="newsletter"
      />
    </div>
  )
}

export default Newsletter