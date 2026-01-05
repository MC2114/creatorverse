import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Card({ creator }) {
    
    const favorite = isFavorite(creator.id)

    return (
        <article className="Card">
            <img src={creator.imageURL} alt={creator.name} />
            <h3>{creator.name}</h3>
            <p>{creator.description}</p>

            <footer>
                <div className="social-links">
                    {creator.youtubeURL && (
                        <a
                            href={creator.youtubeURL}
                            target="_blank"
                            aria-label="Youtube"
                        >
                            <i className="fa-brands fa-youtube" />
                        </a>
                    )}

                    {creator.twitterURL && (
                        <a
                            href={creator.twitterURL}
                            target="_blank"
                            aria-label="Youtube"
                        >
                            <i className="fa-brands fa-x-twitter" />
                        </a>
                    )}

                    {creator.instagramURL && (
                        <a
                            href={creator.instagramURL}
                            target="_blank"
                            aria-label="Youtube"
                        >
                            <i className="fa-brands fa-instagram" />
                        </a>
                    )}
                </div>
            </footer>
        </article>
    )
}

export default Card