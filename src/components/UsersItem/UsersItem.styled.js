import styled from "styled-components";

export const UserCard = styled.li`
  position: relative;
  width: 380px;
  height: 460px;
  background-color: pink;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const UserInfoText = styled.p`
  font-family: "Montserrat";

  font-weight: 500;
  font-size: 20px;
  line-height: 1, 2;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 80px;
  height: 80px;

  background: rgb(235, 216, 255);
  box-shadow: rgba(0, 0, 0, 0.06) 0px 4.39163px 4.39163px,
    rgb(174, 123, 227) 0px -2.19582px 4.39163px inset,
    rgb(251, 248, 255) 0px 4.39163px 3.29372px inset;
  clip-path: circle(40px at center);
  border-radius: 50%;
`;

export const Avatar = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

export const CenterLine = styled.div`
  position: absolute;
  transform: translate(0, -50%);
  left: 0px;
  top: 50%;
  width: 380px;
  height: 8px;
  background: rgb(235, 216, 255);
  box-shadow: rgba(0, 0, 0, 0.06) 0px 3.43693px 3.43693px,
    rgb(174, 123, 227) 0px -1.71846px 3.43693px inset,
    rgb(251, 248, 255) 0px 3.43693px 2.5777px inset;
  z-index: 0;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 26px;
`;

export const UserInfoAndButtonContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;

  width: 208px;
  bottom: 36px;
  left: 50%;
  transform: translate(-50%, 0);
`;
