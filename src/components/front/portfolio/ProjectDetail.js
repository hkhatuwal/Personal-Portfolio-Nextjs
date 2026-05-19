import Image from "next/image";
import Link from "next/link";
import {
    IoArrowBack,
    IoCheckmarkCircle,
    IoGlobeOutline,
    IoLogoWhatsapp,
} from "react-icons/io5";
import ShareProjectButton from "./ShareProjectButton";

const cardClass =
    "rounded-2xl border border-white/10 bg-[#1a1d21] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)]";

const ProjectDetail = ({ project, related = [], shareUrl }) => {
    return (
        <article className="pb-16">
            <section className="relative -mx-4 sm:mx-0 rounded-none sm:rounded-3xl overflow-hidden border border-white/10 bg-[#1a1d21]">
                <ProjectHero project={project} />
            </section>

            <nav className="mt-8">
                <Link
                    href="/#portfolio"
                    className="inline-flex items-center gap-2 text-sm text-[#878e99] hover:text-primary transition-colors"
                >
                    <IoArrowBack className="text-lg" />
                    Back to Portfolio
                </Link>
            </nav>

            <ProjectContentGrid project={project} related={related} shareUrl={shareUrl} />
        </article>
    );
};

function ProjectContentGrid({ project, related, shareUrl }) {
    return (
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
                {project.screenshots?.length > 0 && (
                    <ProjectScreenshots
                        screenshots={project.screenshots}
                        title={project.title}
                    />
                )}

                <section className={cardClass}>
                    <h2 className="text-sm uppercase tracking-[0.2em] text-primary font-light mb-4">
                        Project Overview
                    </h2>
                    <p className="text-base sm:text-lg text-[#c4cfde] leading-relaxed">
                        {project.overview}
                    </p>
                    <p className="mt-4 text-sm text-[#878e99] leading-relaxed">
                        {project.desc}
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[#c4cfde] mb-6">Key Features</h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {project.features.map((feature, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-3 rounded-xl border border-white/10 bg-[#1a1d21] p-4 hover:border-primary/40 transition-colors"
                            >
                                <IoCheckmarkCircle className="text-primary text-xl shrink-0 mt-0.5" />
                                <span className="text-sm sm:text-base text-[#c4cfde]">
                                    {feature}
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[#c4cfde] mb-6">
                        Impact & Outcomes
                    </h2>
                    <div className="space-y-3">
                        {project.outcomes.map((outcome, i) => (
                            <OutcomeRow key={i} index={i} outcome={outcome} />
                        ))}
                    </div>
                </section>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
                <div className={cardClass}>
                    <h3 className="text-sm uppercase tracking-[0.15em] text-primary mb-4">
                        Get in touch
                    </h3>
                    <ProjectCtaButtons project={project} shareUrl={shareUrl} />
                </div>

                <TechStackCard project={project} />

                {related.length > 0 && <RelatedProjects related={related} />}
            </aside>
        </div>
    );
}

function TechStackCard({ project }) {
    return (
        <div className={cardClass}>
            <h3 className="text-sm uppercase tracking-[0.15em] text-primary mb-4">
                Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                    <span
                        key={tech}
                        className="text-xs sm:text-sm text-[#c4cfde] bg-[#212428] border border-white/15 rounded-lg px-3 py-1.5"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}

function ProjectScreenshots({ screenshots, title }) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-[#c4cfde] mb-6">
                Screenshots & Preview
            </h2>
            <div
                className={`grid gap-4 ${
                    screenshots.length === 1
                        ? "grid-cols-1"
                        : "grid-cols-1 sm:grid-cols-2"
                }`}
            >
                {screenshots.map((src, i) => (
                    <div
                        key={`${src}-${i}`}
                        className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#212428] aspect-video"
                    >
                        <Image
                            src={src}
                            alt={`${title} screenshot ${i + 1}`}
                            fill
                            className="object-contain p-2"
                            sizes="(max-width: 640px) 100vw, 50vw"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

function ProjectHero({ project }) {
    return (
        <div className="relative h-[280px] sm:h-[380px] lg:h-[440px] w-full">
            <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover"
                sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#212428] via-[#212428]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 bg-gradient-to-t from-[#212428]/95 via-[#212428]/70 to-transparent pt-20">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs uppercase tracking-wider text-primary bg-primary/20 border border-primary/50 rounded-full px-3 py-1 font-medium">
                        {project.category}
                    </span>
                    <span className="text-xs text-[#878e99]">{project.date}</span>
                    <span className="text-xs text-[#878e99]">•</span>
                    <span className="text-xs text-[#c4cfde]">{project.role}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#c4cfde] tracking-tight leading-tight max-w-4xl">
                    {project.title}
                </h1>
                <p className="mt-3 text-lg text-primary font-medium">{project.subtitle}</p>
            </div>
        </div>
    );
}

function ProjectCtaButtons({ project, shareUrl }) {
    return (
        <div className="flex flex-col gap-3">
            {project.demoUrl && (
                <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary/90 text-white px-4 py-2.5 text-sm font-medium transition-colors"
                >
                    <IoGlobeOutline className="text-lg" />
                    View Live Demo
                </a>
            )}
            <a
                href="https://wa.me/+918607779869"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary/20 hover:bg-primary/30 border border-primary/50 text-primary px-4 py-2.5 text-sm font-medium transition-colors"
            >
                <IoLogoWhatsapp className="text-lg" />
                Discuss Project
            </a>
            <ShareProjectButton title={project.title} url={shareUrl} />
        </div>
    );
}

function OutcomeRow({ index, outcome }) {
    return (
        <div className="flex items-center gap-4 rounded-xl border border-primary/30 bg-[#1a1d21] px-5 py-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/25 text-primary text-sm font-bold">
                {String(index + 1).padStart(2, "0")}
            </span>
            <p className="text-[#c4cfde]">{outcome}</p>
        </div>
    );
}

function RelatedProjects({ related }) {
    return (
        <div className={cardClass}>
            <h3 className="text-sm uppercase tracking-[0.15em] text-primary mb-4">
                Related Projects
            </h3>
            <ul className="space-y-4">
                {related.map((item) => (
                    <li key={item.slug}>
                        <Link
                            href={`/portfolio/${item.slug}`}
                            className="group flex gap-3 items-center"
                        >
                            <div className="relative h-14 w-20 shrink-0 rounded-lg overflow-hidden border border-white/10 bg-[#212428]">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-fill group-hover:scale-105 transition-transform duration-300"
                                    sizes="80px"
                                />
                            </div>
                            <div className="min-w-0">
                                <p className="text-sm font-medium text-[#c4cfde] group-hover:text-primary transition-colors line-clamp-2">
                                    {item.title}
                                </p>
                                <p className="text-xs text-[#878e99] mt-0.5">{item.category}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProjectDetail;
