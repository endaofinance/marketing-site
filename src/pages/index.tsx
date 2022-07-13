import * as React from "react";
import Hero from "./sections/hero2";
import FAQs from "./sections/faqs";
import SignupForm from "./sections/signup-form";
import Footer from "./sections/footer";
import UseCases from "./sections/use-cases";
import Testimonial from "./sections/testimonial";
import GetStarted from "./sections/get-started";
import {
  CameraIcon,
  CurrencyDollarIcon,
  HeartIcon,
  VariableIcon,
  BeakerIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";
import { Helmet } from "react-helmet";
import VideoCards from "./sections/video-cards";

const IndexPage = function () {
  const navigation = [
    {
      name: "How it Works",
      href: "#how-it-works",
    },
    { name: "Join The Community", href: "#join-community" },
    { name: "Use Cases", href: "#use-cases" },
    { name: "FAQs", href: "#faqs" },
    { name: "Developers", href: "https://docs.endao.finance" },
  ];
  const features = [
    {
      name: "Creators",
      description:
        "Content creators use Endao to raise funding from their community so they can keep creating amazing content.",
      icon: CameraIcon,
    },
    {
      name: "Charity",
      description:
        "Charities and nonprofits use Endao to raise money and fund daily operations.",
      icon: HeartIcon,
    },
    {
      name: "Open Source",
      description:
        "Open source maintainers use Endao to raise money from their software's users so they can fund continued development.",
      icon: VariableIcon,
    },
    {
      name: "Research",
      description:
        "Researchers use Endao to raise funding and explore fields of research where grant money may be lacking or unavailable.",
      icon: BeakerIcon,
    },
    {
      name: "Payments",
      description:
        "Creators of goods and services use Endao for recurring  payments",
      icon: CurrencyDollarIcon,
    },
    {
      name: "Special Projects",
      description:
        "There are too many potential use cases for Endao. Join our community and let us know how you want to fund projects",
      icon: QuestionMarkCircleIcon,
    },
  ];
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Endao - Permanent funding using the power of DeFi</title>
        <link rel="canonical" href="http://endao.finance" />
      </Helmet>
      <main>
        <Hero navigation={navigation} appButtonEnabled={true} />
        <UseCases
          headline="How you can fund the future"
          subheader="Endao can be used many ways to fund the future. Here are just a few of the ideas we can think of."
          callout="Use Cases"
          features={features}
        />
        <GetStarted />
        <VideoCards />
        <FAQs />
        <Testimonial />
        <SignupForm />
        <Footer />
      </main>
    </>
  );
};

export default IndexPage;
