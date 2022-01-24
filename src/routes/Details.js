import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';
import Wrap from '../components/Wrap';
function Detail() {
  const { id } = useParams(); // url의 상세 정보

  const [detail, setDetail] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
  };
  console.log(detail);

  // useEffect
  useEffect(() => {
    getMovie();
  }, []);

  //return
  return (
    <Wrap
      background={detail.background_image_original}
      image={detail.large_cover_image}
      title={detail.title}
      intro={detail.description_intro}
      genre={detail.genres}
      runtime={detail.runtime}
      year={detail.year}
    />
  );
}
export default Detail;
