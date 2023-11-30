import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Navbar from '../../Shared/Navbar/Navbar';
import Title from '../../Components/Title/Title';






const getPhotos = async ({ pageParam = 0 }) => {
    // console.log(pageParam, 'startindex tracking');
    const res = await fetch(`https://fithub-server-eta.vercel.app/image?limit=12&offset=${pageParam}`);
    const photos = await res.json();
  
 
    return { ...photos, prevStartIndex: pageParam }
}

const Gallery = () => {

    // https://fithub-server-eta.vercel.app/image?limit=5&offset=3
    const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
        queryKey: ["photos"],
        queryFn: getPhotos,
        getNextPageParam: (lastPage) => {
            if (lastPage.prevStartIndex + 12 > lastPage?.photosCount) {
                return false;
            }
            return lastPage.prevStartIndex + 12;
        }
    })




    const photos = data?.pages?.reduce((photos, page) => {
        // console.log(photos, page, 'photos inside photos');
        // console.log(photos);
        return [...photos, ...page.photos]
    }, [])





    return (
       <div>
        <Navbar></Navbar>
         <div className='mt-20'>
          
         <div className="text-center pt-20 mb-10">
         <Title>Our Photos Gallery</Title>
         </div>

          {/* // infinitty loading */}
          <div>
              <InfiniteScroll
                  dataLength={photos ? photos.length : 0}
                  next={() => fetchNextPage()}
                  hasMore={hasNextPage}
                  loading={<Skeleton count={6} />}
              >
                  <div className="w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10">
                      {isLoading && photos?.length === 0 ? (
                      
                          <Skeleton count={6} />
                      ) : (
                          photos?.map((photo, idx) => {
                              return (
                                <div 
                                key={idx}
                                className="card bg-base-100 shadow-xl">
                                <figure className="p-5 box">
                                <img className='object-cover w-full h-[300px]' src={photo?.url} alt="image loading" />
                                </figure>
                                
                              </div>
                              );
                          })
                      )}
                  </div>


              </InfiniteScroll>
          </div>
      </div>
       </div>
    );
};

export default Gallery;