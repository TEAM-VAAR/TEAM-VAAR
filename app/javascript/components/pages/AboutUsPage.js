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
    src: "https://picsum.photos/id/700/1200/400",
    altText: "Project Manager",
    caption: "Alvin Accad",
    key: 1,
    linkedin: <a href="https://www.linkedin.com/in/alvin-a-a1b826189/">linkedin</a>,
    GitHub: <a href=" https://github.com/alvingithub1">GitHub</a>,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    src: "https://picsum.photos/id/678/1200/400",
    altText: "Product Manager",
    caption: "Alexander Ballou",
    key: 2,
    linkedin: <a href="https://www.linkedin.com/in/alexander-ballou/">linkedin</a>,
    GitHub: <a href="https://github.com/necessities">GitHub</a>,
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  },
  {
    src: "https://picsum.photos/id/456/1200/400",
    altText: "Code Lead",
    caption: "Ricky Fort",
    key: 3,
    linkedin: <a href="https://www.linkedin.com/in/ariseson/">linkedin</a>,
    GitHub: <a href="https://github.com/AriseSon">GitHub</a>,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
  },
  {
    src: "https://picsum.photos/id/500/1200/400",
    altText: "Design Lead",
    caption: "Venessa Palmer",
    key: 4,
    linkedin: <a href="https://www.linkedin.com/in/venessa-palmer-855038225/">linkedin</a>,
    GitHub: <a href="https://github.com/VenessaSP">GitHub</a>,
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem",
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
