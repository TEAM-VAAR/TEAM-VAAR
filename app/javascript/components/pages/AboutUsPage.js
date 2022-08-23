import React, { Component, useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

class AboutUs extends Component {
  render() {
    return (
      <>
      <h2>About Us</h2>
        <AboutUsCarousel />
        <div>Footer</div>
      </>
    );
  }
}

export default AboutUs;

const items = [
  {
    src: "https://avatars.githubusercontent.com/u/74055731?v=4",
    altText: "Project Manager",
    caption: "Alvin Accad",
    key: 1,
    linkedin: <a href="https://www.linkedin.com/in/alvin-a-a1b826189/">linkedin</a>,
    GitHub: <a href=" https://github.com/alvingithub1">GitHub</a>,
    description:
      "I am a full-stack developer with experience building websites and web applications. I enjoy working with others on solving problems and communicating what can be done to solve them.",
  },
  {
    src: "https://avatars.githubusercontent.com/u/73265363?v=4",
    altText: "Product Manager",
    caption: "Alexander Ballou",
    key: 2,
    linkedin: <a href="https://www.linkedin.com/in/alexander-ballou/">linkedin</a>,
    GitHub: <a href="https://github.com/necessities">GitHub</a>,
    description:
      "I am a full stack web developer and software engineer with a background in IT and DevOps. I have experience working for a wide variety of organizations from large federal level ones to small consulting teams. I spend a lot of my free time tinkering with computers and learning about technology.",
  },
  {
    src: "https://ca.slack-edge.com/T04B40L2C-U03K7G8TYU9-c8c0f535ad1b-512",
    altText: "Code Lead",
    caption: "Ricky Fort",
    key: 3,
    linkedin: <a href="https://www.linkedin.com/in/ariseson/">linkedin</a>,
    GitHub: <a href="https://github.com/AriseSon">GitHub</a>,
    description:
      "My name is Ricky Fort, my position in Team VAAR is the Tech Lead.",
  },
  {
    src: "https://avatars.githubusercontent.com/u/107439475?s=400&u=1f2cea854675cd8c7bf65d929f070581aa24ace0&v=4",
    altText: "Design Lead",
    caption: "Venessa Palmer",
    key: 4,
    linkedin: <a href="https://www.linkedin.com/in/venessa-palmer-855038225/">linkedin</a>,
    GitHub: <a href="https://github.com/VenessaSP">GitHub</a>,
    description:
      "Currently I am a student at a boot-camp style web development school in San Diego,  LEARN Academy. Here I am acquiring the necessary skills to become a junior web-developer. With over 480 hours of intense tutelage from experienced senior software developers, I am eager to apply my newly acquired skillset and be a contribution to the team! For this project I was responsible for styling, I wanted to create a visual representation of what the app is all about! I want users to focus on what the app is intended for while putting fun stylistic designs. ",
  },
];

function AboutUsCarousel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <p className="description"> {item.description}</p>
        <h3 className="linkedin"> {item.linkedin}</h3>
        <p className="GitHub"> {item.GitHub}</p>
        

        <img src={item.src} alt={item.altText} />

        <CarouselCaption
          captionText={item.altText}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      interval={false}
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}
