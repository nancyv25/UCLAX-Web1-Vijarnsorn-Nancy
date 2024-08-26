import styled from "styled-components";
import PropTypes from "prop-types";
import ModalImage from "react-modal-image";

import Accolades from "./Accolades/Accolades";

const StaffMember = ({ member }) => {
    const { name, small, large, yearStarted, accolades } = member;

    return (
        <StaffMemberStyled>
            <ModalImage small={small} large={large} alt={name} />
            <h3>{name}</h3>
            <div className="bottom">
                <p>
                    <b>Year Started:</b> {yearStarted}
                </p>

                <Accolades accolades={accolades} />
            </div>
        </StaffMemberStyled>
    );
};

export default StaffMember;

// prop-types
StaffMember.propTypes = {
    member: PropTypes.object.isRequired,
};

const StaffMemberStyled = styled.div`
    background-color: #ddbab8;

    img {
        display: block;
    }

    .bottom {
        padding: 10px;
    }

    h3 {
        color: #cbe3d5;
        background-color: #58675f;
        padding: 5px 10px;
        margin: 0px;
    }
`;
