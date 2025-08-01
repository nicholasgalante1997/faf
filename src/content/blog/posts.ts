import type { BlogPost } from "../../types";

export const blogPosts: BlogPost[] = [
  {
    id: "alexa-zone-story",
    slug: "alexa-zone-finding-my-voice",
    title: "Finding My Voice: From Silence to Support",
    excerpt:
      "A Penngate University student shares her journey of overcoming social anxiety and finding purpose through helping others navigate their mental health challenges.",
    author: {
      name: "Alexa Zone",
      image: "/assets/ALEXA-ZONE.jpg",
      location: "Long Island, NY",
      university: "Penngate University",
    },
    publishedAt: "2024-12-15",
    readTime: 8,
    tags: ["Mental Health", "College Life", "Personal Growth", "Community Support"],
    featured: true,
    content: `
# Finding My Voice: From Silence to Support

I am a student at Penngate University studying Health Policy and Administration and minoring in Labor and Human Resources. I am from Long Island, NY. In high school and throughout my childhood years, I played soccer on an outside team and continue to enjoy playing non-competitively in college. In my free time, I love to draw because it helps me to be able to relax and take time out of my day to destress.

## Growing Up in Manhasset

I was born in Manhasset which is located closer to city on Long Island. I did move at a very early age from a different town due to housing issues but am so fortunate to have been able to grow up in such a beautiful place surrounding by welcoming people.

## The Struggle to Connect

I wanted to become a mentor because being able to help others guide through day to day issues and be an extra hand that people can count on is something I always strive for. Since an early age of mine, I always felt like there was something missing in my life, someone that I can count on and be able to have to talk to about everything.

Of course, I have great parents and a great group of friends, but I still felt like I just was never able to fully open up around them. I always felt like I had so much to want to say to people and words to express but when the time came where I was in front of them, it just felt like it all disappeared.

## Finding My Forever Best Friend

Fortunately, when I got to college, I found my forever best friend who I was able to feel comfortable enough right away to open up to and be able to talk about anything. Finding someone to help navigate your emotions has significantly helped me out in such a positive way and I want others to feel that too.

My friends at school not only mentored me, but guided me through such hard times and tricky obstacles I had to face throughout the year. They helped me to realize that regrets or mistakes I have caused in the past were just learning lessons to better myself in the future. I was able to use their advice to grow as a person and to my full potential.

## Creating a Difference

My main goal as part of this team, is to create a difference, even in just one humans life, where they feel they are heard. I want them to feel like someone does care about them even if they don't think so, just how I felt. That someone understand how they deeply feel and that there is always a way to fix it.

Of course, it takes time to build trust with people, but I believe that anyone is able to connect with each other if work is put in on both ends.

## Sounds of Silence: My Annual Commitment

Every May, I volunteer at a meaningful charity event called **Sounds of Silence**, a 5K run dedicated to raising awareness and funds for postpartum depression. I chose to be part of this team because I'm inspired by the mission and dedication of those around me who share the same drive to make a difference.

Being surrounded by individuals who are deeply committed to supporting this cause motivates me to keep pushing forward each year. While it's heartbreaking to meet families who have lost loved ones to postpartum depression, their stories fuel my determination. They remind me why this work matters and why it's so important to continue raising funds, awareness, and hope for prevention and healing.

## Moving Forward with Purpose

Through my experiences with mental health challenges and finding support, I've learned that sometimes the most powerful thing we can do is simply listen. Everyone deserves to feel heard, understood, and supported—regardless of what they're going through.

As I continue my studies in Health Policy and Administration, I'm committed to using my education and personal experiences to create systemic change in how we approach mental health support, particularly for young adults navigating college life and beyond.

*If you or someone you know is struggling with mental health challenges, remember: you are not alone, and seeking help is a sign of strength, not weakness.*
    `,
  },
];

// Helper function to get blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

// Helper function to get all blog posts metadata (for listing page)
export const getAllBlogPosts = () => {
  return blogPosts.map((post) => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    author: post.author,
    publishedAt: post.publishedAt,
    readTime: post.readTime,
    tags: post.tags,
    featured: post.featured,
  }));
};

// Helper function to get featured blog posts
export const getFeaturedBlogPosts = () => {
  return blogPosts.filter((post) => post.featured);
};
