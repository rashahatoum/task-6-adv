import { FiArrowUpRight } from "react-icons/fi";
import type { BlogPost } from "../data/posts";
import CategoryTag from "./CategoryTag";
import { useNavigate } from "react-router-dom";

export interface BlogCardProps {
    post: BlogPost;
    containerClasses: string; 
    imageClasses: string;  
    titleClasses?: string;   
}

const BlogCard = ({ post, containerClasses, imageClasses, titleClasses }: BlogCardProps) => {

    const navigate = useNavigate();
    
    return (
        <div onClick={() => navigate(`/blog/${post.id}`)} className={`w-full group cursor-pointer flex gap-24 ${containerClasses}`}>
            <img 
                src={post.mainImage} 
                alt={post.title}
                className={`object-cover shrink-0 ${imageClasses}`}
            />
            <div className="flex flex-col gap-24 w-full">
                <div className="flex flex-col">
                    <p className="text-sm font-semibold text-purple-700 mb-12">
                        {post.author} &bull; {post.date} 
                    </p>
                    <div className="flex items-start justify-between gap-16">
                        <h3 className={`font-semibold mb-8 ${titleClasses}`}>
                            {post.title}
                        </h3>
                        <FiArrowUpRight className="text-2xl shrink-0 text-main-text group-hover:text-purple-700 transition-colors duration-200" />
                    </div>
                    <p className="m-0 text-brand-gray dark:text-desc-text-dark">
                        {post.description}
                    </p>
                </div>
                <div className="flex flex-wrap gap-8 mt-16 sm:mt-0">
                    {post.categories.map((category, index) => (
                        <CategoryTag key={index} name={category.name} color={category.color} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogCard;