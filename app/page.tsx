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
} from "lucide-react";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { GoogleMap } from "@/components/GoogleMap";

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
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg_img.jpg')" }}
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4 bg-white bg-opacity-75 p-6 rounded-xl">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Learn to Drive with Confidence
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Professional driving instruction tailored to your needs.
                    Start your journey to becoming a safe and confident driver
                    today.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button size="lg">Book a Lesson</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">
              Why Choose Us?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center mb-8">
              We offer top-notch driving instruction with a focus on safety,
              experience, and personalized learning.
            </p>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <ShieldCheck className="h-12 w-12 text-blue-500" />
                  <h3 className="text-xl font-bold">Safety First</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Our top priority is ensuring your safety on the road.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Award className="h-12 w-12 text-blue-500" />
                  <h3 className="text-xl font-bold">Experienced Instructors</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Learn from certified professionals with years of experience.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Users className="h-12 w-12 text-blue-500" />
                  <h3 className="text-xl font-bold">Personalized Lessons</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Tailored instruction to meet your individual needs and pace.
                  </p>
                </CardContent>
              </Card>
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
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">
              What Our Students Say
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center mb-8">
              Don't just take our word for it. Here's what some of our
              successful students have to say about their experience with
              SafeDrive Academy.
            </p>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/images/drivingstudent1.jpg"
                        alt="Sarah J."
                        width={100}
                        height={1000}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="text-lg font-bold">Sarah J.</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          New Driver
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      "I was nervous about learning to drive, but my instructor
                      made me feel comfortable and confident. Highly recommend!"
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
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="text-lg font-bold">Rhonda R.</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Passed First Time
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      "Thanks to the excellent instruction, I passed my driving
                      test on the first attempt. Couldn't be happier!"
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
