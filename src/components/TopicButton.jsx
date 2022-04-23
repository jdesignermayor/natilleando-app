import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../assets/icons/arrow-right.svg';

export const TopicButton = ({ href, title, colorClassName }) => {
  return (
    <a
      href={`#${href}`}
      className={`flex ${colorClassName} justify-between transition font-bold items-center bg-primaryLight px-3 h-16 hover:opacity-60 border-transparent hover:border-black`}
      rel="noopener"
    >
      {title}
      <img src={Icon} alt="" />
    </a>
  );
}
    
    TopicButton.propTypes = {
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
    }
    