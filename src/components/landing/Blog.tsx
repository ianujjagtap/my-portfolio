import { getPublishedBlogPosts } from '@/lib/blog';
import { Link } from 'next-view-transitions';
import React from 'react';

import { BlogCard } from '../blog/BlogCard';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Button } from '../ui/button';

export default function Blog() {
  const posts = getPublishedBlogPosts();

  if (posts.length === 0) {
    return (
      <Container className="mt-20">
        <SectionHeading subHeading="Featured" heading="Blogs" />
        <div className="mt-8 flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-200 py-12 dark:border-gray-800">
          <p className="text-muted-foreground text-lg">Coming soon...</p>
          <p className="text-muted-foreground mt-1 text-sm">
            Blog posts are on the way. Stay tuned!
          </p>
        </div>
      </Container>
    );
  }

  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Featured" heading="Blogs" />
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {posts.slice(0, 2).map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button variant="outline">
          <Link href="/blog">Show all blogs</Link>
        </Button>
      </div>
    </Container>
  );
}
