import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LabCard.module.scss';
import Button from './Button'; 

const LabCard = ({ item }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasGallery = item.gallery && item.gallery.length > 0;
  const [isEasterEggOpen, setIsEasterEggOpen] = useState(false);
  const navigate = useNavigate();
  // Gallery Nav
  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === item.gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? item.gallery.length - 1 : prevIndex - 1
    );
  };

  const handleThumbnailClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }
  };

  const handleActionClick = () => {
    if (item.customAction === 'slideUpPhone') {
      setIsEasterEggOpen(true);
    } else {
      setIsModalOpen(true);
    }
  };

  const handleSendLove = () => {
    setIsEasterEggOpen(false);
    navigate('/#comms');
    setTimeout(() => {
      const commsSection = document.getElementById('comms');
      if (commsSection) commsSection.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleMouseEnter = () => {
    if (item.link && (item.modal || !item.customAction)) {
      const img = new Image();
      img.src = item.link;
    }

    if (item.slideImage) {
      const img = new Image();
      img.src = item.slideImage;
    }

    if (item.gallery && item.gallery.length > 0) {
      item.gallery.slice(0, 2).forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      if (e.key === 'Escape') setIsModalOpen(false);

      if (hasGallery) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };

    if (isModalOpen || isEasterEggOpen) {
      document.body.style.overflow = 'hidden';
      if (isModalOpen) setCurrentImageIndex(0); 
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, isEasterEggOpen, hasGallery]);

  return (
    <>
    <article className={styles.labCard} onMouseEnter={handleMouseEnter}>
      
      <header className={styles.cardHeader}>
        <div className={styles.headerLeft}>
          {item.image && (
            <div 
              className={`${styles.thumbnailFrame} ${isAnimating ? styles.wigglePop : ''}`}
              onClick={handleThumbnailClick}
              role="button"
              tabIndex="0"
              aria-label="Wiggle image"
            >
              <img 
                src={`/assets/images/${item.image}`} 
                alt={`${item.title} artifact preview`} 
                className={styles.thumbnailImg}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          )}
        </div>
        
        <div className={styles.headerRight}>
          <span className={styles.categoryTag}>[❖] {item.category}</span>
        </div>
      </header>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{item.title}</h3>
        <p className={styles.cardDesc}>{item.description}</p>
        
        <ul className={styles.tagList}>
          {item.tags.map(tag => (
            <li key={tag} className={styles.tag}>{tag}</li>
          ))}
        </ul>

        {(item.link || hasGallery || item.customAction) && (
          <div className={styles.cardActions}>
            {item.modal || item.customAction ? (
              <Button onClick={handleActionClick} variant="design" type="button">
                Inspect Artifact &rarr;
              </Button>
            ) : (
              <Button href={item.link} variant="design">
                Inspect Artifact &rarr;
              </Button>
            )}
          </div>
        )}
      </div>
    </article>

    {isModalOpen && item.modal && (
      <div 
        className={styles.modalOverlay} 
        onClick={() => setIsModalOpen(false)}
        role="dialog"
        aria-modal="true"
      >
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <button 
            className={styles.closeModalBtn} 
            onClick={() => setIsModalOpen(false)}
            aria-label="Close modal"
          >
            &times; Close
          </button>

          {hasGallery && item.gallery.length > 1 && (
            <button className={`${styles.galleryNav} ${styles.navLeft}`} onClick={prevImage} aria-label="Previous image">
              &#10094;
            </button>
          )}

          <img 
            src={hasGallery ? item.gallery[currentImageIndex] : item.link} 
            alt={`Full view of ${item.title}`} 
            className={styles.modalImage} 
          />

          {hasGallery && item.gallery.length > 1 && (
            <button className={`${styles.galleryNav} ${styles.navRight}`} onClick={nextImage} aria-label="Next image">
              &#10095;
            </button>
          )}

          {hasGallery && item.gallery.length > 1 && (
            <div className={styles.galleryCounter}>
              {currentImageIndex + 1} / {item.gallery.length}
            </div>
          )}
        </div>
      </div>
      )}

      {isEasterEggOpen && item.customAction === 'slideUpPhone' && (
        <div className={styles.easterEggOverlay} onClick={() => setIsEasterEggOpen(false)}>
          
          <div className={styles.phoneSlider} onClick={(e) => e.stopPropagation()}>
            <img 
              src={item.slideImage} 
              alt="Hand holding phone with Odd Bob" 
              className={styles.phoneImage}
            />
            
            <button className={styles.sendLoveBtn} onClick={handleSendLove}>
              Send Love
            </button>
            
            <button className={styles.closePhoneBtn} onClick={() => setIsEasterEggOpen(false)}>
              Close
            </button>
          </div>

        </div>
      )}
    </>
  );
};

export default LabCard;