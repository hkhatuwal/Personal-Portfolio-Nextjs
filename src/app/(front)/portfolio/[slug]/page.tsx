import { notFound } from "next/navigation";
import ProjectDetail from "@/components/front/portfolio/ProjectDetail";
import { mergeProjectData } from "@/data/portfolioDetails";
import {
    getAllProjectSlugs,
    getProjectBySlug,
    getRelatedProjects,
} from "@/lib/portfolio";

type PageProps = {
    params: { slug: string };
};

export function generateStaticParams() {
    return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
    const project = getProjectBySlug(params.slug);
    if (!project) return { title: "Project Not Found | Devroox" };

    const enriched = mergeProjectData(project);

    return {
        title: `${enriched.title} | Devroox Portfolio`,
        description: enriched.overview,
        openGraph: {
            title: enriched.title,
            description: enriched.overview,
            images: enriched.image.startsWith("http")
                ? enriched.image
                : [{ url: enriched.image }],
            type: "website",
        },
    };
}

export default function PortfolioProjectPage({ params }: PageProps) {
    const project = getProjectBySlug(params.slug);
    if (!project) notFound();

    const enriched = mergeProjectData(project);
    const related = getRelatedProjects(params.slug);
    const baseUrl =
        process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
        "https://devroox.com";
    const shareUrl = `${baseUrl}/portfolio/${params.slug}`;

    return (
        <section className="py-10 md:py-16 px-4">
            <div className="mx-auto max-w-6xl">
                <header className="mb-6 text-center">
                    <p className="text-md lg:text-lg text-primary/75 font-thin uppercase tracking-[0.25em]">
                        Case Study
                    </p>
                </header>
                <ProjectDetail
                    project={enriched}
                    related={related}
                    shareUrl={shareUrl}
                />
            </div>
        </section>
    );
}
