import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../Redux/store/store";
import BlogCard from "./BlogCard";
import { useEffect } from "react";
import { getRecentBlogs } from "../Redux/slice/postsSlice";

const RecentBlogs = () => {
const dispatch = useDispatch();
    const recentBlogs = useSelector((state: RootState) => state.posts.recentBlogs);
    useEffect(() => {
        dispatch(getRecentBlogs());
    }, [dispatch]);

    if (recentBlogs.length === 0) return null;

    return (
        <section className="w-full bg-white dark:bg-brand-dark text-main-text transition-colors duration-300">
            <h2 className="text-2xl font-bold mb-32">Recent blog posts</h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-32">
                {recentBlogs.map((post, index) => {
                    let containerClasses = "flex-col sm:flex-row items-center sm:items-stretch";
                    let imageClasses = "w-full sm:w-[320px] h-200";

                    if (index === 0) {
                        containerClasses = "flex-col xl:row-span-2"; 
                        imageClasses = "w-full h-228";
                    }
                    if (index === 3) {
                        containerClasses = "flex-col xl:flex-row items-center xl:items-stretch xl:col-span-2 mt-16";
                        imageClasses = "w-full xl:w-1/2 h-228";
                    }
                    return (
                        <BlogCard 
                            key={post.id} 
                            post={post} 
                            containerClasses={containerClasses}
                            imageClasses={imageClasses}
                            titleClasses="text-lg"
                        />
                    );
                })}

            </div>
        </section>
    );
};

export default RecentBlogs;