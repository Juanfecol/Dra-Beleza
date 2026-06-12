import React, { useState } from 'react';
import { ASSETS } from '../constants';
import { X } from 'lucide-react';

export const StoryRing: React.FC = () => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    return (
        <>
            <div className="fixed top-24 md:top-28 left-0 w-full bg-white/70 backdrop-blur-md border-b border-stone-100 z-40">
                <div className="container mx-auto px-4">
                    <div className="flex overflow-x-auto gap-4 scrollbar-hide py-2 px-4 justify-center">
                        {[...ASSETS.testimonials, ...ASSETS.testimonials, ...ASSETS.testimonials, ...ASSETS.testimonials].map((src, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedVideo(src)}
                                className="flex-shrink-0 w-20 h-20 rounded-full p-0.5 bg-gradient-to-tr from-yellow-400 via-brand-500 to-fuchsia-600 cursor-pointer hover:scale-105 transition-transform"
                            >
                                <div className="w-full h-full rounded-full bg-white p-0.5">
                                    <video
                                        src={src}
                                        className="w-full h-full rounded-full object-cover"
                                        muted
                                        autoPlay
                                        loop
                                        playsInline
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selectedVideo && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                     onClick={() => setSelectedVideo(null)}>
                    <div className="relative w-full max-w-xs aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl" 
                         onClick={(e) => e.stopPropagation()}>
                        <button 
                            onClick={() => setSelectedVideo(null)}
                            className="absolute top-4 right-4 z-[101] p-2 bg-black/50 rounded-full text-white hover:bg-black/70 backdrop-blur-sm transition-colors">
                            <X size={28} />
                        </button>
                        <video 
                            src={selectedVideo}
                            className="w-full h-full object-cover"
                            controls
                            autoPlay
                        />
                    </div>
                </div>
            )}
        </>
    );
};
