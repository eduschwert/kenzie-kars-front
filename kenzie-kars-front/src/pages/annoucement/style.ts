import styled from "styled-components";

export const ContainerAnnoucement = styled.div`
  background: linear-gradient(
    to bottom,
    var(--color-brand1) 80px,
    var(--color-brand1) 520px,
    var(--color-grey7) 530px,
    var(--color-grey7) 100%
  );
  position: relative;
  width: 100%;
`;

export const ContentAnnoucement = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 78px;
  gap: 1.5rem;
  width: 100%;
`;

export const ContentImgs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: space-between;
  margin-top: 50px;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

export const ImageAndDescription = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 700px) {
    max-width: 65%;
    width: 62%;
  }
`;
export const PhotoAndProfile = styled.div`
  max-width: 34%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DivImageCar = styled.div`
  display: flex;
  width: 100%;
  height: 355px;
  background: var(--color-grey10);
  border-radius: var(--radius-2);
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  /* @media (min-width: 700px) {
    min-width: 476px;
    width: 62%;
  }

  @media (min-width: 1000px) {
    min-width: 640px;
    width: 62%;
  }

  @media (min-width: 1200px) {
    min-width: 775px;
  }

  @media (min-width: 1400px) {
    min-width: 810px;
  } */
  */ img {
    width: 440px;
    height: 224px;
    object-fit: contain;
  }
`;

export const InformationCar = styled.div`
  width: 100%;
  max-height: 350px;
  background: var(--color-grey10);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: var(--radius-2);
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
`;

export const YearMileage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > buttom {
    width: 5rem;
  }

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const InformationCarDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const ContentPhotosCar = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  padding: 2rem;
  -webkit-box-pack: center;
  justify-content: center;
  min-width: 320px;
  max-height: 460px;
  gap: 1rem;
  border-radius: var(--radius-2);
  background: var(--color-grey10);
`;

export const PhotosCar = styled.ul`
  width: auto;
  max-width: 390px;
  max-height: 380px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  > li {
    background-color: var(--color-grey7);
    width: 90px;
    height: 90px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border-radius: var(--radius-2);

    :hover {
      border: 2px solid var(--color-brand1);
      cursor: pointer;
    }

    & > img {
      max-width: 100%;
      max-height: 100%;
      display: block;
    }

    @media (min-width: 800px) {
      width: 120px;
      height: 117px;
    }

    > img {
      width: 80px;
      height: 60px;
    }
  }
`;

export const ProfileUser = styled.div`
  background-color: var(--color-grey10);
  border-radius: var(--radius-2);
  min-width: 320px;
  max-height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  div {
    width: 352px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;

    p {
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      color: #212529;
    }
  }

  .photoProfile {
    width: 104px;
    height: 104px;
    border-radius: 50%;
    background-color: var(--color-brand2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 36px;
    line-height: 53px;
    color: var(--color-grey10);
  }

  button {
    height: 48px;
    background: #0b0d0d;
    border: 1.5px solid #0b0d0d;
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;
    line-height: 0px;
    color: #ffffff;
    opacity: 0.9;
  }
`;

export const ContentDescriptionComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 62%;
  min-width: 320px;
`;

export const DescriptionCar = styled.div`
  background-color: var(--color-grey10);
  max-width: 100%;
  min-height: 250px;
  border-radius: var(--radius-2);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2rem;
  div {
    /* max-width: 90%; */
    display: flex;
    flex-direction: column;
    gap: 20px;
    p {
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      color: #212529;
    }

    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: #495057;
    }
  }
`;

export const CommentsAboutCar = styled.div`
  background-color: var(--color-grey10);
  max-width: 100%;
  height: auto;
  border-radius: var(--radius-2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 36px 44px;
  gap: 40px;
`;

export const ProfileComments = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 35px;
  max-height: 100vh;
  overflow-y: scroll;
`;

export const ProfileInitials = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  padding: 1rem;
  position: absolute;

  display: flex;
  gap: 10px;
  align-items: center;

  > div { */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: #e34d8c;
  border-radius: 150px;
  font-weight: 500;
  font-size: 8px;
  line-height: 0px;
  color: #ffffff;
`;

export const NameDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 15px;
`;

export const InputAndButtonFormComment = styled.div`
  width: 100%;
  min-height: 350px;
  background-color: var(--color-grey10);

  & > div {
    border-radius: var(--radius-2);

    padding: 36px 44px;
  }
  /* background-color: var(--color-grey10);
  max-width: 100%;
  height: 315px;
  border-radius: var(--radius-2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  margin-bottom: 8rem;
  position: relative;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    width: 100%;
    padding: 1rem;
    position: absolute;
  } */

  /* textarea {
    width: 90%;
    height: 128px;
    border-radius: var(--radius-2);
    padding: 15px;
    resize: none;
    margin-left: 1.5rem;*/

  /* button {
    width: 108px;
    height: 38px;
    position: relative;
    margin-left: 55%;
    bottom: 72px;
    background: var(--color-brand1);
    border: 1.5px solid var(--color-brand1);
    border-radius: var(--radius-2);
    font-weight: 600;
    font-size: 14px;
    line-height: 0px;
    color: #ffffff;

    @media (min-width: 700px) {
      margin-left: 70%;
    }

    @media (min-width: 1000px) {
      margin-left: 74%;
    }

    @media (min-width: 1400px) {
      margin-left: 78%;
    }
  } */
`;

export const FormComment = styled.form`
  position: relative;

  & > textarea {
    resize: none;
    width: 100%;
    height: 125px;
    margin-top: 15px;
  }
  & > button {
    position: absolute;
    top: 60%;
    right: 20px;
  }
`;
