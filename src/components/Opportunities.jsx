import React from "react";
import CommonCards from "./CommonCards";

const Opportunities = () => {
  const images = [
    {
      title: "College",
      subtitle: "Students",
      image:
        "https://cdn.unstop.com/uploads/images/compete/student.png?d=560x340",
      link: "https://unstop.com/competitions?eligible=students",
      small: "open to",
    },
    {
      title: "Working",
      subtitle: "Professionals",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/63d112f8a025d_professional.png?d=560x340",
      link: "https://unstop.com/competitions?eligible=corporate",
      small: "open to",
    },
  ];

  return (
    <CommonCards
      images={images}
      heading={"Explore Opportunities"}
      content={
        "Participate, Showcase Skills!"
      }
      type={"common"}
    />
  );
};

export default Opportunities;
