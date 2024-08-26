import styled from "styled-components";

import { staffData } from "../GalleryData.js";

import StaffMember from "./IndImage.jsx";

const StaffList = () => {
    console.log({ staffData });
    return (
        <StaffListStyled>
            {staffData.map((member) => {
                return <StaffMember key={member.id} member={member} />;
            })}
        </StaffListStyled>
    );
};

export default StaffList;

const StaffListStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
`;
