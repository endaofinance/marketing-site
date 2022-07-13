import * as React from "react";
import VideoModal from "./video-modal";

export default function Videos() {
  const videos = [
    {
      title: "Video: Create an Endaoment",
      subtext: "Recieve funding for your organization",
      imageUrl: "/creating-endaoment.png",
      description:
        "This video walks you through how to create an endaoment. The video is the perfect getting started guide for content creators, nonprofit fundraisers, or anyone else who needs funding.",
      videoUrl: "https://www.youtube.com/embed/vUFA9YOEhJs",
    },
    {
      title: "Video: Fund an Endaoments",
      subtext: "Find Endaoments and fund them",
      imageUrl: "/funding-endaoment.png",
      description:
        "This video walks you through the basics on finding and funding Endaoments that have been created on the Endao protocol",
      videoUrl: "https://www.youtube.com/embed/omto5jXmwGU",
    },
  ];
  return (
    <div className="bg-white" id="how-it-works">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              How It Works
            </h2>
            <p className="text-xl text-gray-500">
              Take a look a these videos to get an understanding of how the
              Endao protocol works and how you can use it.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
            >
              {videos.map((video) => (
                <li key={video.title} className="sm:py-8">
                  <VideoModal videoUrl={video.videoUrl}>
                    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                      <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                        <img
                          className="object-cover shadow-lg rounded-lg"
                          src={video.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <div className="space-y-4">
                          <div className="text-lg leading-6 font-medium space-y-1">
                            <h3>{video.title}</h3>
                            <p className="text-indigo-600">{video.subtext}</p>
                          </div>
                          <div className="text-lg">
                            <p className="text-gray-500">{video.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </VideoModal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
