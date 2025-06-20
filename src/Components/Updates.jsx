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
   <section className="mt-16 px-6 w-dvw h-dvh">
      <h2 className="text-3xl font-semibold text-white mb-6">🛰️ Latest Space News</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map(article => (
          <a
  href={article.url}
  target="_blank"
  rel="noopener noreferrer"
  className="group relative rounded-xl overflow-hidden shadow-md bg-gray-900 hover:bg-gray-800 transition duration-300 flex flex-col"
>
  {/* Image */}
  <img
    src={article.image_url}
    alt={article.title}
    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
  />

  {/* Content */}
  <div className="p-4 flex flex-col flex-1 justify-between text-white">
    <h3 className="text-lg font-semibold mb-2 group-hover:text-[#66b2ff] transition">
      {article.title}
    </h3>

    <p className="text-sm text-gray-400 line-clamp-3 mb-4">
      {article.summary}
    </p>

    <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
      <span>{new Date(article.published_at).toLocaleDateString()}</span>
      <span className="italic opacity-60">Source: {article.news_site}</span>
    </div>
  </div>
</a>

        ))}
      </div>
    </section>
  )
}
