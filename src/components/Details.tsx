import React from "react";
import CategoryTag from "./CategoryTag";
import type { BlogSection, ContentLine, ContentList,BlogPost } from "../data/posts";

interface DetailsProps {
    currentBlog: BlogPost; 
}

const Details = ({ currentBlog }: DetailsProps) => {
    return (
        <section className="w-full flex flex-col gap-24">
            <div className="flex flex-col gap-32">
                <p className="text-sm text-purple-700 dark:text-purple-400 font-semibold">
                    By {currentBlog.author} &bull; {currentBlog.date}
                </p>
                <h1 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                    {currentBlog.title}
                </h1>
                <div className="w-full overflow-hidden mt-8">
                    <img 
                        src={currentBlog.mainImage} 
                        alt={currentBlog.title} 
                        className="w-full h-auto object-cover"
                    />
                </div>
                <p className="text-md lg:text-lg font-normal mt-12 text-gray-600 dark:text-gray-300">
                    {currentBlog.description}
                </p>
            </div>
            <div className="flex flex-col gap-40 mt-16">
                {currentBlog.sections?.map((section: BlogSection) => (
                    <div key={section.id} className="flex flex-col gap-20">
                        {section.sectionImage && (
                            <div className="w-full overflow-hidden mt-12">
                                <img 
                                    src={section.sectionImage} 
                                    alt="" 
                                    className="w-full h-auto object-cover" 
                                />
                            </div>
                        )}
                        {section.imageCaption && (
                            <p className={`text-base text-center text-brand-gray max-w-567 w-full mx-auto ${
                                section.id === "sec-4-1" ? "font-bold" : "font-normal"
                            }`}>
                                {section.imageCaption}
                            </p>
                        )}
                        <div className="flex flex-col gap-16">
                            {section.paragraphs?.map((para: ContentLine) => {
                                
                                return (
                                    <React.Fragment key={para.id}>
                                        <div className="text-base leading-relaxed text-brand-gray">
                                        {para.sectionTitle && <h4 className="block font-bold text-brand-gray text-lg mt-2">{para.sectionTitle}</h4>}

                                            {para.linkText && para.text?.includes(para.linkText) ? (
                                                <>
                                                    {(() => {
                                                        const parts = para.text!.split(para.linkText!);
                                                        return (
                                                            <>
                                                                <span>{parts[0]}</span>
                                                                <a 
                                                                    href={para.url || "#"} 
                                                                    target="_blank" 
                                                                    rel="noopener noreferrer"
                                                                    className="underline decoration-1 underline-offset-4 font-medium hover:text-sky-500"
                                                                >
                                                                    {para.linkText}
                                                                </a>
                                                                <span>{parts[1]}</span>
                                                            </>
                                                        );
                                                    })()}
                                                </>
                                            ) : (
                                                para.text && <p>
                                                {para.boldPrefix && (
                                                <span className="font-bold mr-1">
                                                    {para.boldPrefix}
                                                </span>
                                            )}                                            
                                            {para.text}
                                            </p>
                                            )}
                                        </div>
                                        {para.lists && para.lists.map((list: ContentList) => {
                                            const ListTag = list.type === "ordered" ? "ol" : "ul";
                                            
                                            return (
                                                <ListTag 
                                                    key={list.id} 
                                                    className="list-decimal list-outside flex flex-col leading-relaxed mt-4 ml-16 text-brand-gray"
                                                >
                                                    {list.items.map((item, index) => {
                                                        if (list.linkText && item.includes(list.linkText)) {
                                                            const parts = item.split(list.linkText);
                                                            return (
                                                                <li key={index} className="list-disc list-outside">
                                                                    <span>{parts[0]}</span>
                                                                    <a 
                                                                        href={list.url || "#"} 
                                                                        target="_blank" 
                                                                        rel="noopener noreferrer"
                                                                        className="underline decoration-1 underline-offset-4 hover:text-sky-500"
                                                                    >
                                                                        {list.linkText}
                                                                    </a>
                                                                    <span>{parts[1]}</span>
                                                                </li>
                                                            );
                                                        }
                                                        return (
                                                            <li key={index} className="list-disc list-outside">
                                                                {item}
                                                            </li>
                                                        );
                                                    })}
                                                </ListTag>
                                            );
                                        })}
                                        
                                    </React.Fragment>
                                );
                            })}
                        </div>
                        
                    </div>
                ))}
            </div>
            <div className="flex flex-wrap gap-8 mt-16 sm:mt-0">
            {currentBlog.categories.map((category, index) => (
                <CategoryTag key={index} name={category.name} color={category.color} />
            ))}
            </div>
        </section>
    );
};

export default Details;