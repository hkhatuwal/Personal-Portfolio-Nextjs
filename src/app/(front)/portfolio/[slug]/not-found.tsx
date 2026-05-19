import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

export default function ProjectNotFound() {
    return (
        <section className="py-20 px-4 text-center">
            <div className="mx-auto max-w-lg rounded-2xl border border-white/10 bg-white/[0.04] p-10">
                <h1 className="text-3xl font-bold text-white/90">
                    Project not found
                </h1>
                <p className="mt-3 text-white/60">
                    This project link may be outdated or incorrect.
                </p>
                <Link
                    href="/#portfolio"
                    className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary hover:bg-primary/90 text-white px-5 py-2.5 text-sm font-medium transition-colors"
                >
                    <IoArrowBack />
                    View all projects
                </Link>
            </div>
        </section>
    );
}
