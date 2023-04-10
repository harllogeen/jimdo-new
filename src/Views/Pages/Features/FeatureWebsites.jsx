import React, {useEffect} from "react";
import { SecondaryButton } from "../../../Component/common/Button";
import Domain from "../../../Assets/Img/domain.jpg";
import Pages from "../../../Assets/Img/pages.jpg";
import Google from "../../../Assets/Img/google.jpg";
import Support from "../../../Assets/Img/support.jpg";
import Gdpr from "../../../Assets/Img/gdpr.jpg";
import Jimdo from "../../../Assets/Img/jimdo-users.jpg";
import testimonial from "../../../Assets/Img/testimonial.jpg";
import website from "../../../Assets/Img/testimonial-website.jpg";
import "../../../App.css";
import PrimaryButton from "../../../Component/common/PrimaryButton";
import MainFooter from "../../../Component/Footer/MainFooter";
import AOS from "aos";
import "aos/dist/aos.css";

const FeatureWebsites = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <section>
        <div className="grid grid-cols-2 items-center gap-8 m-10 ">
          <img src={Domain} alt="domain"  data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" />
          <div>
            <p className="text-fcNavy6 text-3xl font-semibold">
              Build trust with your professional
              <br /> domain
            </p>
            <p className="py-4 font-thin text-fcNavy6">
              Show customers they’re in safe hands with a web address that’s
              unique to your business. Free for your first contract term.
            </p>
            <SecondaryButton>Get Started</SecondaryButton>
          </div>
        </div>
        <div className="grid grid-cols-2  items-center mx-10 my-20 gap-8">
          <div>
            <p className="text-fcNavy6 text-3xl font-semibold ">
              More pages, more impact
            </p>
            <p className="py-4  font-thin text-fcNavy6 ">
              Hook visitors with a modern website that showcases the best of
              you. Add galleries, videos, and content to connect with customers
              who find you online.
            </p>
            <SecondaryButton>Get Started</SecondaryButton>
          </div>
          <div>
            <img src={Pages} alt="domain"  data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" />
          </div>
        </div>

        <div className="grid grid-cols-2 items-center mx-10 my-20 gap-8 ">
          <img src={Google} alt="domain"  data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" />
          <div>
            <p className="text-fcNavy6 text-3xl font-semibold">
              Get found on Google step-by-
              <br />
              step
            </p>
            <p className="py-4 font-thin text-fcNavy6">
              We handle digital housekeeping for you and give you tips on how to
              improve your Google ranking to boost traffic to your site.
            </p>
            <SecondaryButton>Get Started</SecondaryButton>
          </div>
        </div>
        <div className="grid grid-cols-2  items-center mx-10 my-20 gap-8">
          <div>
            <p className="text-fcNavy6 text-3xl font-semibold ">
              Expert support on your schedule
            </p>
            <p className="py-4  font-thin text-fcNavy6 ">
              Need help faster? We’re here for you and we’ll back you up with
              support from real people who speak small business.
            </p>
            <SecondaryButton>Get Started</SecondaryButton>
          </div>
          <div>
            <img src={Support} alt="domain"  data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" />
          </div>
        </div>

        <div className="grid grid-cols-2 items-center mx-10 my-20 gap-8 ">
          <img src={Gdpr} alt="domain"  data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" />
          <div>
            <p className="text-fcNavy6 text-3xl font-semibold">
              100% GDPR-compliant legal
              <br /> pages for peace of mind
            </p>
            <p className="py-4 font-thin text-fcNavy6">
              Our Legal Text Generator creates personalized legal pages like
              your Imprint, Privacy Policy, and T&Cs—covered by the Trusted
              Shops Guarantee.* (* Avaiable for EU websites)
            </p>
            <SecondaryButton>Get Started</SecondaryButton>
          </div>
        </div>
        <div>
          <div className=" w-full" id="testimonial">
            {/* <img src={testimonial} alt="tesi" className="relative" /> */}
            <div className="text-center absolute right-8 top-14 space-y-8">
              <img src={website} alt="website" className="w-[500px]" />
              <p className="text-4xl font-GilroySemiBold text-fcNavy6" data-aos="fade-up">
                „Fortunately, I can maintain
                <br /> and update my online store
                <br /> really easily on my own.“
              </p>
              <p className="text-fcNavy6 font-semibold text-sm" data-aos="fade-up">Birgit,<span className="font-thin" > spectrum-fashion.de</span> </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2  items-center mx-10 my-20 gap-8">
          <div  data-aos="fade-up" data-aos-anchor-placement="top-center">
            <p className="text-fcNavy6 text-3xl font-semibold ">Why Jimdo?</p>
            <p className="py-4  font-thin text-fcNavy6 ">
              Developed with small businesses and the self-employed in mind, we
              have all the features you need to take your business online. No
              coding, no complicated tools. And we'll be with you every step of
              the way.
            </p>
            <PrimaryButton>I'm in. Let's get Started</PrimaryButton>
          </div>
          <div>
            <img src={Jimdo} alt="domain" />
          </div>
        </div>
        <div className="bg-fcNavy6 text-center py-8 ">
          <p className="text-4xl font-semibold text-white">
            Ready to go <span className="text-primary">professional?</span>
          </p>

          <p className="text-xl font-semibold text-white py-4 ">
            We’ve got a plan for you.
          </p>
          <PrimaryButton>Let's do this!</PrimaryButton>
        </div>
      </section>
      <MainFooter />
    </div>
  );
};

export default FeatureWebsites;
