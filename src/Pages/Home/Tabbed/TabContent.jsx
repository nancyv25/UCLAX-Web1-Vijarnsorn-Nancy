import styled from "styled-components";
import PropTypes from "prop-types";
import ModalImage from "react-modal-image";

import { breakpoints } from "@/Common/useMediaQuery";

const TabContent = ({ curTab }) => {
    const { title, small, large, text } = curTab;
    return (
        <TabContentStyled>
            <div className="column1">
                <ModalImage small={small} large={large} alt={title} />;
            </div>
            <div className="column2">
                <h3>{title}</h3>

                <div dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </TabContentStyled>
    );
};

export default TabContent;

// prop-types
TabContent.propTypes = {
    curTab: PropTypes.object.isRequired,
};

const TabContentStyled = styled.div`
    padding: 20px;
    background-color: #58675f;

    @media ${breakpoints.isMediumAndUp} {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1rem;
    }

    img {
        max-width: 100%;
        display: block;
        margin: 0px auto 15px;
    }

    h3 {
        font-size: 30px;
        color: #ddbab8;
    }

    p {
        font-size: 18px;
        color: #cbe3d5;
        margin-bottom: 20px;
        line-height: 150%;
    }
`;
