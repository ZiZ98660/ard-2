import React from "react";
import { news } from "@/public/assets/data/dummydata";
import { Title, TitleSm } from "@/components/Title";

function getYouTubeEmbedUrl(url) {
  // Works for both youtu.be and youtube.com/watch
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{11})/);
  if (match) return `https://www.youtube.com/embed/${match[1]}`;
  // For mobile links and others (e.g. m.youtube.com)
  const altMatch = url.match(/[?&]v=([\w-]{11})/);
  if (altMatch) return `https://www.youtube.com/embed/${altMatch[1]}`;
  return null;
}

export default function NewsPage() {
  return (
    <section className="agency bg-top pb-12">
      <div className="sass-container">
        <div className="heading-title">
          <Title className={"text-[32px]"} title="NEWS & EVENTS" />
        </div>
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 max-w-7xl mx-auto items-start mt-12">
          {/* Videos Section */}
          <section className="flex-1 bg-white rounded-xl p-6 shadow hover:shadow-lg transition relative">
            <TitleSm title="Videos" />
            <br />
            <div className="space-y-9">
              {news[0]?.children?.map((video, i) => {
                const embed = getYouTubeEmbedUrl(video.link);
                return (
                  <div key={i} className="">
                    <div className="aspect-video rounded-lg overflow-hidden shadow-md mb-2 max-w-xl mx-auto">
                      {embed ? (
                        <iframe
                          src={embed}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full border-0 bg-black"
                        />
                      ) : (
                        <a
                          href={video.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          View Video
                        </a>
                      )}
                    </div>
                    <p className="text-center misson-p">{video.title}</p>
                  </div>
                );
              })}
            </div>
          </section>
          {/* Publications Section */}
          <section className="w-full md:w-auto bg-white rounded-xl p-6 shadow hover:shadow-lg transition relative">
            <TitleSm title="Publications" />
            <br />
            <ul className="space-y-5">
              {news[1]?.children?.map((item, idx) => (
                <li key={idx} className="">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 rounded-md bg-[#f5f8fa] text-[#2562b6ef] hover:bg-blue-50 hover:text-blue-900 font-medium shadow-sm transition"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
