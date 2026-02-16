import PropTypes from 'prop-types';
import './ProjectCard.scss';

const ProjectCard = ({ title, description, tags, linkUrl, linkText, imageUrl }) => {
  return (
    <article className="project-card">
      <div className="card-image">
        {imageUrl && <img src={imageUrl} alt={`Screenshot of ${title} project`} />}
      </div>
      
      <div className="card-content">
        <h3>{title}</h3>
        
        <div className="tags" aria-label="Technologies used">
          {tags && tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>

        <p>{description}</p>

        <a href={linkUrl} className="card-link" target="_blank" rel="noopener noreferrer">
          {linkText} <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </article>
  );
};

// Contract for component
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string), 
  linkUrl: PropTypes.string.isRequired,
  linkText: PropTypes.string,               
  imageUrl: PropTypes.string
};

// default val
ProjectCard.defaultProps = {
  linkText: "View Project",
  tags: []
};

export default ProjectCard;