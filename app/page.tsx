import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Car,
  ShieldCheck,
  Award,
  Users,
  Star,
  Clock,
  DollarSign,
  Heart,
  GraduationCap,
} from "lucide-react";
import { GoogleMap } from "@/components/GoogleMap";
import "./globals.css";
import { AnimatedCard } from "@/components/AnimatedCard";
import { AnimatedImage } from "@/components/AnimatedImage";
import { CallButton } from "@/components/CallButton";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export default function DrivingSchoolLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-bgColor1">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link
          className="flex items-center justify-center md:justify-start w-full"
          href="#"
        >
          {/* <Car className="h-6 w-6 mr-2" />
          <span className="font-bold">EastVan Driving Academy</span> */}
          <div className="flex justify-center m-2 bg-bgColor1">
            <Image
              src="/EV_Driving/images/ev_logo_nobg.png"
              alt="Sarah J."
              width={150}
              height={150}
              className="flex justify-center items-center"
            />
          </div>
        </Link>
        <nav className="ml-auto gap-4 sm:gap-6 hidden md:flex">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#packages"
          >
            Packages
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#testimonials"
          >
            Testimonials
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-12 bg-bgColor1">
          {/* Content */}
          <div className="px-4 md:px-6 flex justify-center w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 items-center">
              {/* Text Section */}
              <div className="flex-row justify-center items-center space-y-4  text-center ">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-textColor1 ">
                  Learn to Drive with Confidence
                </h1>
                <p className="w-full md:text-xl text-textColor1 text-center  p-3">
                  Professional driving instruction tailored to your needs. Start
                  your journey to becoming a safe and confident driver today.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                  <CallButton size="lg" className="bg-textColor1">
                    Book a Lesson
                  </CallButton>
                </div>
              </div>

              {/* Image Section */}
              <div className="flex justify-center ">
                <img
                  src="/EV_Driving/images/driving_hero.jpg"
                  alt="Driving"
                  className="max-w-full h-auto rounded-lg shadow-lg"
                  width={500}
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-textColor1">
              Why Choose Us?
            </h2>
            <p className="mx-auto max-w-[700px] text-textColor1 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center mb-8">
              We offer top-notch driving instruction with a focus on safety,
              experience, and personalized learning.
            </p>
            <div className="space-y-12">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <AnimatedCard
                  title="Experienced Instructors"
                  description="Our instructors are licensed under the Motor Vehicle Act."
                  icon={
                    <GraduationCap className="h-12 w-12 text-primary text-textColor1" />
                  } // Pass the icon as JSX element
                />

                <AnimatedImage
                  src="/EV_Driving/images/drivingstudent1.jpg"
                  alt="Student learning to drive safely"
                />
              </div>
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                {/* Image Section */}

                <AnimatedImage
                  src="/EV_Driving/images/drivingstudent2.jpg"
                  alt="Experienced instructor explaining road rules"
                  className="order-last lg:order-first" // Ensure the image is below the card on smaller screens
                />

                {/* Card Section */}

                <AnimatedCard
                  title="Wide Coverage"
                  description="We offer our services in Vancouver, Richmond and Burnaby."
                  icon={
                    <Users className="h-12 w-12 text-primary text-textColor1" />
                  }
                  className="order-first lg:order-last" // Ensures card is on top of image on smaller screens
                />
              </div>
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <AnimatedCard
                  title="Lessons for all levels"
                  description="We provide driving lessons and knowledge test practice materials for Class 4,5 & 7."
                  icon={
                    <Award className="h-12 w-12 text-primary text-textColor1" />
                  } // Pass the icon as JSX element
                />
                <AnimatedImage
                  src="/EV_Driving/images/drivingstudentm3.jpg"
                  alt="Student receiving personalized driving instruction"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="packages"
          className="w-full py-12 md:py-24 lg:py-32 bg-bgColor1"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">
              Our Packages
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center mb-8">
              Choose the package that best fits your needs and schedule. All
              packages include personalized instruction from our experienced
              driving instructors.
            </p>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="text-textColor1">
                <CardHeader className='"flex items-center'>
                  <CardTitle>Basic Package</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold">$85</span>
                  </div>
                  <ul className="space-y-2 text-center">
                    <li className="flex items-center justify-center">
                      <Clock className="mr-2 h-4 w-4" />
                      1.5 hour lesson
                    </li>
                    <li className="flex items-center justify-center">
                      <Car className="mr-2 h-4 w-4" />
                      Suitable for beginners
                    </li>
                  </ul>
                  <CallButton className="w-full bg-textColor1">
                    Book Now
                  </CallButton>
                </CardContent>
              </Card>
              <Card className="text-textColor1">
                <CardHeader className='"flex items-center'>
                  <CardTitle>Standard Package</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold">$110</span>
                  </div>
                  <ul className="space-y-2 text-center">
                    <li className="flex items-center justify-center">
                      <Clock className="mr-2 h-4 w-4" />2 hour lesson
                    </li>

                    <li className="flex items-center justify-center">
                      <Car className="mr-2 h-4 w-4" />
                      Ideal for most learners
                    </li>
                  </ul>
                  <CallButton className="w-full bg-textColor1">
                    Book Now
                  </CallButton>
                </CardContent>
              </Card>
              <Card className="text-textColor1">
                <CardHeader className='"flex items-center'>
                  <CardTitle>Road Test Package</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold">$150</span>
                  </div>
                  <ul className="space-y-2 text-center">
                    <li className="flex items-center justify-center">
                      <Clock className="mr-2 h-4 w-4" />1 hour lesson before
                      road test
                    </li>
                    <li className="flex items-center justify-center">
                      <Car className="mr-2 h-4 w-4" />
                      Car provided for road test
                    </li>
                  </ul>
                  <CallButton className="w-full bg-textColor1">
                    Book Now
                  </CallButton>
                </CardContent>
              </Card>
              <Card className="text-textColor1">
                <CardHeader className='"flex items-center'>
                  <CardTitle>5 Lessons Package</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold">$400</span>
                  </div>
                  <ul className="space-y-2 text-center">
                  
                    <li className="flex items-center justify-center">
                      <Car className="mr-2 h-4 w-4" />
                      Best for review
                    </li>
                  </ul>
                  <CallButton className="w-full bg-textColor1">
                    Book Now
                  </CallButton>
                </CardContent>
              </Card>
              <Card className="text-textColor1">
                <CardHeader className='"flex items-center'>
                  <CardTitle>10 Lesson Package</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold">$780</span>
                  </div>
                  <ul className="space-y-2 text-center">
                   
                    <li className="flex items-center justify-center">
                      <Car className="mr-2 h-4 w-4" />
                      Best Value
                    </li>
                  </ul>
                  <CallButton className="w-full bg-textColor1">
                    Book Now
                  </CallButton>
                </CardContent>
              </Card>
            </div>
      
          </div>
        </section>
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="flex justify-center mb-8 bg-white">
            <Image
              src="/EV_Driving/images/google_review.png"
              alt="Sarah J."
              width={150}
              height={150}
              className="flex justify-center items-center"
            />
          </div>
          <div className="container px-4 md:px-6 text-textColor1 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">
              What Our Students Say
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-textColor1 text-center mb-8">
              Don't just take our word for it. Here's what some of our
              successful students have to say about their experience with
              EastVan Driving Academy.
            </p>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardContent className="p-6 h-full">
                  <div className="flex flex-col gap-4 h-full">
                    <div className="flex flex-col xl:flex-row items-center gap-4 justify-center">
                      <img
                        src="/EV_Driving/images/student1.jpeg"
                        alt="Julia Chow"
                        className="rounded-lg w-full md:w-auto max-w-[300px]"
                      />
                      <div>
                        <div className="mb-2">
                          <h3 className="text-lg font-bold text-textColor1">
                            Adrian R.
                          </h3>
                          <p className="text-sm text-textColor1">
                            Passed First Time
                          </p>
                        </div>
                        <p className="text-textColor1">
                          "
                          <span className="font-extrabold">
                            East Van Driving Academy
                          </span>{" "}
                          is fantastic! Harkomal is an excellent instructor who
                          made driving lessons straightforward and relaxing. His
                          clear instructions and flexible scheduling helped me
                          <span className="font-extrabold text-textColor1">
                            {" "}
                            pass my road test
                          </span>{" "}
                          with ease. I highly recommend this driving school!"
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 h-full">
                  <div className="flex flex-col gap-4 h-full">
                    <div className="flex flex-col xl:flex-row items-center gap-4 justify-center">
                      <img
                        src="/EV_Driving/images/student2.jpeg"
                        alt="Julia Chow"
                        className="rounded-lg w-full md:w-auto max-w-[300px]"
                      />
                      <div>
                        <div className="mb-2">
                          <h3 className="text-lg font-bold text-textColor1">
                            Souravpreet Singh Sandhu
                          </h3>
                          <p className="text-sm text-textColor1"> Passed First Time
                          </p>
                        </div>
                        <p className="text-textColor1">
                          "I had a{" "}
                          <span className="font-extrabold text-textColor1">
                            {" "}
                            great experience
                          </span>{" "}
                            with my instructor at EastVan Driving Academy! They were incredibly patient and helped me build confidence behind the wheel. Each lesson was tailored to my learning pace, making the process smooth and enjoyable. The car was well-maintained, and my instructor’s knowledge of Vancouver’s roads and test routes really helped me feel prepared. Thanks to their guidance, I passed my road test with ease. Highly recommend EastVan Driving Academy if you’re looking for a skilled and supportive instructor!
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 h-full">
                  <div className="flex flex-col gap-4 h-full">
                    <div className="flex flex-col xl:flex-row items-center gap-4 justify-center">
                      <img
                        src="/EV_Driving/images/student3.jpeg"
                        alt="Julia Chow"
                        className="rounded-lg w-full md:w-auto max-w-[300px]"
                      />
                      <div>
                        <div className="mb-2">
                          <h3 className="text-lg font-bold text-textColor1">
                            John C.
                          </h3>
                          <p className="text-sm text-textColor1">
                            Passed First Time
                          </p>
                        </div>
                        <p className="text-textColor1">
                          "My experience with Harkomal was exceptional. As an
                          instructor, he offers maximum flexibility to learners,
                          which I truly appreciate. This approach helped me feel
                          comfortable and confident throughout the learning
                          process. I{" "}
                          <span className="font-extrabold text-textColor1">
                            {" "}
                            highly recommend
                          </span>{" "}
                          this school to others seeking a great road test
                          experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 h-full">
                  <div className="flex flex-col gap-4 h-full">
                    <div className="flex flex-col xl:flex-row items-center gap-4 justify-center">
                      <img
                        src="/EV_Driving/images/student5.jpeg"
                        alt="Julia Chow"
                        className="rounded-lg w-full md:w-auto max-w-[300px]"
                      />
                      <div>
                        <div className="mb-2">
                          <h3 className="text-lg font-bold text-textColor1">
                            Sanjeev K.
                          </h3>
                          <p className="text-sm text-textColor1">
                            Passed First Time
                          </p>
                        </div>
                        <p className="text-textColor1">
                          "I had a fantastic experience with{" "}
                          <span className="font-extrabold text-textColor1">
                          East Van Driving academy!
                          </span>{" "}
                            The instructors were incredibly patient, professional, and supportive throughout the entire learning process. They tailored the lessons to fit my needs and worked with me on areas where I needed extra practice, helping me build confidence and master skills for the ICBC road test. Their approach to teaching safe driving habits was practical and effective, making me feel fully prepared. Scheduling was easy, and they were accommodating with my availability. I highly recommend East Van Driving School to anyone looking for high-quality instruction and an encouraging learning environment
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-textColor1"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Ready to Get Started?
              </h2>
              <p className="mx-auto max-w-[600px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Book your first lesson today and take the first step towards
                becoming a confident driver.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Link href="#contact">
                  <CallButton className="bg-white text-textColor1" size="lg">
                    Give us a call today!
                  </CallButton>
                </Link>
              </div>
              <p className="mx-auto max-w-[600px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Or send us an email at:{" "}
                <a
                  href="mailto:eastvandrivingacademy@gmail.com"
                  className="text-blue-300 underline hover:text-blue-50"
                >
                  eastvandrivingacademy@gmail.com
                </a>
              </p>
            </div>
            <div className="mx-auto max-w-4xl h-[300px] mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
              <GoogleMap />
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-textColor1">
        <div className="flex justify-between w-full">
          <div className="flex justify-start">
            <p className="text-xs text-gray-200 dark:text-gray-200">
              © 2024 EastVan Driving Academy.
            </p>
          </div>
          <div className="flex justify-end items-center">
            <p className="text-xs text-gray-200 flex items-center">
              Made with <Heart className="h-4 w-4 m-1" /> by{" "}
              <a
                href="https://youwiniwin.ca/"
                className="text-blue-500 hover:underline m-1"
              >
                ywiw
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
