import { portfolio } from "../../constants";

export function slugify(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
        .slice(0, 80);
}

export function getPortfolioWithSlugs() {
    return portfolio.map((item) => ({
        ...item,
        slug: item.slug || slugify(item.title),
    }));
}

export function getProjectBySlug(slug) {
    return getPortfolioWithSlugs().find((item) => item.slug === slug) ?? null;
}

export function getAllProjectSlugs() {
    return getPortfolioWithSlugs().map((item) => item.slug);
}

export function getRelatedProjects(currentSlug, limit = 3) {
    const current = getProjectBySlug(currentSlug);
    if (!current) return [];

    return getPortfolioWithSlugs()
        .filter(
            (item) =>
                item.slug !== currentSlug && item.category === current.category
        )
        .slice(0, limit);
}
