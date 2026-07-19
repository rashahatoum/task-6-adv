import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SuggestedBlogs from "../components/SuggestedBlogs";
import Details from "../components/Details";
import NewlattersSection from "../components/NewlettersSection";
import type { RootState } from "../Redux/store/store";
import { useEffect } from "react";
import { selectBlog } from "../Redux/slice/postsSlice";


const BlogDetails = () => {
const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    useEffect(() => {
        if (id) {
            dispatch(selectBlog(id));
        }
    }, [dispatch, id]);

    const currentBlog = useSelector((state: RootState) => state.posts.selectedBlog)

    if (!currentBlog) {
        return <div className="text-center py-60 font-bold text-red-500">This blog doesn't exist!</div>;
    }

    return (
        <main className="w-full py-60 px-32 lg:px-112">
            <div className="flex flex-col md:flex-row gap-32 items-start w-full">
                <div className="w-full md:max-w-342 order-2 md:order-1 shrink-0">
                    <SuggestedBlogs
                        currentBlogId={currentBlog.id}
                        categories={currentBlog.categories}
                    />
                </div>
                <div className="flex-1 w-full order-1 md:order-2 gap-48">
                <Details currentBlog={currentBlog} />
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-32 items-start w-full">
            <div className="w-full md:max-w-342 order-2 md:order-1 shrink-0 hidden lg:block"></div>
            <div className="flex-1 w-full order-1 md:order-2 gap-48 pt-32">
                <NewlattersSection
                    title="Stories and interviews"
                    desc="Subscribe to learn about new product features, the latest in technology, solutions, and updates."
                    placeholder="Enter your email"
                    btn="Subscribe"
                    privacy="We care about your data in our"
                    link="privacy policy"
                />
                </div>
                </div>
        </main>
    );
};

export default BlogDetails;