import { v4 as uuid } from "uuid";

const emptyData = {
  personalInfo: {
    firstName: "",
    lastName: "",
    title: "",
    description: "",
  },
  contactInfo: {
    email: "",
    phone: "",
    location: "",
    homePage: "",
    linkedin: "",
    github: "",
  },
  workExperience: [],
  education: [],
  skills: [],
};

export default emptyData;
