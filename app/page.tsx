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
  GraduationCap,
} from "lucide-react";
import { GoogleMap } from "@/components/GoogleMap";
import "./globals.css";
import { AnimatedCard } from "@/components/AnimatedCard";
import { AnimatedImage } from "@/components/AnimatedImage";
import { CallButton } from "@/components/CallButton";

export default function DrivingSchoolLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-bgColor1">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link
          className="flex items-center justify-center md:justify-start w-full"
          href="#"
        >
          <Car className="h-6 w-6 mr-2" />
          <span className="font-bold">EastVan Driving Academy</span>
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
                  src="/images/driving_hero.jpg"
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
                  description="Learn from certified professionals with years of experience."
                  icon={
                    <GraduationCap className="h-12 w-12 text-primary text-textColor1" />
                  } // Pass the icon as JSX element
                />

                <AnimatedImage
                  src="/images/drivingstudent1.jpg"
                  alt="Student learning to drive safely"
                />
              </div>
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                {/* Image Section */}

                <AnimatedImage
                  src="/images/drivingstudent2.jpg"
                  alt="Experienced instructor explaining road rules"
                  className="order-last lg:order-first" // Ensure the image is below the card on smaller screens
                />

                {/* Card Section */}

                <AnimatedCard
                  title="Personalized Lessons"
                  description="Tailored instruction to meet your individual needs and pace."
                  icon={
                    <Users className="h-12 w-12 text-primary text-textColor1" />
                  }
                  className="order-first lg:order-last" // Ensures card is on top of image on smaller screens
                />
              </div>
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <AnimatedCard
                  title="Safety First"
                  description="Our top priority is ensuring your safety on the road."
                  icon={
                    <Award className="h-12 w-12 text-primary text-textColor1" />
                  } // Pass the icon as JSX element
                />
                <AnimatedImage
                  src="/images/drivingstudentm3.jpg"
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
                    <span className="ml-1 text-xl text-gray-500">/hour</span>
                  </div>
                  <ul className="space-y-2 text-center">
                    <li className="flex items-center justify-center">
                      <Clock className="mr-2 h-4 w-4" />1 hour lesson
                    </li>
                    <li className="flex items-center justify-center">
                      <Car className="mr-2 h-4 w-4" />
                      Suitable for beginners
                    </li>
                    <li className="flex items-center justify-center mr-2 h-5 w-5"></li>
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
                    <span className="text-5xl font-bold">$150</span>
                    <span className="ml-1 text-xl text-gray-500">
                      /1.5 hours
                    </span>
                  </div>
                  <ul className="space-y-2 text-center">
                    <li className="flex items-center justify-center">
                      <Clock className="mr-2 h-4 w-4" />5 hours of lessons
                    </li>
                    <li className="flex items-center justify-center">
                      <DollarSign className="mr-2 h-4 w-4" />
                      Save $50
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
                  <CardTitle>Intensive Package</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold">$200</span>
                    <span className="ml-1 text-xl text-gray-500">
                      /2.5 hours
                    </span>
                  </div>
                  <ul className="space-y-2 text-center">
                    <li className="flex items-center justify-center">
                      <Clock className="mr-2 h-4 w-4" />
                      10 hours of lessons
                    </li>
                    <li className="flex items-center justify-center">
                      <DollarSign className="mr-2 h-4 w-4" />
                      Save $150
                    </li>
                    <li className="flex items-center justify-center">
                      <Car className="mr-2 h-4 w-4" />
                      Best for intensive learning
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
              src="/images/google_review.png"
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
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/images/drivingstudentm4.jpg"
                        alt="Sarah J."
                        width={100}
                        height={100}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-textColor1">
                          Johnathan C.
                        </h3>
                        <p className="text-sm text-textColor1">New Driver</p>
                      </div>
                    </div>
                    <p className="text-textColor1">
                      "
                      <span className="font-extrabold text-textColor1">
                        Harkomal
                      </span>{" "}
                      is an energetic and professional driving instructor. He
                      gave me clear instructions and guided me through my
                      weaknesses. Highly recommended!"
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/images/drivingstudent2.jpg"
                        alt="Rhonda R.."
                        width={100}
                        height={100}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-textColor1">
                          Rhonda Wall
                        </h3>
                        <p className="text-sm text-textColor1">
                          Passed First Time
                        </p>
                      </div>
                    </div>
                    <p className="text-textColor1">
                      "
                      <span className="font-extrabold">
                        East Van Driving Academy
                      </span>{" "}
                      is fantastic! Harkomal is an excellent instructor who made
                      driving lessons straightforward and relaxing. His clear
                      instructions and flexible scheduling helped me
                      <span className="font-extrabold text-textColor1">
                        {" "}
                        pass my road test
                      </span>{" "}
                      with ease. I highly recommend this driving school!"
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/images/drivingstudentm3.jpg"
                        alt="Rhonda R.."
                        width={100}
                        height={100}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-textColor1">
                          Nigel Kumuwende
                        </h3>
                        <p className="text-sm text-textColor1">
                          Passed First Time
                        </p>
                      </div>
                    </div>
                    <p className="text-textColor1">
                      "My experience with Harkonal was exceptional. As an
                      instructor, he offers maximum flexibility to learners,
                      which I truly appreciate. This approach helped me feel
                      comfortable and confident throughout the learning process.
                      I{" "}
                      <span className="font-extrabold text-textColor1">
                        {" "}
                        highly recommend
                      </span>{" "}
                      this school to others seeking a great road test
                      experience.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/images/drivingstudent1.jpg"
                        alt="Rhonda R.."
                        width={100}
                        height={100}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-textColor1">
                          Julia Chow
                        </h3>
                        <p className="text-sm text-textColor1">
                          Passed First Time
                        </p>
                      </div>
                    </div>
                    <p className="text-textColor1">
                      "I had my first lesson with East Van Driving School today,
                      and it was an{" "}
                      <span className="font-extrabold text-textColor1">
                        {" "}
                        amazing experience!
                      </span>{" "}
                      My instructor, Harkomal, was fantastic. He has excellent
                      knowledge of driving and made me feel comfortable and
                      confident. His friendly nature made the lesson enjoyable
                      and stress-free. I highly recommend East Van Driving
                      School for anyone looking to learn how to drive. Thank
                      you, Harkomal, for such a great start to my driving
                      journey!"
                    </p>
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
                <Link href="tel:+1234567890">
                  <Button className="bg-white text-textColor1" size="lg">
                    Give us a call today!
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto max-w-4xl h-[300px] mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
              <GoogleMap />
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-textColor1">
        <p className="text-xs text-gray-200 dark:text-gray-200">
          © 2024 EastVan Driving Academy. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
