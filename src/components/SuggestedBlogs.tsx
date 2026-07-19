import { useEffect } from "react";
import BlogCard from "./BlogCard";
import type { BlogCategory} from "../data/posts";
import { useDispatch, useSelector } from "react-redux";
import { getSuggestedBlogs } from "../Redux/slice/postsSlice";
import type { RootState } from "../Redux/store/store";


interface SuggestedBlogsProps {
categories: BlogCategory[];
currentBlogId: string;
}

const SuggestedBlogs = ({ currentBlogId, categories }: SuggestedBlogsProps) => {
    const dispatch = useDispatch();
    const suggestedBlogs = useSelector((state: RootState) => state.posts.suggestedBlogs);
    useEffect(() => {
        dispatch(getSuggestedBlogs({ currentBlogId, categories }));
    }, [dispatch, currentBlogId, categories]);

    return (
        <section className="w-full lg:w-342 pt-32 lg:pt-0 lg:pl-24 shrink-0">
            <h2 className="text-xl font-bold mb-24">Suggested Blogs</h2>

            <div className="flex flex-col gap-32">
                {suggestedBlogs.length > 0 ? (
                    suggestedBlogs.map((blog) => (
                        <BlogCard
                            key={blog.id}
                            post={blog}
                            containerClasses="flex-col items-start"
                            imageClasses="w-full h-180"
                            titleClasses="text-lg"
                        />
                    ))
                ) : (
                    <p className="text-sm text-gray-400 dark:text-gray-500">No suggested blogs found.</p>
                )}
            </div>
        </section>
    );
};

export default SuggestedBlogs;