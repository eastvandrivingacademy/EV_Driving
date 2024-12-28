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

export default function DrivingSchoolLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Car className="h-6 w-6 mr-2" />
          <span className="font-bold">EastVan Driving Academy</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
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
        <section
          className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg_img.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content */}
          <div className="relative container px-4 md:px-6 flex justify-center">
            <div className="gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] flex ">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-customColor ">
                  Learn to Drive with Confidence
                </h1>
                <div className="flex items-center justify-center">
                  <p className="max-w-[600px] text-gray-200 md:text-xl dark:text-gray-400">
                    Professional driving instruction tailored to your needs.
                    Start your journey to becoming a safe and confident driver
                    today.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                  <Link href="#contact">
                    <Button size="lg" className="bg-slate-500">
                      Book a Lesson
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-customColor2"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">
              Why Choose Us?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center mb-8">
              We offer top-notch driving instruction with a focus on safety,
              experience, and personalized learning.
            </p>
            <div className="space-y-12">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <AnimatedCard
                  title="Experienced Instructors"
                  description="Learn from certified professionals with years of experience."
                  icon={<GraduationCap className="h-12 w-12 text-primary" />} // Pass the icon as JSX element
                />

                <AnimatedImage
                  src="/images/drivingstudent1.jpg"
                  alt="Student learning to drive safely"
                />
              </div>
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <AnimatedImage
                  src="/images/drivingstudent2.jpg"
                  alt="Experienced instructor explaining road rules"
                />
                <AnimatedCard
                  title="Personalized Lessons"
                  description="Tailored instruction to meet your individual needs and pace."
                  icon={<Users className="h-12 w-12 text-primary" />} // Pass the icon as JSX element
                />
              </div>
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <AnimatedCard
                  title="Safety First"
                  description="Our top priority is ensuring your safety on the road."
                  icon={<Award className="h-12 w-12 text-primary" />} // Pass the icon as JSX element
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
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">
              Our Packages
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center mb-8">
              Choose the package that best fits your needs and schedule. All
              packages include personalized instruction from our experienced
              driving instructors.
            </p>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
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
                  <Button className="w-full">Book Now</Button>
                </CardContent>
              </Card>
              <Card>
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
                  <Button className="w-full">Book Now</Button>
                </CardContent>
              </Card>
              <Card>
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
                  <Button className="w-full">Book Now</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/google_review.png"
              alt="Sarah J."
              width={150}
              height={150}
              className="flex justify-center items-center"
            />
          </div>
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">
              What Our Students Say
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center mb-8">
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
                        <h3 className="text-lg font-bold">Johnathan C.</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          New Driver
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      "{" "}
                      <span className="font-bold text-gray-800">Harkomal</span>{" "}
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
                        <h3 className="text-lg font-bold">Rhonda Wall</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Passed First Time
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      "
                      <span className="font-bold">
                        East Van Driving Academy
                      </span>{" "}
                      is fantastic! Harkomal is an excellent instructor who made
                      driving lessons straightforward and relaxing. His clear
                      instructions and flexible scheduling helped me
                      <span className="font-bold text-gray-800">
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
                        <h3 className="text-lg font-bold">Nigel Kumuwende</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Passed First Time
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      "My experience with Harkonal was exceptional. As an
                      instructor, he offers maximum flexibility to learners,
                      which I truly appreciate. This approach helped me feel
                      comfortable and confident throughout the learning process.
                      I{" "}
                      <span className="font-bold text-gray-800">
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
                        <h3 className="text-lg font-bold">Julia Chow</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Passed First Time
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      "I had my first lesson with East Van Driving School today,
                      and it was an{" "}
                      <span className="font-bold text-gray-800">
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
          className="w-full py-12 md:py-24 lg:py-32 bg-blue-500"
        >
          <div className="container px-4 md:px-6">
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
                  <Button size="lg">Give us a call today!</Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto max-w-4xl h-[300px] mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
              <GoogleMap />
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
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
