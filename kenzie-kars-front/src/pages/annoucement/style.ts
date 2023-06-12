import styled from "styled-components";

export const ContainerAnnoucement = styled.div`
  background: linear-gradient(
    to bottom,
    var(--color-brand1) 80px,
    var(--color-brand1) 520px,
    var(--color-grey7) 530px,
    var(--color-grey7) 100%
  );
`;

export const ContentAnnoucement = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 78px;
  gap: 20px;

  .contentImgs {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    justify-content: space-between;
    margin-top: 50px;

    .responsiveImgsAndDescription {
      max-width: 62%;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .responsivePhotosAndProfile {
      max-width: 34%;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
`;

export const DivImagemCar = styled.div`
  display: flex;
  width: 100%;
  height: 355px;
  background: var(--color-grey10);
  border-radius: var(--radius-2);
  align-items: center;
  justify-content: center;

  .externalCar {
    width: 440px;
    height: 224px;
    object-fit: contain;
  }
`;

export const InformationCar = styled.div`
  width: 100%;
  height: 250px;
  background: var(--color-grey10);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 38px;
  padding: 20px 36px;
  border-radius: var(--radius-2);
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;

  .infosPriceYearKm {
    display: flex;
    justify-content: space-between;
  }

  .yearAndKm {
    display: flex;
    gap: 20px;
  }

  button {
    background-color: var(--color-brand1);
    border-radius: var(--radius-2);
    border: 1px solid var(--radius-2);
    width: 80px;
    height: 32px;
    color: var(--color-grey10);

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const ContentPhotosCar = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  padding: 30px 26px;
  -webkit-box-pack: center;
  justify-content: center;
  width: 440px;
  height: 380px;
  max-width: 100%;
  gap: 20px;
  border-radius: var(--radius-2);
  background: var(--color-grey10);
`;

export const PhotosCar = styled.div`
  width: auto;
  max-width: 390px;
  height: 380px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  div {
    background-color: var(--color-grey7);
    width: 120px;
    height: 117px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border-radius: var(--radius-2);
  }
  .photoCar {
    width: 100px;
    height: 60px;
  }
`;

export const ProfileUser = styled.div`
  background-color: var(--color-grey10);
  width: 440px;
  height: 426px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
    width: 206px;
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
`;

export const DescriptionCar = styled.div`
  background-color: var(--color-grey10);
  max-width: 100%;
  height: 213px;
  border-radius: var(--radius-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    max-width: 90%;
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
  align-items: flex-start;
  padding: 36px 44px;
  gap: 40px;

  .allignCommentAndProfile {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const ProfileComment = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  .photoProfileComment {
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
  }

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #212529;
  }

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    color: #868e96;
  }
`;

export const InputAndButtonForComment = styled.div`
  background-color: var(--color-grey10);
  max-width: 100%;
  height: 315px;
  border-radius: var(--radius-2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 36px 44px;
  margin-bottom: 50px;
  .allignProfileAndInput {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    width: 48%;
    position: absolute;
  }
  textarea {
    width: 100%;
    height: 128px;
    border-radius: var(--radius-2);
    padding: 15px;
    resize: none;
  }

  button {
    width: 108px;
    height: 38px;
    position: relative;
    margin-left: 82%;
    bottom: 72px;
    background: var(--color-brand1);
    border: 1.5px solid var(--color-brand1);
    border-radius: var(--radius-2);
    font-weight: 600;
    font-size: 14px;
    line-height: 0px;
    color: #ffffff;
  }
`;
