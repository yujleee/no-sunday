import styled from 'styled-components';
import SearchList from '../components/SearchList';
import { useAppSelector } from '../hooks/useRedux';
import Loader from '../components/Loader';
import useLoading from './../hooks/useLoading';

export default function Media() {
  const [loading] = useLoading();

  const { search } = useAppSelector((state) => state.media);

  if (loading) return <Loader />;

  return (
    <>
      <DetailBackColor>
        <Title>최신미디어</Title>

        <DetailWrap>
          {search.map((item: any) => (
            <SearchList item={item} key={item.id.videoId} />
          ))}
        </DetailWrap>
      </DetailBackColor>
    </>
  );
}

export const DetailBackColor = styled.div`
  background-color: #222;
`;
export const DetailWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 30px 20px;
  overflow: hidden;
  margin: 0 50px;
  padding-top: 20px;
  padding-bottom: 50px;
`;
export const Title = styled.p`
  margin: 0 50px;
  padding-top: 41px;
  font-size: 24px;
  font-weight: 700;
  color: white;
`;
