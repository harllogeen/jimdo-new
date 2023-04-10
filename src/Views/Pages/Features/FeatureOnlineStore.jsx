import React, { useEffect } from "react";
import { SecondaryButton } from "../../../Component/common/Button";
import Domain from "../../../Assets/Img/domain.jpg";
import Pages from "../../../Assets/Img/pages.jpg";
import payment from "../../../Assets/Img/payment.jpg";
import Support from "../../../Assets/Img/support.jpg";
import Revenue from "../../../Assets/Img/renevue.jpg";
import Jimdo from "../../../Assets/Img/jimdo-users.jpg";
import Social from "../../../Assets/Img/social.jpg";
import Google from "../../../Assets/Img/google.jpg";
import Gdpr from "../../../Assets/Img/gdpr.jpg";
import websiteStore from "../../../Assets/Img/testimonial-website-store.jpg";
import "../../../App.css";
import PrimaryButton from "../../../Component/common/PrimaryButton";
import MainFooter from "../../../Component/Footer/MainFooter";
import AOS from "aos";
import "aos/dist/aos.css";

const FeatureOnlineStore = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <section>
        <div className="grid grid-cols-2 items-center gap-8 m-10 ">
          <img
            src={Domain}
            alt="domain"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
          <div>
            <p className="text-fcNavy6 text-4xl font-semibold">
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
            <p className="text-fcNavy6 text-4xl font-semibold ">
              More pages, more impact
              <br /> more sales
            </p>
            <p className="py-4  font-thin text-fcNavy6 ">
              Hook visitors with a modern website that showcases the best of
              you. Add galleries, videos, and content to connect with customers
              who find you online.
            </p>
            <SecondaryButton>Get Started</SecondaryButton>
          </div>
          <div>
            <img
              src={Pages}
              alt="domain"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 items-center mx-10 my-20 gap-8 ">
          <img
            src={Social}
            alt="domain"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
          <div>
            <p className="text-fcNavy6 text-4xl font-semibold">
              Sell and market your products on
              <br />
              social
            </p>
            <p className="py-4 font-thin text-fcNavy6">
              With our Facebook for Business feature, your store’s products
              automatically sync to Facebook & Instagram. So your followers can
              shop while they scroll!
            </p>
            <SecondaryButton>Get Started</SecondaryButton>
          </div>
        </div>
        <div className="grid grid-cols-2  items-center mx-10 my-20 gap-8">
          <div>
            <p className="text-fcNavy6 text-4xl font-semibold ">
              Convenient payment methods
            </p>
            <p className="py-4  font-thin text-fcNavy6 ">
              From PayPal to Direct Debit—whether it’s local or global payment
              methods, make it even easier for your customers to buy from you.
            </p>
            <SecondaryButton>Get Started</SecondaryButton>
          </div>
          <div>
            <img
              src={payment}
              alt="domain"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 items-center mx-10 my-20 gap-8 ">
          <img
            src={Revenue}
            alt="domain"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
          <div>
            <p className="text-fcNavy6 text-4xl font-semibold">
              No commission fees
            </p>
            <p className="py-4 font-thin text-fcNavy6">
              No fees on your sales: Your revenue is 100% yours. After all, it's
              your store and everything you earn should go into your pockets.
            </p>
            <SecondaryButton>Get Started</SecondaryButton>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center mx-10 my-20 gap-8 ">
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
          <img
            src={Google}
            alt="domain"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
        </div>
        <div className="grid grid-cols-2  items-center mx-10 my-20 gap-8">
          <div>
            <img
              src={Support}
              alt="domain"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            />
          </div>
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
        </div>
        <div className="grid grid-cols-2 items-center mx-10 my-20 gap-8 ">
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
          <img
            src={Gdpr}
            alt="domain"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
        </div>
        <div>
          <div className=" w-full" id="testimonialStore">
            {/* <img src={testimonial} alt="tesi" className="relative" /> */}
            <div className="text-center absolute right-8 top-14 space-y-8">
              <img src={websiteStore} alt="website" className="w-[500px]" />
              <p className="text-4xl font-GilroySemiBold text-fcNavy6" data-aos="fade-up">
                „With my own website, I can
                <br /> now present myself more
                <br />
                professionally to
                <br /> customers.“
              </p>
              <p className="text-fcNavy6 font-semibold text-sm" data-aos="fade-up">
                Nata,<span className="font-thin">studiomaals.com</span>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2  items-center mx-10 my-20 gap-8">
          <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            <p className="text-fcNavy6 text-4xl font-semibold ">Why Jimdo?</p>
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
            Ready to <span className="text-primary">start selling?</span>
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

export default FeatureOnlineStore;
