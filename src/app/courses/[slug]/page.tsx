import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getCourse, getCourses } from '@/features/courses/services/course-service';
import { formatPrice } from '@/lib/format';
import { AddToCart } from '@/features/cart/components/add-to-cart';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { CoursePreview } from '@/features/courses/components/course-preview';
import { CourseStatistics } from '@/features/courses/components/course-statistics';
import { RelatedCourses } from '@/features/courses/components/related-courses';
import { CourseDescription } from '@/features/courses/components/course-description';
import { Syllabus } from '@/features/courses/components/syllabus';
import { CommentSection } from '@/features/comments/components/comment-section';
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const course = await getCourse((await params).slug);
  return { title: course?.title ?? 'دوره پیدا نشد' };
}
export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [course, courses] = await Promise.all([getCourse(slug), getCourses()]);
  if (!course) notFound();
  return (
    <section className="container interior-page course-detail">
      <Breadcrumb section="دوره‌ها" href="/courses" title={course.title} />
      <div className="course-introduction">
        <div className="course-introduction__copy">
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          <div className="course-institute">
            <Image
              src="/assets/institute-logo.png"
              width={97}
              height={97}
              alt="موسسه فرهنگی شمس الشموس"
            />
            <div>
              <h2>موسسه فرهنگی شمس الشموس</h2>
              <p>آموزش و تقویت مهارت‌های فرهنگی و ارتباطی؛ همراه مسیر یادگیری شما.</p>
            </div>
          </div>
          <div className="course-introduction__actions">
            <AddToCart course={course} />
            <strong>{formatPrice(course.price)}</strong>
          </div>
        </div>
        <CoursePreview />
      </div>
      <CourseStatistics course={course} />
      <div className="detail-columns">
        <div className="detail-main">
          <CourseDescription description={course.description} />
          <Syllabus count={course.lessons} />
          <CommentSection />
        </div>
        <aside className="detail-sidebar">
          <RelatedCourses courses={courses.filter((item) => item.id !== course.id)} />
        </aside>
      </div>
    </section>
  );
}
