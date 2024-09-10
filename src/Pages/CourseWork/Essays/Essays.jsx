import styled from "styled-components";

import SingleEssay from "./SingleEssay";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>

            <SingleEssay
                question={`Explain the difference between HTML, CSS and JavaScript?`}
            >
                <ul>
                    <h1>
                        <p>HTML: Content</p>{" "}
                    </h1>
                    <li> Stands for HyperText Markup Language</li>

                    <li>
                        Creates the basic structure of a website – the core of a
                        website, it is the building block of a website
                    </li>
                    <li>
                        HTML uses tags to annotate different types of content on
                        a web page
                    </li>
                    <li>
                        HTML denotes things like beginning of a paragraph,
                        bolding of font, adding photo captions
                    </li>
                    <li>HTML is the information </li>
                    <li>
                        The foundation every webpage is built on - Language that
                        determines how web page and information is displayed
                    </li>
                    <li>Just getting the information</li>
                    <li>
                        Hypertext markup language: Basic foundation structure of
                        website (skeleton) – framework – informational content
                    </li>
                    <li>Marking up information in a way that is meaningful</li>
                </ul>

                <ul>
                    <h1>
                        <p>CSS: Appearance </p>
                    </h1>
                    <li>To make the content look pretty, from layout POV</li>
                    <li>A way to shape and enhance HTML (building blocks)</li>
                    <li>
                        A way to add some style and enhance formatting that was
                        created with HTML
                    </li>
                    <li>
                        For example: HTML is used to add the header text for the
                        website, but CSS helps stylize the header (font,
                        background color, etc.)
                    </li>
                    <li>Also helps website adapt to different screen sizes</li>
                    <li>
                        Visual appearance – layout, fonts, aesthetics, visual
                        hierarchy (some interactions)
                    </li>
                </ul>
                <ul>
                    <h1>
                        <p>JavaScript: Behavior</p>{" "}
                    </h1>
                    <li>Interactive part </li>
                    <li>Making it an application</li>
                    <li> Builds on top of both CSS and HTML</li>
                    <li>
                        Can help develop keyboard shortcuts or change color of a
                        button when moused over
                    </li>
                    <li>
                        Allows you to change CSS and HTML making it more
                        engaging with animations, embedded videos, etc.
                    </li>
                    <li>
                        Perform actions/interactions – listening to
                        events/conditions – event driven doesn’t have to be user
                        event and can be time based event
                    </li>
                    <li>Behavior of the page</li>
                </ul>
                <ul>
                    <h1>
                        <p>Comparison:</p>
                    </h1>
                    <li>
                        Difference between HTML and CSS – HTML was developed
                        first, and wasn’t able to adapt to be more stylistic, so
                        CSS was created to build off of the existing HTML
                    </li>
                    <li>
                        HTML creates basic structure, CSS adds style to
                        structure, JavaScript uses all of what HTML and CSS
                        created and makes it interactive and more functional
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`What is the difference between Git and Github?`}
            >
                <ul>
                    <h1>
                        <p>Git: </p>
                    </h1>
                    <li>
                        What is it? It is simple and easy to use distributed
                        version control tool where developers can take snapshots
                        of codes at any point in time and create a version
                        history that maps the software development process
                    </li>
                    <li>
                        Free version – installed locally – open source licensed
                    </li>
                    <li>
                        Focused on version control and code sharing – can share
                        with any developers from anywhere in the world
                    </li>
                    <li>
                        No user management features, but GitHub has a built-in
                        user management system - Command-line tool
                    </li>
                    <li>By Linux</li>
                </ul>
                <ul>
                    <h1>
                        <p>GitHub: </p>
                    </h1>
                    <li>Paid online service built to run Git in a cloud</li>
                    <li>Provides a graphical user interface </li>
                    <li>A space to upload Git repositories</li>
                    <li>Has a built-in user management system</li>
                    <li>Active marketplace for tool integration</li>
                    <li>By Microsoft </li>
                    <li>Focused on centralized source code hosting</li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`Q3 What is the difference between jQuery and React?`}
            >
                <ul>
                    <h1>
                        <p>Differences</p>
                    </h1>
                    <li>
                        Relies on traditional DOM manipulation where its tree is
                        updated from the root all the way down, so updates take
                        more time when applications are complex and large vs
                        React employs the Virtual DOM, enhancing the update
                        process and making ti faster than jQuery
                    </li>
                    <li>
                        Virtual DOM makes it a more dynamic and responsive
                        application when compared to jQuery’s traditional DOM
                    </li>
                    <li>
                        Difference #1: Syntax – although both use JavaScript
                        syntax, different internal frameworks are used for
                        interacting with DOM – jQuery leverages native
                        JavaScript methods whereas React uses its structures and
                        methods for DOM manipulation
                    </li>
                    <li>
                        Difference #2: Data Binding – jQuery data binding has to
                        be done manually through some codes, but Reach has a
                        one-way data binding feature so UI in Reach apps are
                        updated automatically when changes are made – no manual
                        coding needed
                    </li>
                </ul>
                <ul>
                    <h1>
                        <p>jQuery</p>
                    </h1>
                    <li>Simplifies web development</li>
                    <li> Simple and lightweight JavaScript library</li>
                    <li>
                        Older utility library that provides quick solution to
                        simple problems
                    </li>
                    <li>
                        Features: effects and animations, HTML/DOM manipulation,
                        CSS manipulation, Utilities, JSON Parsing, AJAX
                    </li>
                </ul>
                <ul>
                    <h1>
                        <p>React</p>
                    </h1>
                    <li>More modern and feature-rich choice</li>
                    <li>
                        Open-source, efficient, declarative, robust and flexible
                        JavaScript library
                    </li>
                    <li>Create interactive UI elements</li>
                    <li>
                        Offers reusable library code which helps in cutting down
                        the user interface development time and reduces the
                        margin of error.
                    </li>
                    <li>
                        Framework dedicated to building user interfaces quickly
                    </li>
                    <li>
                        Features: components, Virtual DOM, JSX, One-way Data
                        Binding, Performance, Simplicity
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`What is the difference between a Front-End and Back-End Developer?`}
            >
                <ul>
                    <h1>
                        <p>Frontend Development:</p>
                    </h1>
                    <li>
                        Focuses on creating a fully functional, responsive, and
                        well-designed UI
                    </li>
                    <li>Translates website design into functional code</li>
                    <li>
                        Conducts quality and usability testing and bug fixes
                    </li>
                    <li>Uses HTML, CSS, JavaScript, frontend frameworks</li>
                    <li>Each user has their own copy of an application</li>
                </ul>
                <ul>
                    <h1>
                        <p>Backend Development:</p>
                    </h1>
                    <li>
                        Creating reliable architecture that supports the
                        frontend development
                    </li>
                    <li>
                        Uses programming languages like Java, Python, Ruby,
                        APIs, and database management systems
                    </li>
                    <li>
                        Creates the structure that allows website to function
                    </li>
                    <li>
                        Components of website work together well behind the
                        scenes
                    </li>
                    <li>
                        Handles architecture, back-end logic, data storage and
                        security
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`In React, what are the different ways we can link to resources (e.g. Root Relative vs Document Relative)?`}
            >
                <ul>
                    <li>
                        Using LINK from react-router-dom and it supports all
                        common element props
                    </li>
                    <li>Using anchor tag</li>
                    <li>Using useNavigate() hook from react-router-dom</li>
                    <li>
                        Root-Relative path
                        <ul>
                            <li>
                                {" "}
                                starts with forward slash – HTML is a site
                                root-relative path to a file
                            </li>
                        </ul>
                        <ul>
                            <li>Root of domain or resource</li>
                        </ul>
                        <ul>
                            <li>
                                Starts from the root of the domain or
                                application
                            </li>
                        </ul>
                        <ul>
                            <li>Give directions to the resource</li>
                        </ul>
                        <li>
                            Document Relative
                            <ul>
                                <li>
                                    . . / or . / stars from the document you are
                                    in
                                </li>
                            </ul>
                        </li>
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`What is the difference between jpg, gif, png and svg images?`}
            >
                <ul>
                    <h1>
                        <p>JPG:</p>
                    </h1>
                    <li>Little storage space</li>
                    <li>Supports millions of colors</li>
                    <li>
                        JPG is lossy which means unnecessary information is
                        deleted permanently when file is compressed
                    </li>
                    <li>
                        Ideal for photographs and uploading images to websites,
                        social media, etc.
                    </li>
                    <li>
                        From class: Does not support transparency or animation
                    </li>
                </ul>
                <ul>
                    <h1>
                        <p>GIF:</p>
                    </h1>
                    <li>
                        Lossless meaning GIF retains all the data in the file,
                        but smaller than JPG
                    </li>
                    <li>Only supports 256 indexed colors</li>
                    <li>
                        Intended for small, simple graphic icons but can be
                        animated
                    </li>
                    <li>
                        From class: Graphic Inerchange Format, Animation,
                        Transparency no alpha transparency
                    </li>
                </ul>
                <ul>
                    <h1>
                        <p>PNG:</p>
                    </h1>
                    <li>Ideal for static images but can support animation</li>
                    <li>Lossless</li>
                    <li>PNG-8 – can only support 256 index colors</li>
                    <li>PNG-34 – supports up to 16 million colors</li>
                    <li>Supports transparency</li>
                </ul>
                <ul>
                    <h1>
                        <p>SVG:</p>
                    </h1>
                    <li>Vector image file</li>
                    <li>Remains crisp and clear at any resolution</li>
                    <li>Not pixels </li>
                    <li>
                        Can be animated, supports transparency, and any color
                        combos
                    </li>
                    <li>
                        Lossless but tend to be large files when compared to the
                        other formats
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`Define the following Agile roles: Product Manager, Scrum Master, UX Designer, Developer/Engineer, QA/SDET, and DevOps.

`}
            >
                <ul>
                    <h1>
                        <p>Product Manager:</p>
                    </h1>
                    <li>
                        Responsible for setting the overall vision and strategy
                        of product
                    </li>
                    <li>
                        Makes the decisions on which features to develop to
                        achieve vision
                    </li>
                    <li>Creates roadmap and timeline for deadlines</li>
                    <li>Assign tasks and assure tasks are met</li>
                    <li>Analyzing client feedback</li>
                </ul>
                <ul>
                    <h1>
                        <p>Scrum Master:</p>
                    </h1>
                    <li>Creating and onboarding project teams</li>
                    <li>Interface between scrum team and other people/teams</li>
                    <li>
                        Conduit between product owners and development teams
                    </li>
                    <li>Ensures scrum process is followed</li>
                    <li>Focuses on time-boxed iterations called sprints</li>
                </ul>
                <ul>
                    <h1>
                        <p>UX Designer:</p>
                    </h1>
                    <li>
                        Customer research and relay the information to the
                        Product Team
                    </li>
                    <li>
                        Identifies wants and needs of customers and finding the
                        solution to optimize product performance
                    </li>
                    <li>
                        Ensures the software functions well and is user-friendly
                    </li>
                    <li>
                        Must work closely with developers, product owners, and
                        other stakeholders to continue to improve the user
                        experience
                    </li>
                </ul>
                <ul>
                    <h1>
                        <p>Developer/Engineer:</p>
                    </h1>
                    <li>Build the product</li>
                    <li>
                        Responsible for programming, testing, and debugging the
                        product
                    </li>
                </ul>
                <ul>
                    <h1>
                        <p>QA/SDET:</p>
                    </h1>
                    <li>
                        Help the development team define and implement automated
                        testing strategies
                    </li>
                    <li>
                        Eg. automated test scripts, test suites, and test
                        frameworks that can efficiently test the software during
                        development process
                    </li>
                    <li>Spot and fix bugs and defects </li>
                    <li>
                        Assists with improving software development and testing
                        processes
                    </li>
                </ul>
                <ul>
                    <h1>
                        <p>DevOps:</p>
                    </h1>
                    <li>
                        Enables team to build, test, and release software faster
                        and more reliably
                    </li>
                </ul>
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
