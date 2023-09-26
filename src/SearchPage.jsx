import React, { Component } from 'react';
import './styles.css'; // Import your CSS file

class TutorSearch extends Component {
  state = {
    images: [
      { src: 'image1.png', text: 'ACT' },
      { src: 'image2.png', text: 'Arabic' },
      { src: 'image3.png', text: 'C++' },
      { src: 'image4.png', text: 'Chem' },
      // Add more images and text here
    ],
    currentIndex: 0,
    isAnimating: false,
    searchText: '',
    showDropdown: false,
  };

  toggleDropdown = () => {
    this.setState((prevState) => ({
      showDropdown: !prevState.showDropdown,
    }));
  };

  handleOptionClick = (text) => {
    this.setState({
      searchText: text,
      showDropdown: false,
    });
  };

  handleNextButtonClick = () => {
    if (this.state.isAnimating) return;
    this.setState({
      isAnimating: true,
    });

    const { currentIndex, images } = this.state;

    // Hide the current set of 4 images with a swipe-right animation
    const updatedCourses = this.state.images.map((image, index) => {
      const slideIndex = (currentIndex + index) % images.length;
      const slide = { ...image };
      slide.transform = 'translateX(-100%)'; // Swipe right animation
      return slide;
    });

    // Update the currentIndex after a short delay
    setTimeout(() => {
      const newCurrentIndex = (currentIndex + 4) % images.length;
      const updatedImages = updatedCourses.map((image, index) => {
        const slideIndex = (newCurrentIndex + index) % images.length;
        const slide = { ...image };
        slide.src = 'images/' + images[slideIndex].src;
        slide.text = images[slideIndex].text; // Update text
        slide.transform = 'translateX(0)'; // Reset the transform
        return slide;
      });

      this.setState({
        currentIndex: newCurrentIndex,
        images: updatedImages,
        isAnimating: false, // Animation complete
      });
    }, 300); // Adjust the timing as needed
  };

  render() {
    const { images, currentIndex, showDropdown, searchText } = this.state;

    return (
      <div>
        <h1>Find your desired tutor!</h1>
        <div id="SearchBar">
          <img className="imgbar" src="images/search.png" alt="Search Icon" />
          <input
            type="text"
            id="search"
            placeholder="What subjects do you need help with?"
            value={searchText}
            onChange={(e) => this.setState({ searchText: e.target.value })}
          />
          <img
            className="imgbar"
            src="images/filter.png"
            id="filterIcon"
            onClick={this.toggleDropdown}
            alt="Filter Icon"
          />
          {showDropdown && (
            <div className="dropdown" id="courseDropdown">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="dropdown-option"
                  onClick={() => this.handleOptionClick(image.text)}
                >
                  {image.text}
                </div>
              ))}
            </div>
          )}
        </div>
        <h2 className="header2">Best Tutors</h2>
        <div id="Tutors" style={{ display: 'inline' }}>
          <div className="Courses">
            {images.map((image, index) => (
              <div key={index} className="container1">
                <img
                  className="course"
                  src={`images/${image.src}`}
                  alt={image.text}
                  style={{ transform: image.transform }}
                />
                <p className="text">{image.text}</p>
              </div>
            ))}
            <button
              className="nextBtn"
              style={{ backgroundColor: 'none' }}
              onClick={this.handleNextButtonClick}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: '60px',
                  color: '#215160',
                }}
              >
                arrow_circle_right
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TutorSearch;
