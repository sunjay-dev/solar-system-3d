import { useEffect, useState } from "react";

export default function Updates() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=4")
            .then(res => res.json())
            .then(data => setArticles(data.results))
            .catch(err => console.error("Error fetching space news:", err));
    }, []);
    return (
        <section className="py-18 px-8 md:px-20 min-w-dvw min-h-dvh" id="updates">
            <h2 className="text-4xl leading-2 font-semibold mt-4 mb-16 text-center">Latest Space News</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {articles.map(article => (
                    <a key={article.id} href={article.url} target="_blank" rel="noopener noreferrer"
                        className="hover:scale-105 flex flex-col sm:flex-row bg-white dark:bg-[#212528] rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                        <div className="w-full sm:w-1/3 h-48 sm:h-auto">
                            <img src={article.image_url} alt={article.title} className="w-full h-full object-cover"/>
                        </div>
                        <div className="p-4 flex flex-col justify-between w-2/3 text-left">
                            <div className="text-xs text-gray-400 mb-1">
                                {new Date(article.published_at).toLocaleDateString("en-US", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                })}
                            </div>
                            <h3 className="text-base font-semibold group-hover:text-blue-600 leading-snug mb-2">{article.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">{article.summary}</p>
                            <div className="mt-3 text-xs text-blue-500 font-medium">{article.news_site}</div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}
