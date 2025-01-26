"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/Accordion/page";
import { useState } from "react";
import { Button } from "../ui/button";

const FrequentlyAskedQuestions = () => {
  const [showMoreGeneral, setShowMoreGeneral] = useState(false);
  const [showMoreServices, setShowMoreServices] = useState(false);

  const handleToggleShowMoreGeneral = () => {
    setShowMoreGeneral((prevShowMore) => !prevShowMore);
  };

  const handleToggleShowMoreServices = () => {
    setShowMoreServices((prevShowMore) => !prevShowMore);
  };

  return (
    <div className="mt-10 md:mt-32 ">
      <div className="text-left">
        <h1 className="text-primary_dark text-3xl font-semibold text-center">
          Frequently Asked Questions
        </h1>
        <div>
          <Tabs defaultValue="general" className="w-full md:w-[600px] mt-5 ">
            <TabsList className="grid w-full grid-cols-2 ">
              <TabsTrigger
                value="general"
                className="font-bold text-lg md:text-base"
              >
                General
              </TabsTrigger>
              <TabsTrigger
                value="services"
                className="font-bold text-lg md:text-base"
              >
                Services
              </TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is UTME?</AccordionTrigger>
                  <AccordionContent>
                    The Unified Tertiary Matriculation Examination (UTME) is an
                    entrance examination for prospective undergraduates in
                    Nigeria. It is conducted by the Joint Admissions and
                    Matriculation Board (JAMB) and is required for admission
                    into Nigerian universities.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What is WAEC?</AccordionTrigger>
                  <AccordionContent>
                    The West African Examinations Council (WAEC) is an
                    examination board that conducts the West African Senior
                    School Certificate Examination (WASSCE) for high school
                    students in West African countries. The exam assesses
                    students&rsquo; readiness for tertiary education.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What is NECO?</AccordionTrigger>
                  <AccordionContent>
                    The National Examinations Council (NECO) conducts the Senior
                    Secondary Certificate Examination (SSCE) for secondary
                    school students in Nigeria. It is an alternative to the WAEC
                    exam and is recognized by Nigerian universities.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    How often are UTME, WAEC and NECO exams conducted?
                  </AccordionTrigger>
                  <AccordionContent>
                    UTME is usually conducted once a year, while WAEC and NECO
                    have two sessions annually - the May/June session and the
                    Nov/Dec session.
                  </AccordionContent>
                </AccordionItem>
                {showMoreGeneral && (
                  <>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>
                        Can I retake these exams if I don’t perform well?
                      </AccordionTrigger>
                      <AccordionContent>
                        Absolutely! You can retake UTME, WAEC, or NECO in the
                        next scheduled session to improve your scores.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                      <AccordionTrigger>
                        What subjeects are compulsory for WAEC and NECO exams?
                      </AccordionTrigger>
                      <AccordionContent>
                        English Language and Mathematics are compulsory, along
                        with other subjects relevant to your chosen field of
                        study.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                      <AccordionTrigger>
                        How many subjects are required for WAEC and NECO exams?
                      </AccordionTrigger>
                      <AccordionContent>
                        Students are required to take a minimum of eight
                        subjects, which must include core subjects like
                        Mathematics and English Language, along with other
                        subjects relevant to their chosen field of study.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                      <AccordionTrigger>
                        What is the best way to prepare for UTME, WAEC, and NECO
                        exams?
                      </AccordionTrigger>
                      <AccordionContent>
                        The key to success is consistent study, understanding
                        the exam format, practicing past questions, and staying
                        updated with the syllabus. EduRay provides a
                        comprehensive suite of resources tailored for these
                        exams.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                      <AccordionTrigger>
                        How can I check my UTME score?
                      </AccordionTrigger>
                      <AccordionContent>
                        You can check your UTME score by visiting the official
                        JAMB website and logging in with your registration
                        details. Alternatively, you can use the JAMB mobile app
                        for quick access to your results.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-10">
                      <AccordionTrigger>
                        How can I check my WAEC or NECO exam results?
                      </AccordionTrigger>
                      <AccordionContent>
                        Results can be checked online through the official
                        websites of WAEC or NECO using your registration
                        details.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-11">
                      <AccordionTrigger>
                        What is the cut-off mark for university admission in
                        Nigeria?
                      </AccordionTrigger>
                      <AccordionContent>
                        The cut-off mark for university admission varies by
                        institution and program. Generally, a score of 180 or
                        higher is required for admission into most universities,
                        but some competitive programs may require higher scores.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-12">
                      <AccordionTrigger>
                        When is the registration period for UTME?
                      </AccordionTrigger>
                      <AccordionContent>
                        UTME registration usually starts in January and ends in
                        February. Specific dates are announced by JAMB each
                        year, so it&apos;s important to check their official
                        website for the latest information.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-13">
                      <AccordionTrigger>
                        Can I combine WAEC and NECO results for university
                        admission?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes, most Nigerian universities accept a combination of
                        WAEC and NECO results for admission purposes. Ensure you
                        check the specific requirements of the university you
                        are applying to.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-14">
                      <AccordionTrigger>
                        What is the grading system for WAEC and NECO?
                      </AccordionTrigger>
                      <AccordionContent>
                        Both WAEC and NECO use a grading system from A1 to F9,
                        with A1 being the highest grade and F9 the lowest. To
                        pass, students generally need to score at least a C6 in
                        their subjects.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-15">
                      <AccordionTrigger>
                        Are there any age limits for taking UTME, WAEC, or NECO?
                      </AccordionTrigger>
                      <AccordionContent>
                        There is no official age limit for taking these exams,
                        but candidates are typically students in their final
                        years of secondary school. It is important to be
                        prepared and meet the educational requirements for each
                        exam.
                      </AccordionContent>
                    </AccordionItem>
                  </>
                )}
              </Accordion>
              <div className="text-center mt-4">
                <Button
                  className="flex items-center bg-primary_orange text-white rounded-full"
                  onClick={handleToggleShowMoreGeneral}
                  size={"lg"}
                >
                  {showMoreGeneral ? "Show Less" : "Show More"}
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="services">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is Eduray?</AccordionTrigger>
                  <AccordionContent>
                    Eduray is a digital learning platform designed to help
                    students prepare for their WAEC, NECO, and UTME exams. We
                    provide a comprehensive range of resources, including a
                    question bank, video lectures, study notes, practice
                    problems, live mentoring sessions, and AI assistance.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    What unique services does EduRay offer for exam preparation?
                  </AccordionTrigger>
                  <AccordionContent>
                    EduRay offers a personalized learning experience with AI
                    assistance, a vast question bank with detailed explanations,
                    and access to premium features such as one-on-one mentorship
                    and live coaching sessions based on request.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    How can I sign up for Eduray?
                  </AccordionTrigger>
                  <AccordionContent>
                    To sign up for Eduray, visit our website and click on the
                    &quot;Get Started&quot; button. You will be guided through
                    the registration process, where you can create an account
                    and access all our resources.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Is EduRay free?</AccordionTrigger>
                  <AccordionContent>
                    Yes, EduRay offers free access to our core resources. We
                    believe in providing quality education to all students. Some
                    premium features may be available for a fee, but the
                    majority of our content is free to use.
                  </AccordionContent>
                </AccordionItem>
                {showMoreServices && (
                  <>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>
                        What subjects are covered by EduRay?
                      </AccordionTrigger>
                      <AccordionContent>
                        EduRay covers a wide range of subjects, including
                        Mathematics, English, Physics, Chemistry, Biology,
                        Economics, and more. We follow the official syllabi for
                        WAEC, NECO, and UTME to ensure our content is relevant
                        and up-to-date.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                      <AccordionTrigger>
                        How often is the question bank updated?
                      </AccordionTrigger>
                      <AccordionContent>
                        Our question bank is regularly updated to include the
                        latest past exam questions and new practice problems. We
                        strive to keep our content current and comprehensive to
                        help students prepare effectively.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                      <AccordionTrigger>
                        What is the AI assistance feature?
                      </AccordionTrigger>
                      <AccordionContent>
                        The AI assistance feature uses advanced artificial
                        intelligence to provide instant clarification and
                        explanations for any questions students may have. It
                        helps to enhance learning by offering personalized
                        support and guidance.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                      <AccordionTrigger>
                        How does EduRay&apos;s AI feature help students?
                      </AccordionTrigger>
                      <AccordionContent>
                        Our AI feature provides instant clarifications,
                        recommends study paths, and helps track your learning
                        progress.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                      <AccordionTrigger>
                        Can I access EduRay&apos;s content on any device?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes, our platform is designed to be accessible on
                        various devices, ensuring you can study anytime,
                        anywhere.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-10">
                      <AccordionTrigger>
                        Are one-on-one mentorship and live coaching sessions
                        available?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes, EduRay offers one-on-one mentorship and live
                        coaching sessions as premium features available based on
                        request. These sessions provide personalized support
                        tailored to your needs.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-11">
                      <AccordionTrigger>
                        How can I request one-on-one mentorship or live
                        coaching?
                      </AccordionTrigger>
                      <AccordionContent>
                        To request one-on-one mentorship or live coaching,
                        please contact our support team through the Help Center
                        on our website. They will provide you with the necessary
                        information and assist in scheduling your sessions.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-12">
                      <AccordionTrigger>
                        Is there a community or forum on  where I can
                        interact with other students?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes, our active student community is a great place to
                        share knowledge, discuss topics, and find study
                        partners.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-13">
                      <AccordionTrigger>
                        How can I participate in live sessions?
                      </AccordionTrigger>
                      <AccordionContent>
                        To participate in live sessions, log into your EduRay
                        account and check the schedule for upcoming sessions.
                        You can join the sessions directly from the platform and
                        interact with mentors and other students in real-time.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-14">
                      <AccordionTrigger>
                        How does EduRay ensure the quality of its content?
                      </AccordionTrigger>
                      <AccordionContent>
                        Our content is curated by experts, aligned with the
                        official syllabi, and regularly updated to maintain the
                        highest standards of quality.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-15">
                      <AccordionTrigger>
                        What kind of support is available if I encounter
                        technical issues?
                      </AccordionTrigger>
                      <AccordionContent>
                        If you encounter any technical issues, you can contact
                        our support team through the Help Center on our website.
                        We offer assistance via email, live chat, and phone to
                        ensure your issues are resolved quickly.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-16">
                      <AccordionTrigger>
                        How can I provide feedback about EduRay?
                      </AccordionTrigger>
                      <AccordionContent>
                        We welcome feedback from our users to help us improve
                        our services. You can share your feedback through the
                        &quot;Share Your Story&quot; section on our website or
                        contact our support team directly.
                      </AccordionContent>
                    </AccordionItem>
                  </>
                )}
              </Accordion>
              <div className="text-center mt-4">
                <Button
                  className="flex items-center bg-primary_orange text-white rounded-full"
                  onClick={handleToggleShowMoreServices}
                  size={"lg"}
                >
                  {showMoreServices ? "Show Less" : "Show More"}
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
