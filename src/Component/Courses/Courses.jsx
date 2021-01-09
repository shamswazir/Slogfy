import React, { Component } from "react";
import "./Coures.css";
import image01 from "../../Assets/Images/choose-us-image-01.png";
import image02 from "../../Assets/Images/choose-us-image-02.png";
import image03 from "../../Assets/Images/choose-us-image-03.png";

export default class Courses extends Component {
  state = {
    courseDetails: [
      {
        name: "Web Developement",
        img: image01,
        id: "1",
        info:
          "12 Years' of Experience in Web Design & Development Services. Secure, Fast & Accessible Options for in India.",
      },
      {
        name: "App Developement",
        img: image02,
        id: "2",
        info:
          "Are you going to create your mobile app? No matter, how big or small the size of your project, we’ll work with you at best.",
      },
      {
        name: "Branding",
        img: image03,
        id: "3",
        info:
          "Slogfy NYC is a team of professionals who are passionate about bringing your brand’s idea and exciting your audience.",
      },
    ],
    selectedCourse: [
      {
        name: "Web Developement",
        img: image01,
        id: "1",
        info:
          "12 Years' of Experience in Web Design & Development Services. Secure, Fast & Accessible Options for in India.",
      },
    ],
    courseName: "Click Button",
  };
  handleSelectCourse = (key) => {
    console.log(key);
    const courses = this.state.courseDetails.filter((course) => {
      if (key === course.name) {
        return course;
      } else if (key === course.name) {
        return course;
      } else if (key === course.name) {
        return course;
      }
    });
    console.log();
    this.setState({ selectedCourse: courses });
  };
  render() {
    const { courseDetails, selectedCourse } = this.state;
    console.log(selectedCourse);

    return (
      <div className="courseContainer">
        <div className="coursebtn">
          {this.state.courseDetails.map((course) => {
            return (
              <div
                className="courseHedding"
                onClick={() => this.handleSelectCourse(course.name)}
              >
                {course.name}

                <div className="box"> </div>
              </div>
            );
          })}
        </div>
        <div className="courseDetilsContainer">
          <div className="courseImage">
            <img
              src={
                selectedCourse.length ? selectedCourse[0].img : "Click buttun"
              }
              alt=""
            />
          </div>
          <div className="couresInfo">
            <h1>
              {selectedCourse.length ? selectedCourse[0].name : "Click buttun"}
            </h1>
            <p>
              {selectedCourse.length ? selectedCourse[0].info : "Click buttun"}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
