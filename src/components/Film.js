const Film = ({name, url}) => {

    return (
        <>
        {/* the anchor and href tag here creates a url using the name and url on imdb */}

            <li>
            <a href={url}>{name}</a>
            </li>

        </>


    );



};

export default Film;