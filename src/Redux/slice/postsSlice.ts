import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { blogPosts, type BlogPost } from "../../data/posts";

interface PostsState {
    items: BlogPost[];
    recentBlogs: BlogPost[];
    suggestedBlogs: BlogPost[];
    totalPages: number;
    currentPosts: BlogPost[];
    pages: {
        home: number;
        newsletter: number;
    };
    selectedBlog: BlogPost | null;
}

const initialState: PostsState = {
    items: blogPosts,
    recentBlogs: [],
    suggestedBlogs: [],
    totalPages: 1,
    currentPosts: [],
    pages: {
        home: 1,
        newsletter: 1,
    },
    selectedBlog: null,
};

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        getRecentBlogs: (state) => {
            state.recentBlogs = [...state.items]
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .slice(0, 4);
        },
        getSuggestedBlogs: (
            state,
            action: PayloadAction<{ currentBlogId: string; categories: { name: string }[] }>
        ) => {
            const { currentBlogId, categories } = action.payload;

            if (!categories || categories.length === 0) {
                state.suggestedBlogs = [];
                return;
            }
            const currentCategoryNames = categories.map(category => category.name.trim().toLowerCase());

            state.suggestedBlogs = [...state.items]
                .filter((blog) => {
                    if (blog.id === currentBlogId) return false;
                    return blog.categories?.some((category) =>
                        currentCategoryNames.includes(category.name.trim().toLowerCase())
                    );
                })
                .sort((a, b) => {
                    const scoreA = a.categories.filter(category => currentCategoryNames.includes(category.name.trim().toLowerCase())).length;
                    const scoreB = b.categories.filter(category => currentCategoryNames.includes(category.name.trim().toLowerCase())).length;
                    return scoreB - scoreA;
                });
        },
        paginatePosts: (
            state,
            action: PayloadAction<{ section: 'home' | 'newsletter'; postsPerPage: number; page: number }>
        ) => {
            const { section, postsPerPage, page } = action.payload;
            state.pages[section] = page;
            const sortedBlogs = [...state.items].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
            const targetBlogs = section === 'home' ? sortedBlogs.slice(4) : sortedBlogs;
            state.totalPages = Math.ceil(targetBlogs.length / postsPerPage);
            const indexOfLastPost = page * postsPerPage;
            const indexOfFirstPost = indexOfLastPost - postsPerPage;
            state.currentPosts = targetBlogs.slice(indexOfFirstPost, indexOfLastPost);
        },
        selectBlog: (state, action: PayloadAction<string>) => {
            const foundBlog = state.items.find((post) => post.id === action.payload);
            state.selectedBlog = foundBlog || null;
        }
    },
});


export const { getRecentBlogs, getSuggestedBlogs, paginatePosts, selectBlog } = postsSlice.actions;
export default postsSlice.reducer;