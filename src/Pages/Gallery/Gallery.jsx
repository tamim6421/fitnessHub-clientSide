// Import necessary stylesheets

import { Helmet } from "react-helmet-async";
import Navbar from "../../Shared/Navbar/Navbar";
import Title from "../../Components/Title/Title";

import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Components/Loader/Loader";

const Gallery = () => {
  const axiosPublic = useAxiosPublic();
  const [images, setImages] = useState([]);

  useEffect(() => {
    axiosPublic.get('/images')
      .then(res => {
        console.log(res.data);
        setImages(res.data);
      })
  }, [axiosPublic]);

  // const changePage = () => {
  //   console.log('page change');
  //   // Implement logic for loading more images
  // }

  return (
    <div className="mt-20">
      <Navbar></Navbar>
      <Helmet>
        <title>FitnessHub | Gallery</title>
      </Helmet>

      <div>
        <p className="absolute left-[20%] bottom-[50%] text-5xl md:text-8xl -z-10 opacity-20">Our Gallery Page</p>
      </div>

      <div className="mt-36 text-center">
        <Title>Our Gallery</Title>
      </div>

      <InfiniteScroll
        dataLength={images?.length}
        // next={changePage}
        hasMore={true}
        // loader={<Loader></Loader>}
        className="flex flex-wrap justify-center"
      >
        {images?.map((img, i) => (
          <div key={i} className="card w-96 bg-base-100 shadow-xl m-4">
            <figure className="px-10 pt-10">
              <img src={img.url} alt="Shoes" className="rounded-xl w-full h-auto" />
            </figure>
          </div>
        ))}
      </InfiniteScroll>

    </div>
  );
};

export default Gallery;



// const [images, setImages] = useState([
//   {
//       "_id": "65603f00948e8620a7d1a18a",
//       "name": "Image 1",
//       "url": "https://i.ibb.co/L0hnyyv/pexels-anush-gorak-1229356.jpg"
//     },
//     {
//       "_id": "65603f00948e8620a7d1a18b",
//       "name": "Image 2",
//       "url": "https://i.ibb.co/PFqBQqF/pexels-binyamin-mellish-116079.jpg"
//     },
//     {
//       "_id": "65603f00948e8620a7d1a18c",
//       "name": "Image 3",
//       "url": "https://i.ibb.co/zP97L23/pexels-cesar-gale-o-3289711.jpg"
//     },
//     {
//       "_id": "65603f00948e8620a7d1a18d",
//       "name": "Image 4",
//       "url": "https://i.ibb.co/W2G1bjS/pexels-jonathan-borba-3076509-2.jpg"
//     },
//     {
//       "_id": "65603f00948e8620a7d1a18e",
//       "name": "Image 5",
//       "url": "https://i.ibb.co/R4YpzkF/pexels-li-sun-2294361.jpg"
//     },
//     {
//       "_id": "65603f00948e8620a7d1a18f",
//       "name": "Image 6",
//       "url": "https://i.ibb.co/yPV3drz/pexels-mister-mister-3490348.jpg"
//     },
//     {
//       "_id": "65603f00948e8620a7d1a190",
//       "name": "Image 7",
//       "url": "https://i.ibb.co/W24c06C/pexels-monstera-production-6999241.jpg"
//     },
//     {
//       "_id": "65603f00948e8620a7d1a191",
//       "name": "Image 8",
//       "url": "https://i.ibb.co/R792X85/pexels-pixabay-47084.jpg"
//     },
//     {
//       "_id": "65603f00948e8620a7d1a192",
//       "name": "Image 9",
//       "url": "https://i.ibb.co/Y20dfVz/pexels-pixabay-260352.jpg"
//     },
//     {
//       "_id": "65603f00948e8620a7d1a193",
//       "name": "Image 10",
//       "url": "https://i.ibb.co/2FcM9Rw/pexels-pixabay-260447.jpg"
//     },
//     {
//       "_id": "65603f00948e8620a7d1a194",
//       "name": "Image 11",
//       "url": "https://i.ibb.co/f43VT4K/pexels-shotpot-4047039.jpg"
//     },
//     {
//       "_id": "65603f00948e8620a7d1a195",
//       "name": "Image 12",
//       "url": "https://i.ibb.co/wL5hfnp/pexels-tima-miroshnichenko-6389075.jpg"
//     },
// ])
// const [page, setPage] = useState(2)

// const fetchData = ()=>{
// const fetchImage = async () =>{
//   try {
//       const res = await fetch(`https://fithub-server-eta.vercel.app/images?page=${page}&limit=10`)
//       const data = await res.json()
//       setImages( (image) => [...image, ...data])
//   } catch (error) {
//       console.log(error)
//   }
// }
// setPage(page + 1)
// fetchImage()
// }

// const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
//   queryKey: ["articles"],
//   queryFn: getArticles,
//   getNextPageParam: (lastPage) => {
//       if (lastPage.prevOffset + 10 > lastPage.articlesCount) {
//           return false;
//       }
//       return lastPage.prevOffset + 10;
//   }

// })
// console.log(data)



// const articles = data?.pages.reduce((acc, page) => {
//   return [...acc, ...page.articles]
// }, [])
