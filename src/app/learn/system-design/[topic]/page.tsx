import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SystemDesignTopicPage } from "@/components/learn/system-design-topic";
import { getSystemDesignTopic, systemDesignTopics } from "@/data/system-design";

export function generateStaticParams() { return systemDesignTopics.map((topic) => ({ topic: topic.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ topic: string }> }): Promise<Metadata> {
  const { topic: slug } = await params;
  const topic = getSystemDesignTopic(slug);
  return { title: topic ? `${topic.title} | System Design` : "System Design" , description: topic?.description };
}

export default async function SystemDesignTopicRoute({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: slug } = await params;
  const topic = getSystemDesignTopic(slug);
  if (!topic) notFound();
  return <main className="section-pad system-design-page"><div className="container-shell"><SystemDesignTopicPage topic={topic} index={systemDesignTopics.findIndex((item) => item.slug === topic.slug)} /></div></main>;
}
