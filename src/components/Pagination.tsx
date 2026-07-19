import { useDispatch, useSelector } from "react-redux";
import BlogCard from "./BlogCard";
import type { RootState } from "../Redux/store/store";
import { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { paginatePosts } from "../Redux/slice/postsSlice";

interface PaginationSectionProps {
    postsPerPage?: number;
    newsletterStyle?:string;
    section: 'home' | 'newsletter';
}

const Pagination = ({ postsPerPage = 6 , newsletterStyle , section}: PaginationSectionProps) => {
const dispatch = useDispatch();
    const currentPage = useSelector((state: RootState) => state.posts.pages[section]);
    const { currentPosts, totalPages } = useSelector((state: RootState) => state.posts);
    useEffect(() => {
        dispatch(paginatePosts({ section, postsPerPage, page: currentPage }));
    }, [section, postsPerPage, currentPage]);

    const handlePageChange = (newPage: number) => {
        dispatch(paginatePosts({ section, postsPerPage, page: newPage }));
    };

    if (currentPosts.length === 0) return null;

    const getPageNumbers = (): (number | string)[] => {
        if (totalPages <= 5) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }
        if (currentPage <= 3) {
            return [1, 2, 3, "...", totalPages];
        }
        if (currentPage >= totalPages - 2) {
            return [1, "...", totalPages - 2, totalPages - 1, totalPages];
        }
        return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
    };

    const pages = getPageNumbers();

    return (
        <section className="w-full pt-60 ">
            <h2 className="text-2xl font-bold mb-32">All blog posts</h2>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32`}>
                {currentPosts.map((blog) => (
                    <BlogCard
                        key={blog.id}
                        post={blog}
                        containerClasses={`flex-col items-start ${newsletterStyle}`}
                        imageClasses="w-full h-240"
                        titleClasses="text-2xl"
                    />
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center items-center mt-40 border-t border-[#EAECF0] dark:border-[#EAECF057] pt-20 w-full">
                    <div className="flex flex-col items-center justify-between w-full gap-20 md:flex-row">
                        <button
                            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                            disabled={currentPage === 1}
                            className="flex items-center gap-8 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-main-text dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-colors duration-250"
                        >
                            <FaArrowLeft className="text-sm" />
                            <span>Previous</span>
                        </button>
                        <div className="flex items-center gap-4">
                            {pages.map((page, index) => {
                                if (page === "...") {
                                    return (
                                        <span key={`dots-${index}`} className="px-12 py-8 text-gray-400 dark:text-gray-600">
                                            ...
                                        </span>
                                    );
                                }
                                return (
                                    <button
                                        key={index}
                                        onClick={() => typeof page === "number" && handlePageChange(page)}
                                        className={`px-16 py-8 text-sm font-medium rounded-lg w-40 h-40 flex items-center justify-center cursor-pointer transition-all duration-250 ${currentPage === page
                                                ? "bg-purple-50 text-purple-700 font-bold"
                                                : " text-brand-gray dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                );
                            })}
                        </div>
                        <button
                            onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="flex items-center gap-8 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-main-text dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-colors duration-250"
                        >
                            <span>Next</span>
                            <FaArrowRight className="text-sm" />
                        </button>

                    </div>
                </div>
            )}
        </section>
    );
};

export default Pagination;